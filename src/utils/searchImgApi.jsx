import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
const API_KEY = '30230166-d77a5ca1fbfdccb59d50824e5';

 const searchImgApi = (query, page = 1) => {
  return axios
    .get('api/', {
      params: {
        q: query,
        Key: API_KEY,
        per_page: 12,
        page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(res => res.data);
};
export default searchImgApi