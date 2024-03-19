import React, { forwardRef, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { wp } from '../Theme';
import RNStyles from './RNStyles';

const RNBottomSheet = forwardRef(({ children, snapPoints }, ref) => {
  const points = useMemo(() => ['70%', '80%'], []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={ref}
        backdropComponent={p => (
          <BottomSheetBackdrop
            {...p}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
        index={0}
        containerStyle={{ backgroundColor: '#00000050' }}
        style={styles.radius}
        handleComponent={null}
        snapPoints={snapPoints ?? points}>
        <BottomSheetView style={styles.radius}>{children}</BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

const radius = wp(8);
const styles = StyleSheet.create({
  radius: {
    ...RNStyles.container,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    overflow: 'hidden',
  },
});

export default RNBottomSheet;
