import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNBottomSheet, RNStyles, RNText } from '../../Common';
import {
  HMAlert,
  HMDelete,
  HMHeader,
  HMInput,
  HMList,
  HMSearchFilter,
  UserFilter,
} from '../../Components';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { DummyData, Functions } from '../../Utils';
import { NavRoutes } from '../../Navigation';
import { Strings } from '../../Constants';

const Users = ({ navigation }) => {
  const ref = useRef();
  const [State, setState] = useState({ showEdit: false, showDelete: false });

  return (
    <View style={RNStyles.container}>
      <HMDelete
        visible={State.showDelete}
        title={Strings.deleteTitle}
        text={Strings.deleteTitleDesc}
        onClose={() => setState(p => ({ ...p, showDelete: false }))}
        buttonProps={{
          onPress: () => setState(p => ({ ...p, showDelete: false })),
        }}
      />

      <HMAlert
        visible={State.showEdit}
        onClose={() => setState(p => ({ ...p, showEdit: false }))}
        title={Strings.AddNewUser}
        buttontext={Strings.Add}
        buttonProps={{
          onPress: () => setState(p => ({ ...p, showEdit: false })),
        }}>
        <HMInput
          title={Strings.EntitieName}
          placeholder={Strings.EntitieName}
          containerStyle={{ paddingTop: 0 }}
        />
      </HMAlert>

      <HMHeader
        onUserIconPress={() => navigation.navigate(NavRoutes.UserProfile)}>
        <RNText style={styles.title}>{Strings.Userlist}</RNText>

        <HMSearchFilter onFilterPress={() => ref.current?.present()} />

        <HMList
          data={DummyData.LatestNewUsers}
          title={Strings.LatestNewUser}
          titleChildrenText={'+' + Strings.AddNewUser}
          titleChildrenStyle={{ color: Colors.Button }}
          ontitleChildrenPress={() => navigation.navigate(NavRoutes.AddNewUser)}
          onEditPress={() => setState(p => ({ ...p, showEdit: true }))}
          onDeletePress={() => setState(p => ({ ...p, showDelete: true }))}
        />

        <HMList
          data={Functions.spliteArray(DummyData.LatestNewUsers)}
          vStack={true}
          title={Strings.AllUserList}
          titleChildrenText={Strings.Alluser}
          onEditPress={() => setState(p => ({ ...p, showEdit: true }))}
          onDeletePress={() => setState(p => ({ ...p, showDelete: true }))}
        />
      </HMHeader>

      <RNBottomSheet snapPoints={['75%', '80%']} ref={ref}>
        <UserFilter ref={ref} />
      </RNBottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.font20,
    fontFamily: FontFamily.SemiBold,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
});

export default Users;
