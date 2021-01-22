import { PayloadAction } from 'types/state';
import createSliceObject from '../createSliceObject';

type State = {
  loading?: string;
  message?: string;
  data?: string;
};

const initialState: State = {};
describe('createSliceObject', () => {
  const setupTest = () => {
    const sliceObject = createSliceObject({
      name: 'test',
      initialState,
      reducers: {
        testAction: (state: State, payload: string) => ({
          ...state,
          data: payload,
        }),
      },
    });

    return sliceObject;
  };

  test('should work with action', () => {
    const sliceObject = setupTest();

    // Check action
    const expectedAction: PayloadAction<string> = {
      type: 'test/testAction',
      payload: 'test',
    };
    const actualAction = sliceObject.actions.testAction('test');
    expect(expectedAction.type).toBe(actualAction.type);
    expect(expectedAction.payload).toBe(actualAction.payload);
  });

  test('should work with reducer', () => {
    const sliceObject = setupTest();

    const action = sliceObject.actions.testAction('payload');
    const nextState = sliceObject.reducer(initialState, action);
    expect(nextState.data).toBe('payload');
  });
});
