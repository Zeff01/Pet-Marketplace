import { FlatList } from 'react-native-gesture-handler';
import { useGlobalTheme } from '../../providers/ThemeProvider';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { faker } from '@faker-js/faker';

const fakeData = Array.from({ length: 10 }, () => ({
  id: faker.string.alphanumeric(5),
  date: faker.date.past(),
  vaccine: faker.lorem.words(5),
}));

export default function PetMedicalRecord() {
  const { colors } = useGlobalTheme();

  function Item({ item }: { item: { id: string; date: Date; vaccine: string } }) {
    return (
      <View
        style={{
          backgroundColor: colors.card,
          marginBottom: 10,
          marginHorizontal: 10,
          elevation: 1,
          paddingVertical: 10,
          paddingHorizontal: 30,
          borderRadius: 12,
        }}>
        <Text style={{ color: colors.foreground }}>Bakunation</Text>
        <Text style={{ color: colors.foreground }}>Vaccient: {item.vaccine}</Text>
        <Text style={{ color: colors.foreground }}>Date: {item.date.toLocaleDateString()}</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 10,
      }}>
      <View style={{ height: 300 }}>
        <FlatList data={fakeData} renderItem={Item} keyExtractor={item => item.id} />
      </View>
      <View style={{ paddingVertical: 20, alignItems: 'center' }}>
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
  );
}
