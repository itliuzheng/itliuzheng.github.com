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

export function getUserInfo(token) {
  return {
    roles: ['admin'],
    name: 'zhang san'
  }
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })
}
