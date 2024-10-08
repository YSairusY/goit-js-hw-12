import { getPictures } from './js/pixabay-api.js';
import { renderElements } from './js/render-functions.js';
import { perPage } from './js/pixabay-api.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const form = document.querySelector('.form');
const button = document.querySelector('#search');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-btn');

export let page = 1;
let inputValue = '';
let totalHits = 0;

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    hideLoadBtn();
  inputValue = event.currentTarget.elements.input.value.trim();
  gallery.innerHTML = '';
  if (!inputValue) {
    iziToast.warning({
      title: 'Caution',
      message: 'You forgot to fill in the form!',
      position: 'topRight',
    });
    return;
  }

  page = 1;
  gallery.innerHTML = '';
  
  showLoader();
  try {
      const images = await getPictures(inputValue, page);
    hideLoader();
    if (images === undefined || images.length === 0) {
      iziToast.error({
        title: 'Search result',
        message:
          'Sorry, there are no images matching your search query. Please try again.',
        position: 'topRight',
      });
      return;
      }

      totalHits = images.totalHits;
     
    const markup = renderElements(images);
      gallery.innerHTML = markup;

       const totalPages = Math.ceil(totalHits / perPage);
         if (page < totalPages) {
         showLoadBtn();
        }
        else {
             hideLoadBtn();
        }

    initializeSlider();

  } catch (error) {
    hideLoader();
    if (
      error.name === 'TypeError' &&
      error.message.includes('Failed to fetch')
    ) {
      iziToast.error({
        title: 'Network Error',
        message:
          'Unable to connect. Please check your internet connection and try again.',
        position: 'topRight',
      });
    } else {
      iziToast.error({
        title: 'Error',
        message: `Error: ${error.message}`,
        position: 'topRight',
      });
    }
    }
    
    
  
  form.reset();
}

loadBtn.addEventListener('click', handleMore);

async function handleMore(event) {
  page += 1;
  showLoader();

  try {
    const newImages = await getPictures(inputValue, page);
    const markup = renderElements(newImages);
    gallery.insertAdjacentHTML('beforeend', markup);

    initializeSlider();
     myScroll();
      hideLoader();
      
 const totalPages = Math.ceil(totalHits / perPage);
    if (page >= totalPages) {
      iziToast.warning({
        title: 'End of Results',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
        hideLoadBtn()
        
    }
    
  } catch (error) {
    hideLoader();
    iziToast.error({
      color: 'red',
      message: `❌ Error fetching more images: ${error.message}`,
      position: 'top',
    });
  }
}

function showLoader() {
  let existingLoader = document.querySelector('.loader');
  if (!existingLoader) {
    const loader = document.createElement('div');
    loader.className = 'loader';
    form.insertAdjacentElement('afterend', loader);
  }
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}

function hideLoadBtn() {
  loadBtn.style.display = 'none';
}

function showLoadBtn() {
  loadBtn.style.display = 'flex';
}

function myScroll() {
  const card = document.querySelector('.gallery-item');
  const cardParams = card.getBoundingClientRect().height;
  window.scrollBy({
    top: cardParams * 2,
    behavior: 'smooth',
  });
}

function initializeSlider() {
  let gallerySlider = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  }).refresh();
}