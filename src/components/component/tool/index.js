const REG = {
    username:/\w+/,
    phone:/1[345678]{9}/,
    password:/\d+/
  };

export default{
  password(value){
    console.log(value);
    console.log(REG.password.test(value));
    return REG.password.test(value)
  }
}
