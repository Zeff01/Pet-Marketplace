import { View, Text, TextInput, Image } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { COLORS } from '@theme';
import { PostFeeds } from '@utils/models/PostFeed';

type PostProps = {
  displayName: string;
  userName: string;
  postMessage: string;
  likes: number;
  shares: number;
};

export default function Post({
  caption,
  displayName,
  heart_count,
  main_photo,
  share_count,
  user_name,
}: PostFeeds) {
  return (
    <View style={{ backgroundColor: COLORS['Dark Mode'].background, marginBottom: 15 }}>
      <View>
        <View style={{ flexDirection: 'row', padding: 5, columnGap: 5, alignItems: 'center' }}>
          {/* temporary placeholder for profile pic */}
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 100,
              backgroundColor: COLORS['Dark Mode'].foreground,
            }}
          />
          <View>
            <Text style={{ color: COLORS['Dark Mode'].foreground, fontSize: 16 }}>
              {displayName}
            </Text>
            <Text style={{ color: COLORS['Dark Mode'].foreground, fontSize: 12 }}>
              @{user_name}
            </Text>
          </View>
          <View style={{ marginLeft: 'auto' }}>
            <Entypo name="dots-three-vertical" size={24} color={COLORS['Dark Mode'].foreground} />
          </View>
        </View>
      </View>

      {/* placeholder for post image */}
      <View
        style={{
          height: 200,
          width: '100%',
          alignItems: 'center',
          backgroundColor: COLORS['Dark Mode'].foreground,
        }}>
        <Image source={{ uri: main_photo }} style={{ width: 200, height: 200 }} />
      </View>

      <View>
        <View style={{ padding: 5, paddingBottom: 40 }}>
          <Text style={{ color: COLORS['Dark Mode'].foreground }}>{caption}</Text>
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
              borderColor: COLORS['Dark Mode'].border,
              borderRadius: 10,
              paddingStart: 10,
              paddingVertical: 3,
              fontSize: 16,
              backgroundColor: COLORS['Dark Mode'].input,
              color: COLORS['Dark Mode'].foreground,
            }}
            placeholderTextColor={COLORS['Dark Mode'].foreground}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 4 }}>
            <AntDesign name="heart" size={26} color={COLORS['Dark Mode'].foreground} />
            <Text style={{ color: COLORS['Dark Mode'].foreground }}>{heart_count}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 4 }}>
            <Entypo name="share" size={26} color={COLORS['Dark Mode'].foreground} />
            <Text style={{ color: COLORS['Dark Mode'].foreground }}>{share_count}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
