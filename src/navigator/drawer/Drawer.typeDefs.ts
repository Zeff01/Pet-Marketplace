import { DrawerScreenProps } from '@react-navigation/drawer';

export type DrawerParamList = {
  MainDrawer: undefined;
  // add more drawer params...
  FrontPage: undefined; // temporary placement only!!!
  Auth: undefined;
};

export type DrawerProps = DrawerScreenProps<DrawerParamList, keyof DrawerParamList>;
