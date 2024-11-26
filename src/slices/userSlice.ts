import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    createdAt: string;
    password: string;
}

const initialState: UserState = {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    createdAt: '',
    password: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;