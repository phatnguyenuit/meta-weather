import {
  SliceReducersBase,
  SliceSettings,
  SliceObject,
  ReducerSettings,
  ReducerObject,
} from 'types/state';
import createSliceObject from './createSliceObject';
import createReducerObject from './createReducerObject';

const isSliceSettings = (
  settings: SliceSettings<any, any, any> | ReducerSettings<any, any>,
): settings is SliceSettings<any, any, any> =>
  !!settings && !!(settings as SliceSettings<any, any, any>).reducers;

function createSlice<
  TName extends string,
  TState,
  TSliceReducers extends SliceReducersBase<TState>
>(
  settings: SliceSettings<TName, TState, TSliceReducers>,
): SliceObject<TName, TState, TSliceReducers>;
function createSlice<TName extends string, TState>(
  settings: ReducerSettings<TName, TState>,
): ReducerObject<TName, TState>;
function createSlice(
  settings: SliceSettings<any, any, any> | ReducerSettings<any, any>,
) {
  return isSliceSettings(settings)
    ? createSliceObject(settings)
    : createReducerObject(settings);
}

export default createSlice;
