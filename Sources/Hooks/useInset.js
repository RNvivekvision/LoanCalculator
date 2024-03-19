import { useSafeAreaInsets } from 'react-native-safe-area-context';
const useInset = () => {
  const inset = useSafeAreaInsets();
  return {
    top: inset.top,
    bottom: inset.bottom,
    left: inset.left,
    right: inset.right,
  };
};
export default useInset;
