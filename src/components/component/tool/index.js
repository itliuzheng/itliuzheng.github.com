//表单验证

const RULES = {
  PASSWORD_STRONG_PARA:2,
  PASSWORD_MIN_LENGTH:6,
  PASSWORD_MAX_LENGTH:12,
  CHECK_PHONE_NUMBER_URL:"",
  SEND_SMS_CODE_URL:""
};
const REGS = {
  PHONE_REG:/^1[0-9]{10}$/,
  CAPTCHA_REG:/^[a-zA-Z]{4}$/,
  ID_CARD_REG:/^(\d{18}$|^\d{17}(\d|X|x))$/,
  SMS_CODE_REG:/^[0-9]{6}$/,
  BANK_ACCOUNT_REG:/^\d{16}|\d{19}$/
};
const ERRORS = {
  INVALID_PHONE_NUMBER:"手机号码不合法，请重新输入",
  PHONE_ALREADY_REGISTERED:"此手机号已被注册",
  PHONE_NOT_REGISTERED:"此手机号非注册用户",
  INVALID_CAPTCHA:"请输入4位英文字母验证码",
  PASS_TOO_SINPLE:"密码过于简单",
  PASS_TOO_LONE:`密码最长不超过${RULES.PASSWORD_MAX_LENGTH}位字符串`,
  PASS_NOT_NULL:"密码不能为空",
  PASS_UNEQUAL_PASS_CONF:"密码输入不匹配，请重新输入",
  SMS_CAN_NOT_BE_NULL:"请填写短信验证码",
  NAME_CAN_NOT_BE_NULL:"请填写姓名",
  ID_CARD_INVALID:"请填写正确的身份证号码",
  INVALID_SMS_CODE:"请输入正确的短信验证码",
  BANK_ACCOUNT:"请输入正确的银行卡号"

};

export default{
  validatePhoneNum(value) {
    return {
      boolean:REGS.PHONE_REG.test(value.trim()),
      msg:ERRORS.INVALID_PHONE_NUMBER
    }
  },
  validateCaptcha(value){
    return {
      boolean:REGS.CAPTCHA_REG.test(value.trim()),
      msg:ERRORS.INVALID_CAPTCHA
    }
  },
  validatePassword(value){
    let msg = '';
    if(value.trim() == ''){
      msg = ERRORS.PASS_NOT_NULL;
      return {
        boolean:false,
        msg:msg
      }
    }
    if(value.length < RULES.PASSWORD_MIN_LENGTH){
      msg = ERRORS.PASS_TOO_SINPLE;
      return {
        boolean:false,
        msg:msg
      }
    }
    if(value.length > RULES.PASSWORD_MAX_LENGTH){
      msg = ERRORS.PASS_TOO_LONE;
      return {
        boolean:false,
        msg:msg
      }
    }
    return {
      boolean:true,
      msg:msg
    }
  },
  validatePassConf(confirm,val){
    return {
      boolean:confirm == val?true:false,
      msg:ERRORS.PASS_UNEQUAL_PASS_CONF
    }
  },
  validateSms(val){
    return {
      boolean:val.trim() == ''?false:true,
      msg:ERRORS.SMS_CAN_NOT_BE_NULL
    }
  },
  validateRealName(name){
    return {
      boolean:name.trim() == ''?false:true,
      msg:ERRORS.NAME_CAN_NOT_BE_NULL
    }
  },
  validateIdCard(card){
    return {
      boolean:REGS.ID_CARD_REG.test(card.trim()),
      msg:ERRORS.ID_CARD_INVALID
    }
  },
  validateSmsCode(code){
    return {
      boolean:REGS.SMS_CODE_REG.test(code.trim()),
      msg:ERRORS.INVALID_SMS_CODE
    }
  },
  validateBankAccount(bank){
    return {
      boolean:REGS.BANK_ACCOUNT_REG.test(bank.trim()),
      msg:ERRORS.BANK_ACCOUNT
    }
  }
}
