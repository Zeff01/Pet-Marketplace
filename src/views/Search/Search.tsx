import { View, Text } from 'react-native';
import { useGlobalTheme } from '../../providers/ThemeProvider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Animated, { SlideInRight, SlideOutRight } from 'react-native-reanimated';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Input from '@components/Input';

export type FilterTypes = 'people' | 'pets' | 'items';

export default function Search() {
  const { colors } = useGlobalTheme();
  const navigation = useNavigation();

  const [showFilters, setShowFilters] = useState(false);
  const [filterType, setFilterType] = useState<FilterTypes>('people');

  function toggleShowFilter() {
    setShowFilters(f => !f);
  }

  function changeFilterType(type: FilterTypes) {
    setFilterType(type);
  }

  useFocusEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={{ position: 'relative' }}>
            <TouchableOpacity onPress={toggleShowFilter}>
              <Ionicons name="filter" size={28} color={colors.foreground} />
            </TouchableOpacity>
          </View>
        );
      },
      headerTitle: () => {
        return (
          <Input
            style={{ paddingVertical: 5, borderColor: colors.muted }}
            placeholder={`searching ${filterType}`}
            autoFocus={true}
          />
        );
      },
    });
  });

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {showFilters && (
        <Animated.View
          style={{
            position: 'absolute',
            right: 10,
            top: 10,
            backgroundColor: colors.popover,
            borderRadius: 10,
          }}
          entering={SlideInRight}
          exiting={SlideOutRight}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              columnGap: 5,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: colors.border,
              paddingVertical: 12,
              paddingHorizontal: 16,
              width: 140,
            }}
            onPress={() => {
              toggleShowFilter();
              changeFilterType('people');
            }}>
            <Ionicons name="people" size={24} color={colors.foreground} />
            <Text style={{ color: colors.foreground }}>People</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              columnGap: 5,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: colors.border,
              paddingVertical: 12,
              paddingHorizontal: 16,
              width: 140,
            }}
            onPress={() => {
              toggleShowFilter();
              changeFilterType('pets');
            }}>
            <MaterialIcons name="pets" size={24} color={colors.foreground} />
            <Text style={{ color: colors.foreground }}>Pets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              columnGap: 5,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: colors.border,
              paddingVertical: 12,
              paddingHorizontal: 16,
              width: 140,
            }}
            onPress={() => {
              toggleShowFilter();
              changeFilterType('items');
            }}>
            <FontAwesome name="shopping-basket" size={24} color={colors.foreground} />
            <Text style={{ color: colors.foreground }}>Items</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
}
