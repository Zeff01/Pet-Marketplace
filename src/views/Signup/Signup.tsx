import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Image } from 'expo-image';
import Input from '@components/Input';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect, useReducer } from 'react';
import { reducer, initialValue } from './formStates';
import { ActionType } from './formState.types';
import { useGlobalTheme } from '../../providers/ThemeProvider';

import {
  nameSchema,
  emailSchema,
  phoneSchema,
  passwordLengthSchema,
  passwordLowerSchema,
  passwordNumberSchema,
  passwordUpperSchema,
  validateInput,
} from './validationSchema';

export default function Signup() {
  const dimension = Dimensions.get('screen');
  const { colors } = useGlobalTheme();
  // NOTE: this is cancer code, replace later use a form library or useReducer
  const [loading, setLoading] = useState(false);

  const [
    {
      name,
      email,
      phone,
      password,
      confirmPassword,
      nameValid,
      emailValid,
      phoneValid,
      passLenValid,
      passLowerValid,
      passNumValid,
      passUpperValid,
      confirmPasswordValid,
      formValid,
    },
    dispatch,
  ] = useReducer(reducer, initialValue);

  // TODO: integrate firebase  login
  async function loginUser() {
    setLoading(true);
    await new Promise(() =>
      setTimeout(() => {
        setLoading(false);
      }, 2000),
    );
  }

  useEffect(() => {
    validateInput(nameSchema, name, dispatch, ActionType.checkName);
  }, [name]);
  useEffect(() => {
    validateInput(emailSchema, email, dispatch, ActionType.checkEmail);
  }, [email]);
  useEffect(() => {
    validateInput(phoneSchema, phone, dispatch, ActionType.checkPhone);
  }, [phone]);
  useEffect(() => {
    validateInput(passwordLengthSchema, password, dispatch, ActionType.checkPassLen);
    validateInput(passwordUpperSchema, password, dispatch, ActionType.checkPassUpper);
    validateInput(passwordLowerSchema, password, dispatch, ActionType.checkPassLower);
    validateInput(passwordNumberSchema, password, dispatch, ActionType.checkPassNum);
  }, [password]);
  useEffect(() => {
    const passwordMatched = password === confirmPassword;
    dispatch({ type: ActionType.checkConfirmPass, payload: passwordMatched });
  }, [confirmPassword]);

  useEffect(() => {
    const isFormValid = Boolean(
      nameValid &&
        emailValid &&
        phoneValid &&
        confirmPasswordValid &&
        passLenValid &&
        passUpperValid &&
        passLowerValid &&
        passNumValid,
    );
    dispatch({ type: ActionType.checkForm, payload: isFormValid });
  }, [
    nameValid,
    emailValid,
    phoneValid,
    confirmPasswordValid,
    passLenValid,
    passUpperValid,
    passLowerValid,
    passNumValid,
  ]);

  const submitDisabled = loading || !formValid;

  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View
          style={{ height: dimension.height / 2, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('../../../assets/images/pet-logo.png')}
            placeholder={'pet logo'}
            style={{
              height: 200,
              aspectRatio: 1 / 1,
            }}
          />
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: colors.foreground }}>
            Sell - Le - Pet
          </Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', rowGap: 15 }}>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: colors.foreground }}>Name</Text>
            <Input
              loading={loading}
              value={name}
              onChangeText={e => dispatch({ type: ActionType.changeName, payload: e })}
              placeholder="firstname lastname"
            />
            <Text
              style={{
                color: nameValid ? colors.secondary : '#FF8080',
                opacity: name ? 1 : 0,
              }}>
              name length minimum 6 required
            </Text>
          </View>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: colors.foreground }}>Email</Text>
            <Input
              loading={loading}
              value={email}
              onChangeText={e => dispatch({ type: ActionType.changeEmail, payload: e })}
              placeholder="user@email.com"
            />
            <Text
              style={{
                color: emailValid ? colors.secondary : '#FF8080',
                opacity: email ? 1 : 0,
              }}>
              must be a valid email
            </Text>
          </View>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: colors.foreground }}>User phone no:</Text>
            <Input
              loading={loading}
              value={phone}
              onChangeText={e => dispatch({ type: ActionType.changePhone, payload: e })}
              placeholder="phone number"
              keyboardType="phone-pad"
            />
            <Text
              style={{
                color: phoneValid ? colors.secondary : '#FF8080',
                opacity: phone ? 1 : 0,
              }}>
              must be a valid phone number
            </Text>
          </View>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: colors.foreground }}>Password</Text>
            <Input
              loading={loading}
              value={password}
              onChangeText={e => dispatch({ type: ActionType.changePassword, payload: e })}
              placeholder="password"
              secureTextEntry
            />
            <View>
              <Text
                style={{
                  color: passLenValid ? colors.secondary : '#FF8080',
                  opacity: password ? 1 : 0,
                }}>
                length must be atleast 6
              </Text>
              <Text
                style={{
                  color: passUpperValid ? colors.secondary : '#FF8080',
                  opacity: password ? 1 : 0,
                }}>
                must have atleast one uppercase letter
              </Text>
              <Text
                style={{
                  color: passLowerValid ? colors.secondary : '#FF8080',
                  opacity: password ? 1 : 0,
                }}>
                must have atleast one lowercase letter
              </Text>
              <Text
                style={{
                  color: passNumValid ? colors.secondary : '#FF8080',
                  opacity: password ? 1 : 0,
                }}>
                must have atleast one number
              </Text>
            </View>
          </View>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: colors.foreground }}>Confirm Password</Text>
            <Input
              loading={loading}
              value={confirmPassword}
              onChangeText={e => dispatch({ type: ActionType.changeConfirmPassword, payload: e })}
              placeholder="confirm password"
              secureTextEntry
            />
            <Text
              style={{
                color: confirmPasswordValid ? colors.secondary : '#FF8080',
                opacity: confirmPassword ? 1 : 0,
              }}>
              password does not match
            </Text>
          </View>
          <TouchableOpacity
            disabled={submitDisabled}
            style={{
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
              width: 250,
              backgroundColor: colors.primary,
              paddingVertical: 4,
              borderRadius: 10,
              opacity: submitDisabled ? 0.5 : 1,
              height: 30,
              marginBottom: 20,
            }}
            onPress={loginUser}>
            {loading ? (
              <ActivityIndicator animating={true} color={colors.secondary} />
            ) : (
              <Text
                style={{
                  color: colors.foreground,
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                Signup
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
