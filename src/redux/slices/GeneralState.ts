import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {GeneralState} from '../../types/general';

const initialState: GeneralState = {
  showModalGlobal: false,
  showModalLoading: false,
  statusNetworking: false,
};

const GeneralSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setStatusModalGlobal(state, action: PayloadAction<boolean>) {
      state.showModalGlobal = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.showModalLoading = action.payload;
    },
    setStatusNetworking(state, action: PayloadAction<boolean>) {
      state.statusNetworking = action.payload;
    },
  },
});

//actions
export const {setStatusModalGlobal, setLoading, setStatusNetworking} =
  GeneralSlice.actions;

//reducers
export default GeneralSlice.reducer;
