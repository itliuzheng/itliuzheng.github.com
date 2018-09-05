export const userStatus = (state,user)=>{
  console.log('userStatus==',user)
  if(user){
    state.currentUser = user;
    state.isLogin = true;
  }else if(user == null){
    localStorage.setItem('username',null);
    localStorage.setItem('userToken',null);
    state.currentUser = null;
    state.isLogin = false;
    state.token = '';
  }
}
export const tokenStatus = (state,token)=>{
  localStorage.setItem('userToken',token);
}
