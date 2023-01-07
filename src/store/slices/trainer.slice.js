import { createSlice } from "@reduxjs/toolkit";


export const trainer = createSlice({
  name: 'trainer',
  initialState: '',
  reducers:{
    setTrainerGlobal: (state, action) => action.payload
  }
})

export const {setTrainerGlobal} = trainer.actions

export default trainer.reducer