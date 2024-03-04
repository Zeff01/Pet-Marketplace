import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';

import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import { RootStackParamList } from './Stack.typeDefs';

import TopTabNavigator from '@navigator/top_tabs/TopTabNavigator';
import PetProfile from '@views/PetProfile';
import { useGlobalTheme } from '../../providers/ThemeProvider';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const { colors } = useGlobalTheme();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors['card-inner'],
        },
      }}>
      <Stack.Screen
        name="Default"
        component={TopTabNavigator}
        options={{
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
        }}
      />

      {/* TODO: replace this with real screens */}
      <Stack.Screen name="Search" component={TempPage} />
      <Stack.Screen name="Messages" component={TempPage} />
      <Stack.Screen
        name="PetProfile"
        options={{
          headerLeft: props => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (props.canGoBack) {
                    navigation.goBack();
                  }
                }}
                style={{ paddingRight: 10 }}>
                <AntDesign name="back" size={28} color={colors.foreground} />
              </TouchableOpacity>
            );
          },
          headerTitle: 'Pet Profile',
          headerTintColor: colors.foreground,
          headerRight: () => (
            <TouchableOpacity style={{ position: 'relative' }}>
              {/* notification badge placeholder */}
              <View
                style={{
                  position: 'absolute',
                  top: -3,
                  right: -3,
                  zIndex: 2,
                  backgroundColor: colors.destructive,
                  borderRadius: 100,
                  paddingHorizontal: 4,
                }}>
                <Text style={{ fontSize: 10, color: colors.foreground }}>9</Text>
              </View>
              <Ionicons name="chatbubble-ellipses" size={28} color={colors.foreground} />
            </TouchableOpacity>
          ),
        }}
        component={PetProfile}
      />
    </Stack.Navigator>
  );
}

function TempPage() {
  return <></>;
}
