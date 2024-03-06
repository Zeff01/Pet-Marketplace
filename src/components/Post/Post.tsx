import { View, Text, TextInput, Image, Pressable } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { PostFeeds } from '@utils/models/PostFeed';
import { useGlobalTheme } from '@hooks/useGlobalTheme';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@navigator';

export default function Post({
  caption,
  displayName,
  heart_count,
  main_photo,
  share_count,
  user_name,
  id,
}: PostFeeds) {
  const { colors } = useGlobalTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{ backgroundColor: colors.background, marginBottom: 15 }}>
      <View>
        <View style={{ flexDirection: 'row', padding: 5, columnGap: 5, alignItems: 'center' }}>
          {/* temporary placeholder for profile pic */}
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 100,
              backgroundColor: colors.foreground,
            }}
          />
          <View>
            <Text style={{ color: colors.foreground, fontSize: 16 }}>{displayName}</Text>
            <Text style={{ color: colors.foreground, fontSize: 12 }}>@{user_name}</Text>
          </View>
          <View style={{ marginLeft: 'auto' }}>
            <Entypo name="dots-three-vertical" size={24} color={colors.foreground} />
          </View>
        </View>
      </View>

      {/* placeholder for post image */}
      <Pressable
        style={{
          height: 200,
          width: '100%',
          alignItems: 'center',
          backgroundColor: colors.foreground,
        }}
        onPress={() => navigation.navigate('PetProfile', { id })}>
        <Image source={{ uri: main_photo }} style={{ width: 200, height: 200 }} />
      </Pressable>

      <View>
        <View style={{ padding: 5, paddingBottom: 40 }}>
          <Text style={{ color: colors.foreground }}>{caption}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: 5,
            columnGap: 5,
          }}>
          <TextInput
            placeholder="comment"
            style={{
              width: '70%',
              borderWidth: 2,
              borderColor: colors.border,
              borderRadius: 10,
              paddingStart: 10,
              paddingVertical: 3,
              fontSize: 16,
              backgroundColor: colors.input,
              color: colors.foreground,
            }}
            placeholderTextColor={colors.foreground}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 4 }}>
            <AntDesign name="heart" size={26} color={colors.foreground} />
            <Text style={{ color: colors.foreground }}>{heart_count}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 4 }}>
            <Entypo name="share" size={26} color={colors.foreground} />
            <Text style={{ color: colors.foreground }}>{share_count}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
