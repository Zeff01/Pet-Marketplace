import { useGlobalTheme } from '@hooks/useGlobalTheme';
import { Text, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function UserProfilePets() {
  const { colors } = useGlobalTheme();
  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <ScrollView>
        <View
          style={{
            gap: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 150,
              aspectRatio: 0.8,
              backgroundColor: colors.card,
              borderRadius: 15,
              borderStyle: 'dashed',
              borderColor: colors.border,
              borderWidth: 3,
              elevation: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Entypo name="plus" size={64} color="white" />
          </TouchableOpacity>
          {/* TODO Make this a FlatList */}
          <View
            style={{
              width: 150,
              aspectRatio: 0.8,
              backgroundColor: colors.card,
              borderRadius: 15,
              borderStyle: 'dashed',
              borderColor: colors.border,
              borderWidth: 3,
              elevation: 2,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
            <View style={{ flexGrow: 1, width: '100%', backgroundColor: 'white' }}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                paddingVertical: 12,
                width: '100%',
              }}>
              <Text style={{ fontSize: 12, color: colors.foreground }}>pet name</Text>
              <Entypo name="dots-three-vertical" size={18} color={colors.foreground} />
            </View>
          </View>
          <View
            style={{
              width: 150,
              aspectRatio: 0.8,
              backgroundColor: colors.card,
              borderRadius: 15,
              borderStyle: 'dashed',
              borderColor: colors.border,
              borderWidth: 3,
              elevation: 2,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
            <View style={{ flexGrow: 1, width: '100%', backgroundColor: 'white' }}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                paddingVertical: 12,
                width: '100%',
              }}>
              <Text style={{ fontSize: 12, color: colors.foreground }}>pet name</Text>
              <Entypo name="dots-three-vertical" size={18} color={colors.foreground} />
            </View>
          </View>
          <View
            style={{
              width: 150,
              aspectRatio: 0.8,
              backgroundColor: colors.card,
              borderRadius: 15,
              borderStyle: 'dashed',
              borderColor: colors.border,
              borderWidth: 3,
              elevation: 2,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
            <View style={{ flexGrow: 1, width: '100%', backgroundColor: 'white' }}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                paddingVertical: 12,
                width: '100%',
              }}>
              <Text style={{ fontSize: 12, color: colors.foreground }}>pet name</Text>
              <Entypo name="dots-three-vertical" size={18} color={colors.foreground} />
            </View>
          </View>
          <View
            style={{
              width: 150,
              aspectRatio: 0.8,
              backgroundColor: colors.card,
              borderRadius: 15,
              borderStyle: 'dashed',
              borderColor: colors.border,
              borderWidth: 3,
              elevation: 2,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
            <View style={{ flexGrow: 1, width: '100%', backgroundColor: 'white' }}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                paddingVertical: 12,
                width: '100%',
              }}>
              <Text style={{ fontSize: 12, color: colors.foreground }}>pet name</Text>
              <Entypo name="dots-three-vertical" size={18} color={colors.foreground} />
            </View>
          </View>
          <View
            style={{
              width: 150,
              aspectRatio: 0.8,
              backgroundColor: colors.card,
              borderRadius: 15,
              borderStyle: 'dashed',
              borderColor: colors.border,
              borderWidth: 3,
              elevation: 2,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
            <View style={{ flexGrow: 1, width: '100%', backgroundColor: 'white' }}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                paddingVertical: 12,
                width: '100%',
              }}>
              <Text style={{ fontSize: 12, color: colors.foreground }}>pet name</Text>
              <Entypo name="dots-three-vertical" size={18} color={colors.foreground} />
            </View>
          </View>
          <View
            style={{
              width: 150,
              aspectRatio: 0.8,
              backgroundColor: colors.card,
              borderRadius: 15,
              borderStyle: 'dashed',
              borderColor: colors.border,
              borderWidth: 3,
              elevation: 2,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
            <View style={{ flexGrow: 1, width: '100%', backgroundColor: 'white' }}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                paddingVertical: 12,
                width: '100%',
              }}>
              <Text style={{ fontSize: 12, color: colors.foreground }}>pet name</Text>
              <Entypo name="dots-three-vertical" size={18} color={colors.foreground} />
            </View>
          </View>
          <View
            style={{
              width: 150,
              aspectRatio: 0.8,
              backgroundColor: colors.card,
              borderRadius: 15,
              borderStyle: 'dashed',
              borderColor: colors.border,
              borderWidth: 3,
              elevation: 2,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
            <View style={{ flexGrow: 1, width: '100%', backgroundColor: 'white' }}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                paddingVertical: 12,
                width: '100%',
              }}>
              <Text style={{ fontSize: 12, color: colors.foreground }}>pet name</Text>
              <Entypo name="dots-three-vertical" size={18} color={colors.foreground} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
