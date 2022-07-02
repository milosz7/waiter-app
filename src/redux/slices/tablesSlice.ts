import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
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

export const editTablesData = createAsyncThunk('tables/postTables', async (postData: Table) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      ...postData,
    }),
  };
  const response = await fetch(`http://localhost:3131/api/tables/${postData.id}`, options);
  return (await response.json()) as Table;
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
      .addCase(editTablesData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tables = state.tables.map((table) => 
          table.id === action.payload.id ? action.payload : table
        )
      })
      .addCase(editTablesData.rejected, (state, action) => {
        state.status = 'failed'
        console.log(action.error.message);
      });
  },
});

export const getAllTables = (state: RootState) => state.tablesReducer.tables;
export const getTablesStatus = (state: RootState) => state.tablesReducer.status;
export const getTableById = (state: RootState, id: string | undefined) =>
  state.tablesReducer.tables.find((table) => table.id.toString() === id);

export default tablesSlice.reducer;
