export type SignupInputs = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  nameValid: boolean;
  emailValid: boolean;
  phoneValid: boolean;
  passLenValid: boolean;
  passUpperValid: boolean;
  passLowerValid: boolean;
  passNumValid: boolean;
  confirmPasswordValid: boolean;
  formValid: boolean;
};

export enum ActionType {
  changeName,
  changeEmail,
  changePhone,
  changePassword,
  changeConfirmPassword,
  checkName,
  checkEmail,
  checkPhone,
  checkPassLen,
  checkPassUpper,
  checkPassLower,
  checkPassNum,
  checkConfirmPass,
  checkForm,
}

type changeName_action = {
  type: ActionType.changeName;
  payload: string;
};
type changeEmail_action = {
  type: ActionType.changeEmail;
  payload: string;
};
type changePhone_action = {
  type: ActionType.changePhone;
  payload: string;
};
type changePassword_action = {
  type: ActionType.changePassword;
  payload: string;
};
type changeConfirmPass_action = {
  type: ActionType.changeConfirmPassword;
  payload: string;
};

type validateName_action = {
  type: ActionType.checkName;
  payload: boolean;
};
type validateEmail_action = {
  type: ActionType.checkEmail;
  payload: boolean;
};
type validatePhone_action = {
  type: ActionType.checkPhone;
  payload: boolean;
};
type validatePassLen_action = {
  type: ActionType.checkPassLen;
  payload: boolean;
};
type validatePassUpper_action = {
  type: ActionType.checkPassUpper;
  payload: boolean;
};
type validatePassLower_action = {
  type: ActionType.checkPassLower;
  payload: boolean;
};
type validatePassNum_action = {
  type: ActionType.checkPassNum;
  payload: boolean;
};
type validateConfirmPass_action = {
  type: ActionType.checkConfirmPass;
  payload: boolean;
};
type validateForm_action = {
  type: ActionType.checkForm;
  payload: boolean;
};

export type action =
  | changeName_action
  | changeEmail_action
  | changePhone_action
  | changePassword_action
  | changeConfirmPass_action
  | validateName_action
  | validateEmail_action
  | validatePhone_action
  | validatePassLen_action
  | validatePassLower_action
  | validatePassNum_action
  | validatePassUpper_action
  | validateConfirmPass_action
  | validateForm_action;
