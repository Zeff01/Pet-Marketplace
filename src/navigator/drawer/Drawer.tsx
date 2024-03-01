import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from './Drawer.typeDefs';
import RootStackNavigator from '@navigator/stack/RootStack';

const Drawer = createDrawerNavigator<DrawerParamList>();
import AuthBottomTabNavigator from '@navigator/tab/AuthBottomTabNavigator';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const drawerContents = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <TouchableOpacity
        style={{ padding: 10, borderWidth: 1, borderColor: 'black' }}
        onPress={() => {
          navigation.navigate('Auth');
        }}>
        <Text>auth</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 10, borderWidth: 1, borderColor: 'black' }}
        onPress={() => {
          navigation.navigate('FrontPage');
        }}>
        <Text>home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={drawerContents}>
      <Drawer.Screen name="FrontPage" component={RootStackNavigator} />
      <Drawer.Screen name="Auth" component={AuthBottomTabNavigator} />
      {/* temporary placement */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
