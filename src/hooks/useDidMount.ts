/**
 * References:
 * https://github.com/streamich/react-use/blob/master/src/useMount.ts
 * https://github.com/beizhedenglong/react-hooks-lib/blob/master/src/hooks/useDidMount.js
 * https://github.com/imbhargav5/rooks/blob/dev/packages/shared/useDidMount.ts
 */

import useEffectOnce from './useEffectOnce';

const useDidMount = (callback: VoidFunction) => useEffectOnce(callback);

export default useDidMount;
