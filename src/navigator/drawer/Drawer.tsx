import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from './Drawer.typeDefs';

const Drawer = createDrawerNavigator<DrawerParamList>();
import RootStackNavigator from '@navigator/stack/RootStack';

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
    <Drawer.Navigator
      initialRouteName="MainDrawer"
      screenOptions={{ headerShown: false }}
      drawerContent={drawerContents}>
      <Drawer.Screen name="FrontPage" component={RootStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
