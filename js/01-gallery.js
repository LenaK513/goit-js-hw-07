import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listOfElements = (galleryItem) => {
  return `
<div class="gallery__item">
<a class="gallery__link" href="${galleryItem.original}">
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source="large-image.jpg"
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

function onBigUrlImageClick(event) {
  preventDefault();
  console.log(event.target.nodeName);
}
