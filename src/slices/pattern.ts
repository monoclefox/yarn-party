import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setLocalStorageItem, setLocalStorageItems } from '../util/localStorage';
interface PatternState {
    card: number;
    rowDone: boolean;
    currentIndex: number;
    patternIndex: number;
  }
  
  const initialState: PatternState= {
    card: 0,
    rowDone: false,
    currentIndex: 0,
    patternIndex: 0,
  };
  

const patternSlice = createSlice({
    name: 'pattern',
    initialState,
    reducers: {
      setCard: (state, action: PayloadAction<number>) => {
        state.card = action.payload;
        setLocalStorageItem('cardState', JSON.stringify(state.card));
      },
      setRowDone: (state, action: PayloadAction<boolean>) => {
        state.rowDone = action.payload;
      },
      setCurrentIndex: (state, action: PayloadAction<number>) => {
        state.currentIndex = action.payload;
      },
      setPatternIndex: (state, action: PayloadAction<number>) => {
        state.patternIndex = action.payload;
        state.card = 0;
        state.currentIndex = 0;
        state.rowDone = false;
        setLocalStorageItems({
            patternIndex: state.patternIndex,
            card: state.card,
            currentIndex: state.currentIndex,
        });
      },
    },
  });

export const { setCard, setRowDone, setCurrentIndex, setPatternIndex } = patternSlice.actions;
export default patternSlice.reducer;