import { Text, View, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import Input from '@components/Input';

import { COLORS } from '@theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

// TODO: use form  library?
export default function Login() {
  const dimension = Dimensions.get('screen');

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // TODO: integrate firebase  login
  async function loginUser() {
    setLoading(true);
    await new Promise(() =>
      setTimeout(() => {
        setLoading(false);
      }, 2000),
    );
  }

  const submitDisabled = loading || user.length === 0 || password.length === 0;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS['Dark Mode'].background }}>
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
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: COLORS['Dark Mode'].foreground }}>
            Sell - Le - Pet
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', rowGap: 15 }}>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>
              user phone number
            </Text>
            <Input
              loading={loading}
              value={user}
              onChangeText={setUser}
              keyboardType="phone-pad"
              placeholder="phone number"
            />
          </View>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>password</Text>
            <Input
              loading={loading}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="password"
            />
          </View>
          {/* TODO: make into  a reusable compoenent */}
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
                Login
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
