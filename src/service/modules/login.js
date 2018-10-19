import request from '../api'
import { LoginLogin, LoginLogout, LoginUserInfo } from '../defined'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request.post(LoginLogin, data, {
    definedUrl: LoginLogin
  })
}

export function logout() {
  return request.post(LoginLogout, {}, {
    definedUrl: LoginLogout
  })
}

export function getUserInfo(token) {
  const data = {
    token
  }
  return request.get(LoginUserInfo, data, {
    definedUrl: LoginUserInfo
  })
}

