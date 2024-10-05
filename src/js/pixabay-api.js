import axios from 'axios';
export let perPage = 15;
import { page } from '../main';

export async function getPictures(query, currentPage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '42978821-e3c6f538b5791c0a766c3ba19',
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