import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
};

export const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPhotos } = photoSlice.actions;

export default photoSlice.reducer;
