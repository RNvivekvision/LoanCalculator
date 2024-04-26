import { Routes } from './Navigation';
import { Provider } from 'react-redux';
import Store from './Redux';

const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

export default App;
