/**
 * function: 角色管理信息
 * author  : wq
 * update  : 2018/9/29 15:31
 */
import Layout from '@/views/layout/Layout'

const AccountListView = () => import('@/views/account/list.vue')

const accountRouter = {
  path: '/role',
  component: Layout,
  redirect: '/role/list',
  name: 'Role',
  meta: {
    title: 'Role',
    icon: 'el-icon-menu',
    menu: true,
    sort: 30
  },
  children: [
    {
      path: '/role/list',
      component: AccountListView,
      name: 'RoleList',
      meta: {
        title: 'RoleList',
        noCache: true,
        menu: true,
        sort: 10
      }
    }
  ]
}

export default accountRouter
