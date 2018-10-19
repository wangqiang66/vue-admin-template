/**
 * function: wx
 * author  : wq
 * update  : 2018/9/5 9:41
 */
import { Loading, Message } from 'element-ui'

const wx = {
  loading: null,
  loadingNum: 0,
  showNavigationBarLoading() {
    if (this.loading) {
      this.loadingNum++
    } else {
      this.loadingNum = 1
      this.loading = Loading.service({
        lock: true,
        text: '加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
  },
  hideNavigationBarLoading() {
    if (--this.loadingNum <= 0) {
      this.loading.close()
      this.loading = null
    }
  },
  showToast(msg) {
    if (typeof msg === 'object' && msg !== null) {
      msg = msg.title
    }
    Message(msg)
  }
}
export default wx
