// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Functions } from '../Utils';
// import { setUser } from '../Redux/Actions';

// const useLocalStorage = () => {
//   const [State, setState] = useState({ localdata: null });
//   const dispatch = useDispatch();

//   useEffect(() => {
//     getDataFromLocalStorage();
//   }, []);

//   const getDataFromLocalStorage = async () => {
//     try {
//       const appdata = await Functions.getAppData('appdata');
//       if (appdata !== null) {
//         setState(p => ({ ...p, localdata: appdata }));
//         dispatch(setUser(appdata?.User));
//       }
//     } catch (e) {
//       console.log('Error getDataFromLocalStorage -> ', e);
//     }
//   };

//   return State;
// };

// export default useLocalStorage;
