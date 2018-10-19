import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
let token = null
export function getToken() {
  try {
    if (token) {
      return token
    }
  } catch (e) {
    console.log(e)
  }
  return (token = Cookies.get(TokenKey))
}

export function setToken(_token) {
  return Cookies.set(TokenKey, (token = _token))
}

export function removeToken() {
  token = null
  return Cookies.remove(TokenKey)
}
