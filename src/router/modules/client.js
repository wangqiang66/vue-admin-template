/**
 * function: 账户管理信息
 * author  : wq
 * update  : 2018/9/29 15:31
 */
import Layout from '@/views/layout/Layout'

const AccountListView = () => import('@/views/account/list.vue')

const accountRouter = {
  path: '/client',
  component: Layout,
  redirect: '/client/list',
  name: 'Client',
  meta: {
    title: 'Client',
    icon: 'el-icon-menu',
    menu: true,
    sort: 10
  },
  children: [
    {
      path: '/client/list',
      component: AccountListView,
      name: 'ClientList',
      meta: {
        title: 'ClientList',
        noCache: true,
        menu: true,
        sort: 15
      }
    }
  ]
}

export default accountRouter
