import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    activeIndexes: number[];
}

const initialState: CounterState = {
    activeIndexes: [],
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setActiveIndexes(state, action: PayloadAction<number[]>) {
            console.log('setActiveIndexes', action.payload);
            state.activeIndexes = action.payload;
            localStorage.setItem('indexState', JSON.stringify(state.activeIndexes));
        },
        reset(state) {
            console.log('reset');
            state.activeIndexes = [];
            localStorage.setItem('indexState', JSON.stringify(state.activeIndexes));
        },
    },
});

export const { setActiveIndexes, reset } = counterSlice.actions;
export default counterSlice.reducer;