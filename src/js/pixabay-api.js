import axios from 'axios';
export let perPage = 15;
import { page } from '../main';

export async function getPictures(query, currentPage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '45645042-c9b2fc3a6d24b970e9e620bb9',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: perPage,
  });
  const url = `${BASE_URL}?${params}`;

  const images = await axios
    .get(url)
    .then(response => response.data.hits)
    .catch(error => console.log(error));

  return images;
}