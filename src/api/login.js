import ajax from '@/utils/ajax'

export function loginByUsername(username,password) {
  const data = {
    loginName:username,
    password
  }
  return ajax({
    url:'/user/login',
    method:'post',
    data
  })
}
