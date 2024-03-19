import { TransitionPresets } from '@react-navigation/stack';
const screenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};
const NavConfigs = {
  screenOptions,
};
export default NavConfigs;
