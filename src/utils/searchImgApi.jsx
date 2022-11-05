import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/?';
const API_KEY = '30230166-d77a5ca1fbfdccb59d50824e5';

const searchImgApi = async (query, page = 1) => {
  try {
    const res = await axios.get({
      params: {
        key: API_KEY,
        q: query,
        per_page: 12,
        page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export default searchImgApi;
