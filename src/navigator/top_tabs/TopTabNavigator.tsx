import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo, Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

import Main from '@views/Main';
import { COLORS } from '@theme';
const TopTab = createMaterialTopTabNavigator();

/**
 *
 * @usage use this while components are under constructions
 */
function TemperoryComponent() {
  return <></>;
}

export default function TopTabNavigator() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarContentContainerStyle: {
          backgroundColor: COLORS['Dark Mode'].background,
          //TODO: figure out how to add border here
        },
      }}>
      <TopTab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: props => {
            const iconColor = props.focused
              ? COLORS['Dark Mode'].primary
              : COLORS['Dark Mode'].foreground;
            return <FontAwesome name="paw" size={24} color={iconColor} />;
          },
          tabBarShowLabel: false,
        }}
      />
      <TopTab.Screen
        name="Marketplace"
        component={TemperoryComponent}
        options={{
          tabBarIcon: props => {
            const iconColor = props.focused
              ? COLORS['Dark Mode'].primary
              : COLORS['Dark Mode'].foreground;
            return <Entypo name="shop" size={24} color={iconColor} />;
          },
          tabBarShowLabel: false,
        }}
      />
      <TopTab.Screen
        name="NewPet"
        component={TemperoryComponent}
        options={{
          tabBarIcon: props => {
            const iconColor = props.focused
              ? COLORS['Dark Mode'].primary
              : COLORS['Dark Mode'].foreground;
            return <FontAwesome name="paw" size={24} color={iconColor} />;
          }, // TODO: add the plus symbol
          tabBarShowLabel: false,
        }}
      />
      <TopTab.Screen
        name="Notifications"
        component={TemperoryComponent}
        options={{
          tabBarIcon: props => {
            const iconColor = props.focused
              ? COLORS['Dark Mode'].primary
              : COLORS['Dark Mode'].foreground;
            return <Ionicons name="notifications-outline" size={24} color={iconColor} />;
          },
          tabBarShowLabel: false,
        }}
      />
      <TopTab.Screen
        name="Profile"
        component={TemperoryComponent}
        options={{
          tabBarIcon: props => {
            const iconColor = props.focused
              ? COLORS['Dark Mode'].primary
              : COLORS['Dark Mode'].foreground;
            return <FontAwesome5 name="user-alt" size={24} color={iconColor} />;
          },
          tabBarShowLabel: false,
        }}
      />
    </TopTab.Navigator>
  );
}
