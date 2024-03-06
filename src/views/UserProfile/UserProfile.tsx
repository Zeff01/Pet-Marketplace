import { View, Text } from 'react-native';
import { useGlobalTheme } from '@hooks/useGlobalTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';

import UserProfileNavigator from '@navigator/top_tabs/UserProfileNavigator';

export default function UserProfile() {
  const { colors } = useGlobalTheme();
  return (
    <>
      <View style={{ backgroundColor: colors.background, padding: 10, paddingTop: 20 }}>
        <View style={{ flexDirection: 'row', columnGap: 10 }}>
          <View
            style={{
              width: 100,
              aspectRatio: 1,
              backgroundColor: colors.muted,
              borderRadius: 999,
            }}></View>
          <View style={{ flexGrow: 1, justifyContent: 'center', rowGap: 15 }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{ color: colors.foreground, fontSize: 20, fontWeight: '600' }}>
                  Nickname
                </Text>
                <TouchableOpacity>
                  <Entypo name="dots-three-vertical" size={24} color={colors.foreground} />
                </TouchableOpacity>
              </View>
              <Text style={{ color: colors.foreground }}>@username</Text>
            </View>
            <View style={{ flexDirection: 'row', columnGap: 15 }}>
              <View style={{ flexDirection: 'row', columnGap: 5, alignItems: 'center' }}>
                <Ionicons name="people-sharp" size={28} color={colors.foreground} />
                <Text style={{ color: colors.foreground }}>100</Text>
              </View>
              <View style={{ flexDirection: 'row', columnGap: 5, alignItems: 'center' }}>
                <MaterialIcons name="pets" size={28} color={colors.foreground} />
                <Text style={{ color: colors.foreground }}>10</Text>
              </View>
              <View style={{ flexDirection: 'row', columnGap: 5, alignItems: 'center' }}>
                <Entypo name="star" size={28} color={colors.foreground} />
                <Text style={{ color: colors.foreground }}>10</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <UserProfileNavigator />
    </>
  );
}
