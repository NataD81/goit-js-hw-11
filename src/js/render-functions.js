import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");


let lightbox;

export function createImg (image) {
    return `<li class="card">
    <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}">
    </a>
    <div class="card-info">
        <p class = "description"></b>Likes: ${image.likes}</p>
        <p class = "description"></b>Views: ${image.views}</p>
        <p class = "description"></b>Comments: ${image.comments}</p>
        <p class = "description"></b>Downloads: ${image.downloads}</p>
    </div>
</li>`;
}

export function downLoadImg (arr) {
    return arr
    .map(createImg)
    .join("");
}

export function imgGallery () {
    if(!lightbox){
    lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250           
});
    }else{
        lightbox.refresh();
    }

}



