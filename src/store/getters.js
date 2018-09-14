// export const currentUser = state => state.currentUser;
// export const isLogin = state => state.isLogin;
const getters ={
  token: state => state.user.token,
  // avatar: state => state.user.avatar,
  name: state => state.user.name,
  // introduction: state => state.user.introduction,
  // status: state => state.user.status,
  // roles: state => state.user.roles,
  // setting: state => state.user.setting
}

export default getters
