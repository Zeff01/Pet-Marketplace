import { View, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@navigator';
import { useGlobalTheme } from '../../providers/ThemeProvider';
import PetProfileNavigator from '@navigator/top_tabs/PetProfileNavigator';

export default function PetProfile() {
  const route = useRoute<RouteProp<RootStackParamList>>();
  const { colors } = useGlobalTheme();

  const id = route.params?.id;
  if (id === undefined) {
    throw new Error('pet id is not defined');
  }

  return (
    <>
      <View style={{ padding: 10, backgroundColor: colors.background }}>
        <View style={{ columnGap: 10, flexDirection: 'row' }}>
          {/* pet image placholder */}
          <View
            style={{ width: 100, height: 100, borderRadius: 10, backgroundColor: colors.secondary }}
          />
          <View style={{ width: 200 }}>
            <Text style={{ fontSize: 12, color: colors.foreground }}>Name: Dogerland</Text>
            <Text style={{ fontSize: 12, color: colors.foreground }}>
              Age: 5 years, 2 months old
            </Text>
            <Text style={{ fontSize: 12, color: colors.foreground }}>Breed: Asong Kalye</Text>
            <Text style={{ fontSize: 12, color: colors.foreground }}>
              Hobbies: Biting Toys, Scratching Sofa, Eating Insects
            </Text>
            <Text style={{ fontSize: 12, color: colors.foreground }}>Favorite Food: Cat Food</Text>
          </View>
        </View>
      </View>
      <PetProfileNavigator />
    </>
  );
}
