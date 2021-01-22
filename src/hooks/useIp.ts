import { ipActions } from 'states/ip';
import { RootState } from 'states/store';
import useActions from './useActions';
import useShallowEqualSelector from './useShallowEqualSelector';

const selector = ({ ip: { loading, data, message } }: RootState) => {
  return {
    loading,
    ip: data?.ip,
    message,
  };
};

const useIp = () => {
  const [detectIp] = useActions(ipActions.detectIp);
  const state = useShallowEqualSelector(selector);

  return {
    ...state,
    detectIp,
  };
};

export default useIp;
