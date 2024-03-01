import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { COLORS } from '@theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const dimension = Dimensions.get('screen');

export default function Signup() {
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
              }}
            />
          </View>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>Email</Text>
            <TextInput
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
              }}
            />
          </View>
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>User</Text>
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
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>Password</Text>
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
          <View style={{ rowGap: 5 }}>
            <Text style={{ fontSize: 16, color: COLORS['Dark Mode'].foreground }}>
              Confirm Password
            </Text>
            <TextInput
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
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              width: 250,
              backgroundColor: COLORS['Dark Mode'].primary,
              paddingVertical: 4,
              borderRadius: 8,
              marginBottom: 20,
            }}>
            <Text
              style={{ color: COLORS['Dark Mode'].foreground, fontSize: 16, textAlign: 'center' }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
