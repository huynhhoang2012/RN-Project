import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {GeneralState} from '../../types/general';

const initialState: GeneralState = {
  showModalGlobal: false,
};

const GeneralSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setStatusModalGlobal(state, action: PayloadAction<boolean>) {
      state.showModalGlobal = action.payload;
    },
  },
});

//actions
export const {setStatusModalGlobal} = GeneralSlice.actions;

//reducers
export default GeneralSlice.reducer;
