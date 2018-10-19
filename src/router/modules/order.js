/**
 * function: 订单管理信息
 * author  : wq
 * update  : 2018/9/29 15:31
 */
import Layout from '@/views/layout/Layout'

const AccountListView = () => import('@/views/account/list.vue')

const accountRouter = {
  path: '/order',
  component: Layout,
  redirect: '/order/list',
  name: 'Order',
  meta: {
    title: 'Order',
    icon: 'el-icon-menu',
    menu: true,
    sort: 30
  },
  children: [
    {
      path: '/order/list',
      component: AccountListView,
      name: 'OrderList',
      meta: {
        title: 'OrderList',
        noCache: true,
        menu: true,
        sort: 10
      }
    }
  ]
}

export default accountRouter
