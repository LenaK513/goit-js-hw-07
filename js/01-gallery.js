import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listOfElements = (galleryItem) => {
  return `
<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    
    src="${galleryItem.preview}"
    data-source="${galleryItem.original}"
    alt='${galleryItem.description}'
  />
</a>
</div>
`;
};
const listOfImages = galleryItems.map(listOfElements).join("");

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", listOfImages);

gallery.addEventListener("click", onBigUrlImageClick);

import * as basicLightbox from "basiclightbox";

// const modalWindow = basicLightbox.create(`
//     <div class="modal">
//     <img src="assets/images/image.png" width="800" height="600">
//     </div>
// `);

// ModalWindow.show();

function onBigUrlImageClick(event) {
  event.preventDefault();
  console.log(event.target.dataset.sourse);
}
