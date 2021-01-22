# State utilities

Table of content

- [State utilities](#state-utilities)
  - [create Store](#create-store)
  - [create Slice](#create-slice)
    - [create Slice Object](#create-slice-object)
    - [create Reducer Object](#create-reducer-object)

## [create Store](./createStore.ts)

Create redux store including root `reducer`, `root state`, `middlewares` from `slices`.

So what is `slices` ?

> Extended idea from [@redux/toolkit](https://redux-toolkit.js.org), my slice includes: `initialState`, `name`, `reducer`, `actions` and `saga`.

Purpose
> Gather all things about redux eco-system into only one place to manage easily.

Input: `Slices` and `Middleware[]` (optional). Saga middleware is added behind the scenes.

Output: redux store

Usage

```typescript
import createStore from 'utils/state/createStore';
import slice1 from 'states/slice1';
import slice2 from 'states/slice2';

const store = createStore({
   slice1,
   slice2
 });
```

## [create Slice](./createSlice.ts)

Create a slice from settings (configuration options).
There are two types of settings:

- SliceSettings
- ReducerSettings

Matched with two types of slice:

- SliceObject
- ReducerObject

Input: `SliceSettings | ReducerSettings`

Output: `SliceObject | ReducerObject`

Usage

```typescript
import createSlice from 'utils/state/createSlice';

const slice = createSlice({
  name: 'topWalletReports',
  initialState: {},
  // case reducers: (state) => newState or (state, actionPayload) => newState
  reducers: {
    list: (state: TopWalletReportsState, _payload: TopWalletListRequestData) => ({
      ...state,
      loading: true,
    }),
    listSuccess: (
      state: TopWalletReportsState,
      {
        page: { page, pageSize },
        topWalletList,
        totalResults,
      }: TopWalletListResponseData,
    ) => ({
      ...state,
      loading: false,
      list: topWalletList,
      total: totalResults,
      page,
      pageSize,
    }),
  },
  // saga workers
  workers: {
    // listSuccess, requestFailed are actions injected from case reducers
    list: ({ listSuccess, requestFailed }) =>
      function* handleList({ payload }) {
        const res = (yield call(service.list, payload)) as BaseResponse<
          TopWalletListResponseData
        >;

        if (isSuccessResponse(res)) {
          yield put(listSuccess(res.data));
        } else {
          yield put(requestFailed(res.message));
        }
      },
  }
});
```

### [create Slice Object](./createSliceObject.ts)

Create a slice object including name, initialState, actions, reducer, and saga

Input: `SliceSettings`

Output: `SliceObject`

Usage

```typescript
import createSliceObject from 'utils/createSliceObject';

const sliceObject = createSliceObject({
  name: 'slice name',
  initialState: {},
  
  // case reducers: (state) => newState or (state, actionPayload) => newState
  reducers: {},
  
  // saga workers
  workers: {},

  // extra reducers to apply for an action type
  extraReducer: {}
});
```

### [create Reducer Object](./createReducerObject.ts)

Create a reducer object including name, initialState, and reducer.
This utility supports redux reducer in the normal way work in the slice style structure.

Input: `ReducerSettings`

Output: `ReducerObject`

Usage

```typescript
import createReducerObject from 'utils/createReducerObject';

const sliceObject = createReducerObject({
  name: 'slice name',
  initialState: {},
  reducer: sliceReducer,
});
```
