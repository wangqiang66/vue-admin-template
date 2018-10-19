/**
 * function: 用户管理信息
 * author  : wq
 * update  : 2018/9/29 15:31
 */
import Layout from '@/views/layout/Layout'

const AccountListView = () => import('@/views/account/list.vue')

const accountRouter = {
  path: '/account',
  component: Layout,
  redirect: '/account/list',
  name: 'Account',
  meta: {
    title: 'Account',
    icon: 'el-icon-menu',
    menu: true,
    sort: 20
  },
  children: [
    {
      path: '/account/list',
      component: AccountListView,
      name: 'AccountList',
      meta: {
        title: 'AccountList',
        noCache: true,
        menu: true,
        sort: 10
      }
    }
  ]
}

export default accountRouter
