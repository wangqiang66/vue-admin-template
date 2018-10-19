/**
 * function: 权限管理
 * author  : wq
 * update  : 2018/9/29 15:31
 */
import Layout from '@/views/layout/Layout'

const AccountListView = () => import('@/views/account/list.vue')

const accountRouter = {
  path: '/authority',
  component: Layout,
  redirect: '/authority/list',
  name: 'Authority',
  meta: {
    title: 'Authority',
    icon: 'el-icon-menu',
    menu: true,
    sort: 30
  },
  children: [
    {
      path: '/authority/list',
      component: AccountListView,
      name: 'AuthorityList',
      meta: {
        title: 'AuthorityList',
        noCache: true,
        menu: true,
        sort: 10
      }
    }
  ]
}

export default accountRouter
