import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer'

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(thunkMiddleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export default store