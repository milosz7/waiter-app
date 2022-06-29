import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Table {
  id: number;
  status: string;
  currentPeopleNumber: number;
  maxPeopleNumber: number;
  bill: number;
}

interface State {
  tables: Table[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: State = {
  tables: [],
  status: 'idle',
  error: null,
};

export const fetchTablesData = createAsyncThunk('tables/fetchTables', async () => {
  const response = await fetch('http://localhost:3131/api/tables');
  return (await response.json()) as Table[];
});

const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTablesData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTablesData.fulfilled, (state, action) => {
        state.tables = state.tables.concat(...action.payload);
        state.status = 'succeeded';
      })
      .addCase(fetchTablesData.rejected, (state, action) => {
        state.status = 'failed';
        console.log(action.error.message);
      })
  },
});

export const getAllTables = (state: RootState) => state.tablesReducer.tables;
export const getTablesStatus = (state: RootState) => state.tablesReducer.status;

export default tablesSlice.reducer;
