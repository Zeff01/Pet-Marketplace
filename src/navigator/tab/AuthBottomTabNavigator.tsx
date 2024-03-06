import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthTabParamList } from './Tab.typeDefs';
import { View, Text } from 'react-native';

import Login from '@views/Login';
import Signup from '@views/Signup';
import { useGlobalTheme } from '@hooks/useGlobalTheme';

const Tab = createBottomTabNavigator<AuthTabParamList>();

export default function AuthBottomTabNavigator() {
  const { colors } = useGlobalTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: props => {
            return (
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: props.focused ? colors.primary : colors.card,
                }}>
                <Text style={{ color: colors.foreground }}>Login</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Signup"
        component={Signup}
        options={{
          tabBarLabel: props => {
            return (
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: props.focused ? colors.primary : colors.card,
                }}>
                <Text style={{ color: colors.foreground }}>SignUp</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
