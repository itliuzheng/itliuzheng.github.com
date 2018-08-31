export const userStatus = (state,user)=>{
  console.log('userStatus==',user)
  if(user){
    state.currentUser = user;
    state.isLogin = true;
  }else if(user == null){
    sessionStorage.setItem('username',null);
    sessionStorage.setItem('userToken','');
    state.currentUser = null;
    state.isLogin = false;
    state.token = '';
  }
}
export const tokenStatus = (state,token)=>{
  sessionStorage.setItem('userToken',token);
}
