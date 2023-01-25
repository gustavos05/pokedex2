import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const counterSlice = createSlice({
	name: 'counter',
    initialState: 0,
    reducers: {
        //actions -> acciones que podemos llevar a cabo con el slice
        // incrementar, decrementar, dar un valor especifico
        /*

        actionName : ( state, action ) => {
            //instrucciones
            return nuevoValorDelSlice
        },
        */
        increment : ( state, action ) => {
            return state + 1
        },
        decrement : (state, action) => {
            return state - 1
        },
        setValue : ( state, action ) => {
            console.log(action)
            return action.payload
        }

    }
})

export const { increment, decrement, setValue } = counterSlice.actions;

export default counterSlice.reducer;