import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { page, limit} from '../../constants/constants'

axios.defaults.baseURL = "https://65b5638241db5efd2867aab6.mockapi.io/api/";


export const getAllAdverts = createAsyncThunk(
    'adverts/getAllAdverts',
    async (page, thunkApi) => {
        try {
            const { data } = await axios.get(`/adverts/?page=${page}&limit=${limit}`);
            return data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)