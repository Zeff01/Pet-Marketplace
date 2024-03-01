import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { COLORS } from '@theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { z } from 'zod';
import { SetStateAction, useState, Dispatch, useEffect } from 'react';

const dimension = Dimensions.get('screen');

// TODO: moved into another file
const nameSchema = z.string().min(6);
const emailSchema = z.string().email();
const phoneSchema = z.string().min(10); //TODO: regex validation???
const passwordLengthSchema = z.string().min(6);
const hasUpperCaseRegex = /[A-Z]/;
const hasLowerCaseRegex = /[a-z]/;
const hasNumberRegex = /\d/;
const passwordUpperSchema = z.string().regex(hasUpperCaseRegex);
const passwordLowerSchema = z.string().regex(hasLowerCaseRegex);
const passwordNumberSchema = z.string().regex(hasNumberRegex);

export default function Signup() {
  // NOTE: this is cancer code, replace later use a form library or useReducer
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [passLenValid, setPassLenValid] = useState(false);
  const [passUpperValid, setPassUpperValid] = useState(false);
  const [passLowerValid, setPassLowerValid] = useState(false);
  const [passNumValid, setPassNumValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  // TODO: integrate firebase  login
  async function loginUser() {
    setLoading(true);
    await new Promise(() =>
      setTimeout(() => {
        setLoading(false);
      }, 2000),
    );
  }

  function validateInput(
    schema: z.ZodString,
    value: string,
    setter: Dispatch<SetStateAction<boolean>>,
  ) {
    try {
      schema.parse(value);
      setter(true); // valid  input
    } catch (error) {
      console.error(error);
      setter(false); // invalid input
    }
  }

  useEffect(() => {
    validateInput(nameSchema, name, setNameValid);
  }, [name]);
  useEffect(() => {
    validateInput(emailSchema, email, setEmailValid);
  }, [email]);
  useEffect(() => {
    validateInput(phoneSchema, phone, setPhoneValid);
  }, [phone]);
  useEffect(() => {
    validateInput(passwordLengthSchema, password, setPassLenValid);
    validateInput(passwordUpperSchema, password, setPassUpperValid);
    validateInput(passwordLowerSchema, password, setPassLowerValid);
    validateInput(passwordNumberSchema, password, setPassNumValid);
  }, [password]);
  useEffect(() => {
    setConfirmPasswordValid(password === confirmPassword && confirmPassword.length > 0);
  }, [confirmPassword]);

  useEffect(() => {
    setFormValid(
      nameValid &&
        emailValid &&
        phoneValid &&
        confirmPasswordValid &&
        passLenValid &&
        passUpperValid &&
        passLowerValid &&
        passNumValid,
    );
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
      <ScrollView style={{ backgroundColor: COLORS['Dark Mode'].background }}>
        <View
          style={{ height: dimension.height / 2, alignItems: 'center', justifyContent: 'center' }}>
          <MaterialCommunityIcons name="dog" size={200} color={COLORS['Dark Mode'].foreground} />
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: COLORS['Dark Mode'].foreground }}>
            Sell - Le - Pet
          </Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', rowGap: 15 }}>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>Name</Text>
            <TextInput
              editable={!loading}
              value={name}
              onChangeText={setName}
              placeholder="firstname lastname"
              placeholderTextColor={COLORS['Dark Mode']['muted-foreground']}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderWidth: 2,
                borderColor: COLORS['Dark Mode'].accent,
                width: 250,
                borderRadius: 8,
                color: COLORS['Dark Mode'].foreground,
                opacity: loading ? 0.5 : 1,
              }}
            />
            <Text
              style={{
                color: '#FF8080',
                opacity: name && !nameValid ? 1 : 0,
              }}>
              name length minimum 6 required
            </Text>
          </View>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>Email</Text>
            <TextInput
              editable={!loading}
              value={email}
              onChangeText={setEmail}
              placeholder="user@email.com"
              placeholderTextColor={COLORS['Dark Mode']['muted-foreground']}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderWidth: 2,
                borderColor: COLORS['Dark Mode'].accent,
                width: 250,
                borderRadius: 8,
                color: COLORS['Dark Mode'].foreground,
                opacity: loading ? 0.5 : 1,
              }}
            />
            <Text
              style={{
                color: '#FF8080',
                opacity: email && !emailValid ? 1 : 0,
              }}>
              email is not valid
            </Text>
          </View>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>
              User phone no:
            </Text>
            <TextInput
              editable={!loading}
              value={phone}
              onChangeText={setPhone}
              placeholder="phone number"
              placeholderTextColor={COLORS['Dark Mode']['muted-foreground']}
              keyboardType="phone-pad"
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderWidth: 2,
                borderColor: COLORS['Dark Mode'].accent,
                width: 250,
                borderRadius: 8,
                color: COLORS['Dark Mode'].foreground,
                opacity: loading ? 0.5 : 1,
              }}
            />
            <Text
              style={{
                color: '#FF8080',
                opacity: phone && !phoneValid ? 1 : 0,
              }}>
              phone number is invalid
            </Text>
          </View>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>Password</Text>
            <TextInput
              editable={!loading}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="password"
              placeholderTextColor={COLORS['Dark Mode']['muted-foreground']}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderWidth: 2,
                borderColor: COLORS['Dark Mode'].accent,
                width: 250,
                borderRadius: 8,
                color: COLORS['Dark Mode'].foreground,
                opacity: loading ? 0.5 : 1,
              }}
            />
            <View>
              <Text
                style={{
                  color: '#FF8080',
                  opacity: password && !passLenValid ? 1 : 0,
                }}>
                length must be atleast 6
              </Text>
              <Text
                style={{
                  color: '#FF8080',
                  opacity: password && !passUpperValid ? 1 : 0,
                }}>
                must have atleast one uppercase letter
              </Text>
              <Text
                style={{
                  color: '#FF8080',
                  opacity: password && !passLowerValid ? 1 : 0,
                }}>
                must have atleast one lowercase letter
              </Text>
              <Text
                style={{
                  color: '#FF8080',
                  opacity: password && !passNumValid ? 1 : 0,
                }}>
                must have atleast one number
              </Text>
            </View>
          </View>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>
              Confirm Password
            </Text>
            <TextInput
              editable={!loading}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              placeholder="confirm password"
              placeholderTextColor={COLORS['Dark Mode']['muted-foreground']}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderWidth: 2,
                borderColor: COLORS['Dark Mode'].accent,
                width: 250,
                borderRadius: 8,
                color: COLORS['Dark Mode'].foreground,
                opacity: loading ? 0.5 : 1,
              }}
            />
            <Text
              style={{
                color: '#FF8080',
                opacity: confirmPassword && !confirmPasswordValid ? 1 : 0,
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
              backgroundColor: COLORS['Dark Mode'].primary,
              paddingVertical: 4,
              borderRadius: 10,
              opacity: submitDisabled ? 0.5 : 1,
              height: 30,
              marginBottom: 20,
            }}
            onPress={loginUser}>
            {loading ? (
              <ActivityIndicator animating={true} color={COLORS['Dark Mode'].secondary} />
            ) : (
              <Text
                style={{
                  color: COLORS['Dark Mode'].foreground,
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
