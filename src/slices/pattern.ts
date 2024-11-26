import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PatternState {
    card: number;
    rowDone: boolean;
    currentIndex: number;
  }
  
  const initialState: PatternState= {
    card: 0,
    rowDone: false,
    currentIndex: 0,
  };
  

const patternSlice = createSlice({
    name: 'pattern',
    initialState,
    reducers: {
      setCard: (state, action: PayloadAction<number>) => {
        state.card = action.payload;
      },
      setRowDone: (state, action: PayloadAction<boolean>) => {
        state.rowDone = action.payload;
      },
      setCurrentIndex: (state, action: PayloadAction<number>) => {
        console.log('setCurrentIndex', action.payload);
        state.currentIndex = action.payload;
      },
    },
  });

export const { setCard, setRowDone, setCurrentIndex } = patternSlice.actions;
export default patternSlice.reducer;