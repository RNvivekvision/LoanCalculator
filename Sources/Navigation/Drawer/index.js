import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavRoutes from '../NavRoutes';
import NavConfigs from '../NavConfigs';
import DrawerContent from './DrawerContent';
import { Users, Products, Business, Mine } from '../../Screens';

const { Navigator, Screen } = createDrawerNavigator();

const Drawer = () => {
  return (
    <Navigator
      screenOptions={NavConfigs.drawerOptions}
      drawerContent={p => <DrawerContent {...p} />}>
      <Screen name={NavRoutes.Users} component={Users} />
      <Screen name={NavRoutes.Products} component={Products} />
      <Screen name={NavRoutes.Business} component={Business} />
      <Screen name={NavRoutes.Mine} component={Mine} />
    </Navigator>
  );
};

export default Drawer;
