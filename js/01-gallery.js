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
console.log(gallery);

gallery.addEventListener("click", onBigImageClick);

function onBigImageClick(event) {
  event.preventDefault();

  const imageBig = event.target.dataset.sourse;

  const instance = basicLightbox.create(`
  <img src = "${imageBig}" >
`);

  instance.show();
}
