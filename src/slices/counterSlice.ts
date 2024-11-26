import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    activeIndexes: number[];
}

const initialState: CounterState = {
    activeIndexes: JSON.parse(localStorage.getItem('indexState') || '[]'),
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setActiveIndexes(state, action: PayloadAction<number[]>) {
            state.activeIndexes = action.payload;
            localStorage.setItem('indexState', JSON.stringify(state.activeIndexes));
        },
        reset(state) {
            state.activeIndexes = [];
            localStorage.setItem('indexState', JSON.stringify(state.activeIndexes));
        },
    },
});

export const { setActiveIndexes, reset } = counterSlice.actions;
export default counterSlice.reducer;