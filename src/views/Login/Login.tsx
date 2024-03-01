import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { COLORS } from '@theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';

// TODO: use form  library?
export default function Login() {
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <MaterialCommunityIcons name="dog" size={200} color={COLORS['Dark Mode'].foreground} />
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: COLORS['Dark Mode'].foreground }}>
            Sell - Le - Pet
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', rowGap: 15 }}>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>
              user phone number
            </Text>
            <TextInput
              editable={!loading}
              value={user}
              onChangeText={setUser}
              keyboardType="phone-pad"
              placeholder="phone number"
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
          </View>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>password</Text>
            {/* TODO: reused into  custom  component */}
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
