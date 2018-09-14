export const userStatus = (state,user,token)=>{
  const user_info = {
    username:null,
    token:null
  };
  if(user){
    user_info.username = user;
    user_info.token = token;
    state.currentUser = user;
    state.isLogin = true;
    state.token = token;
    localStorage.setItem('user_info',JSON.stringify(user_info));
  }else{
    localStorage.setItem('user_info',null);
    state.currentUser = null;
    state.isLogin = false;
    state.token = null;
  }
}
// export const tokenStatus = (state,token)=>{
//   localStorage.setItem('userToken',token);
// }
