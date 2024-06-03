import axios from "axios";

const API_KEY = "HG9aTOmtGBry4YtaddJMiOIW_BQRD2Kv8Luvt536hcs";
axios.defaults.baseURL = `https://api.unsplash.com`;

const fetchImagesFromApi = async (textInput = "", page) => {
  const params = new URLSearchParams({
    client_id: API_KEY,
    query: textInput,
    page,
    per_page: 12,
    orientation: "landscape",
  });
  const { data } = await axios.get(`/search/photos?${params}`);

  return data;
};
export default fetchImagesFromApi;
