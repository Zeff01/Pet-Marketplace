import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { COLORS } from '@theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
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
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>user</Text>
            <TextInput
              placeholder="username"
              placeholderTextColor={COLORS['Dark Mode']['muted-foreground']}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderWidth: 2,
                borderColor: COLORS['Dark Mode'].accent,
                width: 250,
                borderRadius: 8,
                color: COLORS['Dark Mode'].foreground,
              }}
            />
          </View>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>password</Text>
            <TextInput
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
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              width: 250,
              backgroundColor: COLORS['Dark Mode'].primary,
              paddingVertical: 4,
              borderRadius: 10,
            }}>
            <Text
              style={{ color: COLORS['Dark Mode'].foreground, fontSize: 16, textAlign: 'center' }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
