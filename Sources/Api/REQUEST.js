// import Axios from 'axios';
import { Functions } from '../Utils';
import URL from './URL';

const REQUEST = async ({
  Method,
  EndPoint,
  Params,
  IsformData = false,
  NeedToken = true,
}) => {
  const appData = await Functions.getAppData();
  const Headers = Header(NeedToken, appData?.User?.token, IsformData);
  const options = {
    method: Method,
    headers: Headers,
    data: Params,
    url: URL.AppUrl + EndPoint,
  };
  // console.log('options -> ', JSON.stringify(options, null, 2));
  // const response = await Axios(options);
  // return response.data;

  // fetch method......
  const responseJson = await fetch(options.url, {
    method: Method,
    body: JSON.stringify(Params),
    headers: Headers,
  });
  const response = await responseJson?.json();
  // console.log('response -> ', JSON.stringify(response, null, 2));
  return response;
};
const Header = (NeedToken, Token, IsformData) => {
  let apiHeaders = {
    Accept: '*/*',
    'Content-Type': IsformData ? 'multipart/form-data' : 'application/json',
  };
  if (NeedToken) {
    apiHeaders = { ...apiHeaders, Authorization: `Bearer ${Token}` };
  }
  return apiHeaders;
};
export default REQUEST;
