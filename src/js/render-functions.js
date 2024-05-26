import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

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
    let lightbox = new SimpleLightbox('.gallery img', {
        captionsData: 'alt',
        captionDelay: 250           
});
lightbox.refresh();
};
