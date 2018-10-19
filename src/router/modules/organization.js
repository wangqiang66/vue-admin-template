/**
 * function: 组织管理信息
 * author  : wq
 * update  : 2018/9/29 15:31
 */
import Layout from '@/views/layout/Layout'

const AccountListView = () => import('@/views/account/list.vue')

const accountRouter = {
  path: '/org',
  component: Layout,
  redirect: '/org/list',
  name: 'Organization',
  meta: {
    title: 'Organization',
    icon: 'el-icon-menu',
    menu: true,
    sort: 30
  },
  children: [
    {
      path: '/org/list',
      component: AccountListView,
      name: 'OrganizationList',
      meta: {
        title: 'OrganizationList',
        noCache: true,
        menu: true,
        sort: 10
      }
    }
  ]
}

export default accountRouter
