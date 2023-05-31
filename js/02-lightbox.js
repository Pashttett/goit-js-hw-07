import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join('');
}

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createGalleryMarkup(galleryItems);
document.addEventListener('DOMContentLoaded', function () {
  new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionPosition: 'bottom',
  });
});