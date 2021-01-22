import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore as reduxCreateStore,
  Reducer,
  AnyAction,
  PreloadedState,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import { SliceObject, ReducerObject } from 'types/state';

const isSliceObject = (
  o: SliceObject<string, any, any> | ReducerObject<string, any>,
): o is SliceObject<string, any, any> =>
  o && !!(o as SliceObject<string, any, any>).saga;

const createRootReducer = <TSlices extends SlicesBase>(slices: TSlices) =>
  (combineReducers(
    Object.fromEntries(
      Object.entries(slices).map(([key, { reducer }]) => [key, reducer]),
    ),
  ) as unknown) as Reducer<RootState<TSlices>, AnyAction>;

const createRootSaga = <TSlices extends SlicesBase>(slices: TSlices) =>
  function* rootSaga() {
    yield all(
      Object.values(slices)
        .filter(isSliceObject)
        .map(({ saga }) => fork(saga)),
    );
  };

const createRootState = <TSlices extends SlicesBase>(slices: TSlices) =>
  Object.fromEntries(
    Object.entries(slices).map(([key, { initialState }]) => [
      key,
      initialState,
    ]),
  ) as PreloadedState<RootState<TSlices>>;

const createStore = <TSlices extends SlicesBase>(slices: TSlices) => {
  const rootReducer = createRootReducer(slices);
  const rootState = createRootState(slices);
  const rootSaga = createRootSaga(slices);
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancer =
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools({ trace: true })
      : compose;

  const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware));
  const store = reduxCreateStore<RootState<TSlices>, AnyAction, {}, {}>(
    rootReducer,
    rootState,
    enhancer,
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default createStore;

type SlicesBase = Record<
  string,
  SliceObject<string, any, any> | ReducerObject<string, any>
>;

type RootState<TSlices extends SlicesBase> = {
  [k in keyof TSlices]: TSlices[k]['initialState'];
};
