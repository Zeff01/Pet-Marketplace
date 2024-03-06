import { Text, View, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import Input from '@components/Input';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useGlobalTheme } from '../../providers/ThemeProvider';

// TODO: use form  library?
export default function Login() {
  const dimension = Dimensions.get('screen');
  const { colors } = useGlobalTheme();

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
      <View style={{ flex: 1, backgroundColor: colors.background }}>
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', rowGap: 15 }}>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: colors.foreground }}>user phone number</Text>
            <Input
              loading={loading}
              value={user}
              onChangeText={setUser}
              keyboardType="email-address"
              placeholder="email"
            />
          </View>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: colors.foreground }}>password</Text>
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
              backgroundColor: colors.primary,
              paddingVertical: 4,
              borderRadius: 10,
              opacity: submitDisabled ? 0.5 : 1,
              height: 30,
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
                Login
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
