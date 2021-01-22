import createReducerObject from '../createReducerObject';

describe('createReducerObject', () => {
  test('should work', () => {
    const reducerObject = createReducerObject({
      name: 'test',
      initialState: {},
      reducer: (state) => ({ ...state }),
    });

    expect(reducerObject.name).toBe('test');
    expect(
      reducerObject.reducer(
        { a: 1 },
        { type: 'action type', payload: 'payload' },
      ),
    ).toEqual({
      a: 1,
    });
  });
});
