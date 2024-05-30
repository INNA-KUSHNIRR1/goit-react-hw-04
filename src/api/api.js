import axios from "axios";

const API_KEY = "HG9aTOmtGBry4YtaddJMiOIW_BQRD2Kv8Luvt536hcs";
axios.defaults.baseURL = `https://api.unsplash.com`;

const fetchImagesFromApi = async (textInput = "", page) => {
  // console.log("textInput", textInput);
  const params = new URLSearchParams({
    client_id: API_KEY,
    query: textInput,
    page,
    per_page: 10,
  });
  const { data } = await axios.get(`/search/photos?${params}`);
  // console.log(data);
  return data;
};
export default fetchImagesFromApi;
