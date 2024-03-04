import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useGlobalTheme } from '../../providers/ThemeProvider';
import { faker } from '@faker-js/faker';

const fakeDescription = faker.lorem.sentences({ min: 2, max: 6 });

export default function PetAbout() {
  const { colors } = useGlobalTheme();
  return (
    <ScrollView style={{ padding: 10, backgroundColor: colors.background }}>
      {/* carousel image viewer placeholder */}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionicons name="chevron-back" size={32} color={colors.foreground} />
        </TouchableOpacity>
        <View style={{ backgroundColor: colors.secondary, width: 220, height: 220 }} />
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionicons name="chevron-forward" size={32} color={colors.foreground} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 10, paddingBottom: 40 }}>
        <Text style={{ color: colors.foreground, fontSize: 12 }}>{fakeDescription}</Text>
      </View>
      <View style={{ rowGap: 10, marginBottom: 50 }}>
        <Text style={{ fontWeight: '600', fontSize: 18, color: colors.foreground }}>Moments</Text>
        <ScrollView horizontal>
          <View style={{ flexDirection: 'row', columnGap: 10 }}>
            {/* placeholder for images */}
            <View
              style={{ width: 80, height: 80, backgroundColor: colors.secondary, borderRadius: 10 }}
            />
            <View
              style={{ width: 80, height: 80, backgroundColor: colors.secondary, borderRadius: 10 }}
            />
            <View
              style={{ width: 80, height: 80, backgroundColor: colors.secondary, borderRadius: 10 }}
            />
            <View
              style={{ width: 80, height: 80, backgroundColor: colors.secondary, borderRadius: 10 }}
            />
            <View
              style={{ width: 80, height: 80, backgroundColor: colors.secondary, borderRadius: 10 }}
            />
          </View>
        </ScrollView>
        <View style={{ paddingVertical: 50, alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              columnGap: 5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.secondary,
              width: 180,
              borderRadius: 10,
              padding: 7,
            }}>
            <Ionicons name="send-outline" size={32} color={colors.foreground} />
            <Text style={{ color: colors.foreground, fontSize: 18 }}>Contact Keeper</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
