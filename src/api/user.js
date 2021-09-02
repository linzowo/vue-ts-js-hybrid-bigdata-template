// import request from '@/utils/request'

/* export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
} */
export function login(data) {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        token: 'admin-token'
      }
    })
  })
}

/* export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
} */

export function getInfo(token) {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        name: 'Super Admin',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
      }
    })
  })
}

/* export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
} */

export function logout() {
  return new Promise((resolve, reject) => {
    resolve({
      code: 200,
      data: {}
    })
  })
}
