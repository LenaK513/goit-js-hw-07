import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listOfElements = (galleryItem) => {
  return `
<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    
    src="${galleryItem.preview}"
    data-source='${galleryItem.original}'
    alt='${galleryItem.description}'
  />
</a>
</div>
`;
};
const listOfImages = galleryItems.map(listOfElements).join("");

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", listOfImages);

gallery.addEventListener("click", onBigImageClick);

const imageBig = document.querySelector("img");
console.dir(imageBig);

function onBigImageClick(event) {
  event.preventDefault();

  imageBig.src = event.dataset.sourse;

  const instance = basicLightbox.create(`
  <img src = "${imageBig.src}" >
`);

  instance.show();
}
