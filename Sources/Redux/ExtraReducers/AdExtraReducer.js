import DeviceInfo from 'react-native-device-info';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchMethod, URL } from '../../Api';
import { DummyData } from '../../Utils';
import { getIp } from '@mobeuv/react-native-check-ip';

const getAdData = createAsyncThunk('getAdData', async () => {
  try {
    const result = await getIp();
    const device = await DeviceInfo.getAndroidId();
    const version = await DeviceInfo.getVersion();

    const Params = {
      logo: DummyData.appInfo.appIconBase64,
      appName: DummyData.appInfo.appName,
      packageName: DummyData.appInfo.packageName,
      apiKeyText: DummyData.appInfo.appName,
      device: device === 'unknown' ? '84361f1427227255' : device,
      keyForm: __DEV__ ? 'Debug' : 'Release',
      ipaddress: result.ipv4,
      version: version,
    };
    // console.log('Params -> ', JSON.stringify(Params, null, 2));

    const response = await FetchMethod.POST({
      EndPoint: URL.createAppRequest,
      NeedToken: false,
      Params: Params,
    });
    // console.log('getAdData -> ', JSON.stringify(response, null, 2));
    if (response?.isSuccess) {
      return response?.data;
    }
  } catch (e) {
    console.log('Error getAdData -> ', e);
    return { error: 'Something went wrong' };
  }
});

export { getAdData };
