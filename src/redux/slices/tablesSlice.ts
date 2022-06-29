import { createSlice } from "@reduxjs/toolkit";

interface Table {
  id: number;
  status: string;
  currentPeopleNumber: number;
  maxPeopleNumber: number;
  bill: number;
}

export const initialState: Table[] = [];

const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default tablesSlice.reducer