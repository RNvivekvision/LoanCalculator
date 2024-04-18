import { createAsyncThunk } from '@reduxjs/toolkit';
import DeviceInfo from 'react-native-device-info';
import { FetchMethod, URL } from '../../Api';
import { DummyData } from '../../Utils';

const getAdData = createAsyncThunk('getAdData', async () => {
  try {
    const device = await DeviceInfo.getAndroidId();
    console.log({ device });
    const ipaddress = await DeviceInfo.getIpAddress();
    const version = await DeviceInfo.getVersion();

    const Params = {
      logo: DummyData.appInfo.appIconBase64,
      appName: DummyData.appInfo.appName,
      packageName: DummyData.appInfo.packageName,
      apiKeyText: 'none',
      device: device,
      keyForm: __DEV__ ? 'Debug' : 'Release',
      ipaddress: ipaddress,
      version: version,
    };

    const response = await FetchMethod.POST({
      EndPoint: URL.createAppRequest,
      NeedToken: false,
      Params: Params,
    });
    console.log('getAdData -> ', JSON.stringify(response, null, 2));
    if (response?.isSuccess) {
      return response?.data;
    }
  } catch (e) {
    console.log('Error getAdData -> ', e);
    return { error: 'Something went wrong' };
  }
});

export { getAdData };
