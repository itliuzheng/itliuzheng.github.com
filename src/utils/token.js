import Cookies from 'js-cookie'
import {parseStrEmpty} from "./index";

const TokenKey = 'token'

export function getToken() {
  return parseStrEmpty(Cookies.get(TokenKey))
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
