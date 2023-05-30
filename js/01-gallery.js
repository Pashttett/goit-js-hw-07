import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
          </a>
        </li>
      `;
    })
    .join('');
}

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createGalleryMarkup(galleryItems);

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const target = event.target;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const largeImageUrl = target.dataset.source;

  openModal(largeImageUrl);
}

function openModal(url) {
  const instance = basicLightbox.create(`
    <img src="${url}" style="max-width: 100%; max-height: 100%;">
  `);

  instance.show();
}

console.log(galleryItems);
