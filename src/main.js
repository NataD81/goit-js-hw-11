import { findImg } from "./js/pixabay-api";
import { downLoadImg } from './js/render-functions';
import { createImg } from './js/render-functions';
import { imgGallery } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const from = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector("#loading");


from.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '';

  const request = event.target.request.value.trim();

  findImg(request)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      } else {
        const markup = downLoadImg(data.hits);
        gallery.innerHTML = markup;
        showLoading();
        imgGallery();
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      hideLoading();
    });
});

 
function showLoading() {
    loading.style.display = "block";
};

function hideLoading() {
    loading.style.display = "none";
};

window.addEventListener('load', () => {
  hideLoading();
});