import { type SignupInputs, type action, ActionType } from './formState.types';

export function reducer(state: SignupInputs, action: action): SignupInputs {
  if (action.type === ActionType.changeName) {
    return { ...state, name: action.payload };
  }
  if (action.type === ActionType.changeEmail) {
    return { ...state, email: action.payload };
  }
  if (action.type === ActionType.changePhone) {
    return { ...state, phone: action.payload };
  }
  if (action.type === ActionType.changePassword) {
    return { ...state, password: action.payload };
  }
  if (action.type === ActionType.changeConfirmPassword) {
    return { ...state, confirmPassword: action.payload };
  }
  if (action.type === ActionType.checkName) {
    return { ...state, nameValid: action.payload };
  }
  if (action.type === ActionType.checkEmail) {
    return { ...state, emailValid: action.payload };
  }
  if (action.type === ActionType.checkPhone) {
    return { ...state, phoneValid: action.payload };
  }
  if (action.type === ActionType.checkPassLen) {
    return { ...state, passLenValid: action.payload };
  }
  if (action.type === ActionType.checkPassLower) {
    return { ...state, passLowerValid: action.payload };
  }
  if (action.type === ActionType.checkPassNum) {
    return { ...state, passNumValid: action.payload };
  }
  if (action.type === ActionType.checkPassUpper) {
    return { ...state, passUpperValid: action.payload };
  }
  if (action.type === ActionType.checkConfirmPass) {
    return { ...state, confirmPasswordValid: action.payload };
  }
  if (action.type === ActionType.checkForm) {
    return { ...state, formValid: action.payload };
  }

  return state;
}

export const initialValue = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  nameValid: false,
  emailValid: false,
  phoneValid: false,
  passLenValid: false,
  passUpperValid: false,
  passLowerValid: false,
  passNumValid: false,
  confirmPasswordValid: false,
  formValid: false,
};
