import { Dispatch, SetStateAction } from 'react';
import { z } from 'zod';
import { ActionType, action } from './formState.types';

const hasUpperCaseRegex = /[A-Z]/;
const hasLowerCaseRegex = /[a-z]/;
const hasNumberRegex = /\d/;

export const nameSchema = z.string().min(6);
export const emailSchema = z.string().email();
export const phoneSchema = z.string().min(10); //TODO: regex validation???
export const passwordLengthSchema = z.string().min(6);
export const passwordUpperSchema = z.string().regex(hasUpperCaseRegex);
export const passwordLowerSchema = z.string().regex(hasLowerCaseRegex);
export const passwordNumberSchema = z.string().regex(hasNumberRegex);

export function validateInput(
  schema: z.ZodString,
  value: string,
  dispatch: Dispatch<action>,
  type:
    | ActionType.checkName
    | ActionType.checkEmail
    | ActionType.checkPhone
    | ActionType.checkPassLen
    | ActionType.checkPassLower
    | ActionType.checkPassNum
    | ActionType.checkPassUpper,
) {
  try {
    schema.parse(value);
    dispatch({ type, payload: true }); // valid  input
  } catch (error) {
    dispatch({ type, payload: false }); // invalid input
  }
}
