import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import Drawer from './Drawer';
import {
  AddNewUser,
  BusinessDetail,
  EditProfile,
  ForgotPassword,
  Login,
  MineDetail,
  ProductDetail,
  ResetPassword,
  UserProfile,
  VerifyCode,
} from '../Screens';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Navigator screenOptions={NavConfigs.screenOptions}>
        <Screen name={NavRoutes.Login} component={Login} />
        <Screen name={NavRoutes.ForgotPassword} component={ForgotPassword} />
        <Screen name={NavRoutes.VerifyCode} component={VerifyCode} />
        <Screen name={NavRoutes.ResetPassword} component={ResetPassword} />

        <Screen name={NavRoutes.Drawer} component={Drawer} />
        <Screen name={NavRoutes.UserProfile} component={UserProfile} />
        <Screen name={NavRoutes.AddNewUser} component={AddNewUser} />
        <Screen name={NavRoutes.EditProfile} component={EditProfile} />
        <Screen name={NavRoutes.BusinessDetail} component={BusinessDetail} />
        <Screen name={NavRoutes.ProductDetail} component={ProductDetail} />
        <Screen name={NavRoutes.MineDetail} component={MineDetail} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
