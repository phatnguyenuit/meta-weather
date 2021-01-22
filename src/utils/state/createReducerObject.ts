import { ReducerSettings, ReducerObject } from 'types/state';

const createReducerObject = <TName extends string, TState>({
  name,
  initialState,
  reducer,
}: ReducerSettings<TName, TState>): ReducerObject<TName, TState> => ({
  name,
  initialState,
  reducer,
});

export default createReducerObject;
