import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useGlobalTheme } from '@hooks/useGlobalTheme';
import { Text } from 'react-native';
import PetAbout from '@views/PetAbout';
import PetMedicalRecord from '@views/PetMedicalRecord';
import FamilyTree from '@views/FamilyTree';

type PetProfileViews = {
  About: undefined;
  MedicalRecord: undefined;
  FamilyTree: undefined;
};

const TopTab = createMaterialTopTabNavigator<PetProfileViews>();

export default function PetProfileNavigator() {
  const { colors } = useGlobalTheme();
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colors['card-inner'] },
        tabBarIndicatorStyle: {
          width: '33%',
          backgroundColor: colors.primary,
          height: '100%',
          borderRadius: 10,
        },
      }}>
      <TopTab.Screen
        name="About"
        component={PetAbout}
        options={{
          tabBarLabel: () => <Text style={{ color: colors.foreground }}>About</Text>,
        }}
      />
      <TopTab.Screen
        name="MedicalRecord"
        component={PetMedicalRecord}
        options={{
          tabBarLabel: () => <Text style={{ color: colors.foreground }}>Medical Record</Text>,
        }}
      />
      <TopTab.Screen
        name="FamilyTree"
        component={FamilyTree}
        options={{
          tabBarLabel: () => <Text style={{ color: colors.foreground }}>Family Tree</Text>,
        }}
      />
    </TopTab.Navigator>
  );
}
