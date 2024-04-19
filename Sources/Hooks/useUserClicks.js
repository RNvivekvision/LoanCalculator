import { useDispatch } from 'react-redux';
import {
  decreaseUserClicks,
  increaseUserClicks,
  updateUserClicks,
} from '../Redux/Actions';

const useUserClicks = () => {
  const dispatch = useDispatch();

  const increaseCount = (count = 1) => {
    dispatch(increaseUserClicks(count));
  };

  const decreaseCount = (count = 1) => {
    dispatch(decreaseUserClicks(count));
  };

  const updateCount = count => {
    dispatch(updateUserClicks(count));
  };

  return {
    increaseCount,
    decreaseCount,
    updateCount,
  };
};

export default useUserClicks;
