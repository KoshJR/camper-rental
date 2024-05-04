import { createSlice } from "@reduxjs/toolkit";
import { getAllAdverts } from "./operations";

const initialState = {
    adverts: [],
    favorites: [],
    page: 1,
};

const advertsSlice = createSlice({
  name: "adverts",
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.favorites.push(action.payload)
        },
        removeFavorite(state, action) {
            state.favorites = state.favorites.filter((advert) => advert._id !== action.payload)
        },
        nextPage(state) {
            state.page = state.page + 1;
        }
  },
  
    extraReducers: (builder) =>
        builder.addCase(getAllAdverts.fulfilled, (state, { payload }) => {
        if (state.page === 1) {
            state.adverts = payload;

        } else {
            state.adverts.push(...payload);
      }
  }),
});

export const { addFavorite, removeFavorite, nextPage } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;