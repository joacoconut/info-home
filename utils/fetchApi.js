import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-key": "77b3f982f2mshfaf5e09fc694395p17a888jsn8beafc93e80d",
      "x-rapidapi-host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
