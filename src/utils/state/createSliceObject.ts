import { Reducer } from 'redux';
import { takeLatest, all, fork } from 'redux-saga/effects';
import {
  SliceReducersBase,
  SliceSettings,
  SliceObject,
  PayloadActionCreator,
  PayloadAction,
  Actions,
} from 'types/state';

const createActionType = (name: string, key: string) => `${name}/${key}`;

const createSliceObject = <
  TName extends string,
  TState,
  TSliceReducers extends SliceReducersBase<TState>
>({
  name,
  initialState,
  reducers,
  workers = {},
  extraReducer,
}: SliceSettings<TName, TState, TSliceReducers>): SliceObject<
  TName,
  TState,
  TSliceReducers
> => {
  const actions = (Object.fromEntries(
    Object.keys(reducers).map<[string, PayloadActionCreator<string, any>]>(
      (key) => {
        const type = createActionType(name, key);
        const action = Object.assign((payload: any) => ({ type, payload }), {
          type,
        });
        return [key, action];
      },
    ),
  ) as unknown) as Actions<TState, TSliceReducers>;

  const caseReducers = Object.fromEntries(
    Object.entries(reducers).map(([key, slicer]) => [
      createActionType(name, key),
      slicer,
    ]),
  );

  const reducer: Reducer<TState, PayloadAction<string, any>> = (
    state = initialState,
    action,
  ) => {
    const { type, payload } = action;
    const reduce = caseReducers[type];
    const intermediateState = reduce ? reduce(state, payload) : state;
    return extraReducer?.(intermediateState, action) ?? intermediateState;
  };

  const saga = function* saga() {
    yield all(
      Object.entries(workers)
        .filter(([, worker]) => Boolean(worker))
        .map(([key, worker]) => {
          const type = createActionType(name, key);
          const watchWorker = function* watch() {
            yield takeLatest(type, worker!(actions));
          };
          return fork(watchWorker);
        }),
    );
  };

  return { name, initialState, actions, reducer, saga };
};

export default createSliceObject;
