import { Reducer, Action } from 'redux';
import { StoreServiceState } from 'types/common';

export interface ReducerSettings<TName extends string, TState> {
  initialState: TState;
  name: TName;
  reducer: Reducer<TState, PayloadAction>;
}

export interface ReducerObject<TName extends string, TState> {
  initialState: TState;
  name: TName;
  reducer: Reducer<TState, PayloadAction>;
}

export interface SliceSettings<
  TName extends string,
  TState,
  TSliceReducers extends SliceReducersBase<TState>
> {
  initialState: TState;
  name: TName;
  reducers: TSliceReducers;
  workers?: Workers<TState, TSliceReducers>;
  extraReducer?: Reducer<TState, PayloadAction>;
}

export interface SliceObject<
  TName extends string,
  TState,
  TSliceReducers extends SliceReducersBase<TState>
> extends ReducerObject<TName, TState> {
  actions: Actions<TState, TSliceReducers>;
  saga: () => Generator;
}

export interface ServiceSliceSettings<
  TName extends string,
  TState extends StoreServiceState,
  TSliceReducers extends SliceReducersBase<TState>
> extends SliceSettings<TName, TState, TSliceReducers> {
  workers?: Workers<TState, TSliceReducers & ServiceSlicers<TState>>;
}

export interface ServiceSlicers<TState extends StoreServiceState> {
  requestFailed: PayloadActionReducer<TState, string>;
  requestSuccess: PayloadActionReducer<TState, string>;
}

export interface SliceReducersBase<TState> {
  [k: string]: ActionReducer<TState> | PayloadActionReducer<TState>;
}

export interface PayloadAction<TActionType = string, TPayload = any>
  extends Action<TActionType> {
  payload: TPayload;
}

export type ActionCreator<TActionType = string> = () => Action<TActionType>;

export type PayloadActionCreator<TActionType = string, TPayload = any> = (
  payload: TPayload,
) => PayloadAction<TActionType, TPayload>;

export type ActionReducer<TState> = (state: TState) => TState;

export type PayloadActionReducer<TState, TPayload = any> = (
  state: TState,
  payload: TPayload,
) => TState;

export type Actions<
  TState,
  TSliceReducers extends SliceReducersBase<TState>
> = {
  [k in keyof TSliceReducers]: Parameters<
    TSliceReducers[k]
  >[1] extends undefined
    ? ActionCreator<string> & { type: string }
    : PayloadActionCreator<string, Parameters<TSliceReducers[k]>[1]> & {
        type: string;
      };
};

export type ActionTypes<
  TState,
  TSliceReducers extends SliceReducersBase<TState>
> = {
  [k in keyof TSliceReducers]: ReturnType<Actions<TState, TSliceReducers>[k]>;
};

export type Workers<
  TState,
  TSliceReducers extends SliceReducersBase<TState>
> = {
  [k in keyof TSliceReducers]?: (
    actionCreators: Actions<TState, TSliceReducers>,
  ) => (action: ActionTypes<TState, TSliceReducers>[k]) => Generator | void;
};
