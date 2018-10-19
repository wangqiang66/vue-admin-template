<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">{{ $t('login.title') }}</h3>
      </div>
      <el-form-item prop="username">
        <el-form-item :label="$t('login.username')">
          <el-input v-model="loginForm.username" name="username"></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item prop="password">
        <el-form-item :label="$t('login.password')">
          <el-input :type="passwordType" v-model="loginForm.password" name="password"></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked">{{ $t('login.rememberPassword') }}</el-checkbox>
      </el-form-item>
      <el-form-item class="text-center">
        <el-button class="btn-login" type="primary" @click.native.prevent="handleLogin">{{ $t('login.logIn') }}</el-button>
      </el-form-item>
    </el-form>
    <div class="copyright-wrap">
      <span class="copyright">{{ $t('login.copyright') }}</span>
    </div>
  </div>
</template>

<script>
import { isValidUsername } from '@/utils/validate'
import Cookies from 'js-cookie'

const SplitUserNameArray = '|'
const SplitUserPass = '&'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isValidUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    const cookieUser = (Cookies.get('username') || '').split(SplitUserNameArray)[0]
    let username = ''
    let password = ''
    if (cookieUser) {
      const tmp = cookieUser.split(SplitUserPass)
      username = tmp[0]
      password = tmp[1]
    }
    return {
      loginForm: {
        username: username,
        password: password
      },
      loginRules: {
        username: [{ trigger: 'blur', validator: validateUsername }],
        password: [{ trigger: 'blur', validator: validatePassword }]
      },
      checked: true,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }

  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 记住账号密码的时候，需要将账号和密码存入cookie，以便于下次登录
          if (this.checked) {
            const { username, password } = this.loginForm
            const cookieUser = (Cookies.get('username') || '')
            if (cookieUser) {
              const reg = new RegExp(`((?:^|${SplitUserNameArray})${username}&)(?:[^${SplitUserNameArray}$]*)`)
              if (reg.test(cookieUser)) {
                const saveCookie = cookieUser.replace(reg, `$1${password}`)
                Cookies.set('username', saveCookie)
              } else {
                Cookies.set('username', `${username}&${password}|${cookieUser}`)
              }
            } else {
              Cookies.set('username', `${username}&${password}`)
            }
          }
          this.$store.dispatch('LoginByUsername', this.loginForm).then((data) => {
            this.$store.dispatch('GenerateRoutes', { roles: data.roles }).then(() => {
              this.$router.addRoutes(this.$store.getters.addRouters)
              this.$router.push({ path: this.redirect || '/' })
            })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg:#283443;
  $light_gray:#eee;
  $dark_gray:#889aa4;
  $cursor: #fff;
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .login-form {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 520px;
      max-width: 100%;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .btn-login {
      margin-top: 20px;
      width: 30%;
    }
    .copyright-wrap {
      position: absolute;
      bottom: 20px;
      width:100%;
      max-width: 100%;
      margin: 0 auto;
      text-align: center;
    }
    .copyright {
      font-size: 14px;
      color: $dark_gray;
    }
  }
</style>
