import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from './Drawer.typeDefs';

const Drawer = createDrawerNavigator<DrawerParamList>();
import RootStackNavigator from '@navigator/stack/RootStack';
import AuthBottomTabNavigator from '@navigator/tab/AuthBottomTabNavigator';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

const drawerContents = () => (
  <SafeAreaView>
    <View style={styles.root}>
      <Text>Side Menu Contents</Text>
    </View>
  </SafeAreaView>
);

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={drawerContents}>
      <Drawer.Screen name="Auth" component={AuthBottomTabNavigator} />
      <Drawer.Screen name="FrontPage" component={RootStackNavigator} />
      {/* temporary placement */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
