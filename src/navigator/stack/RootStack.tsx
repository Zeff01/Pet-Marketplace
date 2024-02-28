import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabNavigator from '@navigator/top_tabs/TopTabNavigator';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';

import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';

import { COLORS } from '@theme';

const Stack = createNativeStackNavigator();
export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <SafeAreaView
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: COLORS['Dark Mode'].background,
              alignItems: 'center',
            }}>
            <View
              style={{
                position: 'relative',
                width: '70%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TextInput
                placeholder="search"
                placeholderTextColor={COLORS['Dark Mode'].foreground}
                style={{
                  width: '100%',
                  padding: 5,
                  paddingStart: 30,
                  fontSize: 16,
                  borderWidth: 2,
                  borderRadius: 12,
                  borderColor: COLORS['Dark Mode'].muted,
                  color: COLORS['Dark Mode'].foreground,
                  fontWeight: '600',
                }}
              />
              <Feather
                name="search"
                size={22}
                color={COLORS['Dark Mode'].foreground}
                style={{ position: 'absolute', left: 5, pointerEvents: 'none' }}
              />
            </View>
            <AntDesign name="pluscircle" size={28} color={COLORS['Dark Mode'].foreground} />
            <Ionicons
              name="chatbubble-ellipses-sharp"
              size={28}
              color={COLORS['Dark Mode'].foreground}
            />
          </SafeAreaView>
        ),
      }}>
      <Stack.Screen name="Default" component={TopTabNavigator} />
    </Stack.Navigator>
  );
}
