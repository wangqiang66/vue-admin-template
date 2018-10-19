/**
 * function: api
 * author  : wq
 * update  : 2018/9/5 9:29
 */
import wx from 'wx'
import Fly from 'fly'
import AppConfig from '@/config/index'
import { getUserSession } from './index'

let fly
let sessionFly
let requestTime = 1
if (AppConfig.debug) {
  const EngineWrapper = require('flyio/dist/npm/engine-wrapper')
  const mock = require('./mock').default
  const engine = EngineWrapper(mock)
  fly = new Fly(engine)
  sessionFly = new Fly(engine)
} else {
  fly = new Fly()
  sessionFly = new Fly()
}

fly.interceptors.request.use((request) => {
  const session = localStorage.getItem('intentionSession')
  if (!session) {
    // 获取session后继续下面的操作
    if (requestTime++ > 3) {
      wx.showToast({
        title: '获取登录失败',
        icon: 'none'
      })
      return false
    }
    fly.lock()
    return getUserSession().finally(() => {
      fly.unlock()
    })
  } else {
    request.headers['sessionKey'] = session
  }
  if (!request.noLoading) {
    wx.showNavigationBarLoading()
  }
  return request
})

fly.interceptors.response.use(
  (response, promise) => {
    if (!response.request.noLoading) {
      wx.hideNavigationBarLoading()
    }
    requestTime = 1
    const data = response.data || {}
    if (data.retCode !== '1') {
      if (!response.request.defineError) {
        wx.showToast({
          title: data.retMsg,
          icon: 'none'
        })
      }
      return promise.reject(data)
    }
    return promise.resolve(data.data)
  },
  (err, promise) => {
    if (!err.request.noLoading) {
      wx.hideNavigationBarLoading()
    }
    if (err.status === 401 || err.status === 403) {
      localStorage.removeItem('intentionSession')
      if (requestTime++ > 3) {
        wx.showToast({
          title: '获取登录失败',
          icon: 'none'
        })
        return false
      }
      fly.lock()
      return getUserSession().finally(() => fly.unlock()).then(() => {
        fly.request(err.request)
      })
    }
    if (!err.request.defineError) {
      wx.showToast({
        title: err.message,
        icon: 'none'
      })
    }
    const error = {
      retCode: '-001',
      retMsg: '网络连接失败，请稍后重试'
    }
    promise.reject(error)
    return error
  }
)

sessionFly.interceptors.request.use((request) => {
  if (!request.noLoading) {
    wx.showNavigationBarLoading()
  }
  return request
})

sessionFly.interceptors.response.use(
  (response, promise) => {
    if (!response.request.noLoading) {
      wx.hideNavigationBarLoading()
    }
    const data = response.data || {}
    if (data.retCode !== '1') {
      if (!response.request.defineError) {
        wx.showToast({
          title: data.retMsg,
          icon: 'none'
        })
      }
      return promise.reject(data)
    }
    return promise.resolve(data.data)
  },
  (err, promise) => {
    if (!err.request.noLoading) {
      wx.hideNavigationBarLoading()
    }
    if (!err.request.defineError) {
      wx.showToast({
        title: err.message,
        icon: 'none'
      })
    }
    promise.reject({
      retCode: '-001',
      retMsg: '网络连接失败，请稍后重试'
    })
  }
)

export const newFly = sessionFly
export default fly
