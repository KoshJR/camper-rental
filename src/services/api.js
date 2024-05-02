import axios from "axios";

axios.defaults.baseURL = "https://65b5638241db5efd2867aab6.mockapi.io/api/";

export const getAllAdverts = async (page, limit) => {
  const response = await axios.get(`adverts/?page=${page}&limit=${limit}`);
  return response.data;
};
