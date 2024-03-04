import { View, TouchableOpacity, Text } from 'react-native';
import { useGlobalTheme } from '../../providers/ThemeProvider';
import { Ionicons } from '@expo/vector-icons';
import { faker } from '@faker-js/faker';

const fakeData = faker.lorem.sentences({ min: 3, max: 9 });

export default function FamilyTree() {
  const { colors } = useGlobalTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <View>
        <Text style={{ color: colors.foreground, textAlign: 'justify', fontSize: 14 }}>
          {fakeData}
        </Text>
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
