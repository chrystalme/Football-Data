import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  competitions: [],
};

export const competitionSlice = createSlice({
  name: 'competitions',
  initialState,
  reducers: {
    setCompetitions: (state, action) => {
      state.competitions.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCompetitions } = competitionSlice.actions;

export default competitionSlice.reducer;
