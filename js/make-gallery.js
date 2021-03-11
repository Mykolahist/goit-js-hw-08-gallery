import galleryImages from './gallery-items.js';

// const makeGalleryCard 

console.log(galleryImages);

console.log(makeGalleryCardMarkup(galleryImages));

const galleryContainer = document.querySelector('ul', '.gallery js-gallery');
const cardsMarkup = makeGalleryCardMarkup(galleryImages);

galleryContainer.insertAdjacentHTML('afterbegin', cardsMarkup);

function makeGalleryCardMarkup(galleryImages) {
    return galleryImages.map(({preview, original, description}) => {
        return `
    <div class="gallery">
      <divs
        class="gallery__item"
        preview="${preview}"
        original="${original}"
        description="${description}"
        style="background-color: "
      ></div>
    </div>
    `;
    })
    .join(' ');
}
