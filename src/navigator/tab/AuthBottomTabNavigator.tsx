import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthTabParamList } from './Tab.typeDefs';
import { View, Text } from 'react-native';

import Login from '@views/Login';
import Signup from '@views/Signup';
import { COLORS } from '@theme';

const Tab = createBottomTabNavigator<AuthTabParamList>();

export default function AuthBottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
                  backgroundColor: props.focused
                    ? COLORS['Dark Mode'].primary
                    : COLORS['Dark Mode'].card,
                }}>
                <Text style={{ color: COLORS['Dark Mode'].foreground }}>Login</Text>
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
                  backgroundColor: props.focused
                    ? COLORS['Dark Mode'].primary
                    : COLORS['Dark Mode'].card,
                }}>
                <Text style={{ color: COLORS['Dark Mode'].foreground }}>SignUp</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
