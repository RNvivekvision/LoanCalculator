import REQUEST from './REQUEST';
const GET = async ({ EndPoint, NeedToken }) => {
  return await REQUEST({
    Method: 'GET',
    EndPoint,
    NeedToken,
  });
};
const POST = async ({ EndPoint, Params, NeedToken }) => {
  return await REQUEST({
    Method: 'POST',
    Params,
    EndPoint,
    NeedToken,
  });
};
const PUT = async ({ EndPoint, Params, NeedToken }) => {
  return await REQUEST({
    Method: 'PUT',
    Params,
    EndPoint,
    NeedToken,
  });
};
const DELETE = async ({ EndPoint, Params, NeedToken }) => {
  return await REQUEST({
    Method: 'DELETE',
    Params,
    EndPoint,
    NeedToken,
  });
};
// For FORMDATA....
const POST_FORMDATA = async ({ EndPoint, Params, NeedToken }) => {
  return await REQUEST({
    Method: 'POST',
    IsformData: true,
    Params,
    EndPoint,
  });
};
const PUT_FORMDATA = async ({ EndPoint, Params, NeedToken }) => {
  return await REQUEST({
    Method: 'PUT',
    IsformData: true,
    Params,
    EndPoint,
    NeedToken,
  });
};
const FetchMethod = {
  GET,
  POST,
  POST_FORMDATA,
  PUT,
  PUT_FORMDATA,
  DELETE,
};
export default FetchMethod;
