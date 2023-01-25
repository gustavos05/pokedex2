import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './slices/counter.slices'
import usernameSlice from './slices/username.slice'

export default configureStore({
    reducer: {
        counter : counterSlice,
        username : usernameSlice
    }
})