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
    <li class="gallery__item">
        <img class="gallery__image"
            src="${preview}"
            original="${original}"
            description="${description}"
            style="background-color: "
        />
    </li>
    `;
    })
    .join(' ');
}

{/* <img src="./images/img2.jpg" width="370" height="294" alt="дизайнеры-разрабатывают-приложения-для-смартфонов" /> */}