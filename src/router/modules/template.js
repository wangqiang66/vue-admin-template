/**
 * function: 模板管理信息
 * author  : wq
 * update  : 2018/9/29 15:31
 */
import Layout from '@/views/layout/Layout'

const AccountListView = () => import('@/views/account/list.vue')

const accountRouter = {
  path: '/template',
  component: Layout,
  redirect: '/template/list',
  name: 'Template',
  meta: {
    title: 'Template',
    icon: 'el-icon-menu',
    menu: true,
    sort: 30
  },
  children: [
    {
      path: '/template/list',
      component: AccountListView,
      name: 'TemplateList',
      meta: {
        title: 'TemplateList',
        noCache: true,
        menu: true,
        sort: 10
      }
    }
  ]
}

export default accountRouter
