import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';

import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import { RootStackParamList } from './Stack.typeDefs';

import TopTabNavigator from '@navigator/top_tabs/TopTabNavigator';
import { useGlobalTheme } from 'src/providers/ThemeProvider';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const { colors } = useGlobalTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        header: props => (
          <SafeAreaView
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: colors.background,
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
                onFocus={() => props.navigation.navigate('Search')}
                placeholder="search"
                placeholderTextColor={colors.foreground}
                style={{
                  width: '100%',
                  padding: 5,
                  paddingStart: 30,
                  fontSize: 16,
                  borderWidth: 2,
                  borderRadius: 12,
                  borderColor: colors.muted,
                  color: colors.foreground,
                  fontWeight: '600',
                }}
              />
              <Feather
                name="search"
                size={22}
                color={colors.foreground}
                style={{ position: 'absolute', left: 5, pointerEvents: 'none' }}
              />
            </View>
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={28} color={colors.foreground} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Messages')}>
              <Ionicons name="chatbubble-ellipses-sharp" size={28} color={colors.foreground} />
            </TouchableOpacity>
          </SafeAreaView>
        ),
      }}>
      <Stack.Screen name="Default" component={TopTabNavigator} />

      {/* TODO: replace this with real screens */}
      <Stack.Screen name="Search" component={TempPage} />
      <Stack.Screen name="Messages" component={TempPage} />
    </Stack.Navigator>
  );
}

function TempPage() {
  return <></>;
}
