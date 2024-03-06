import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useGlobalTheme } from '@hooks/useGlobalTheme';
import { Text } from 'react-native';

import UserProfilePets from '@views/UserProfilePets';
import UserProfileItems from '@views/UserProfileItems';

export type UserProfileTopTabParamList = {
  UserPets: undefined;
  UserItems: undefined;
};

const TopTab = createMaterialTopTabNavigator<UserProfileTopTabParamList>();

export default function UserProfileNavigator() {
  const { colors } = useGlobalTheme();

  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colors['card-inner'] },
        tabBarIndicatorStyle: {
          width: '50%',
          backgroundColor: colors.primary,
          height: 30,
          borderRadius: 10,
        },
        tabBarItemStyle: {
          height: 30,
        },
      }}>
      <TopTab.Screen
        name="UserPets"
        component={UserProfilePets}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: colors.foreground, bottom: 9, fontWeight: '500' }}>Pets</Text>
          ),
        }}
      />
      <TopTab.Screen
        name="UserItems"
        component={UserProfileItems}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: colors.foreground, bottom: 9, fontWeight: '500' }}>Items</Text>
          ),
        }}
      />
    </TopTab.Navigator>
  );
}
