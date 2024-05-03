import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
    filter: '',
};

const advertsSlice = createSlice({
    name: 'adverts',
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.adverts = [...state.adverts, action.payload]
        },
        removeFavorite(state, action) {
            state.adverts = state.adverts.filter((advert) => advert.id !== action.payload);
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },

    },
})

export const { addFavorite, setFilter, removeFavorite } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;