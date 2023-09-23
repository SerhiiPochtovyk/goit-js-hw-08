// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryItemMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItemMarkup);

function createGalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>`;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// У першому рядку коду ми імпортуємо galleryItems з файлу gallery-items.js, в якому знаходяться дані про нашу галерею.
// Далі, ми імпортуємо плагін SimpleLightbox з пакету simplelightbox і його стилі з simple-lightbox.min.css.
// Потім ми виводимо масив galleryItems у консоль, щоб перевірити, що дані були успішно імпортовані.
// Далі, ми використовуємо document.querySelector('.gallery') для вибору елементу з класом gallery на нашій сторінці.
// Наступна стрічка коду використовуємо createGalleryItemMarkup для генерації HTML розмітки, використовуючи дані з galleryItems.
// Функція createGalleryItemMarkup отримує масив galleryItems як аргумент і використовує функцію map для створення розмітки для кожного елементу масиву. Кожен елемент масиву представлено об'єктом з властивостями preview, original і description.
