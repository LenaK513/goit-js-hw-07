import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const listOfImages = galleryItems.map(listOfElements).join("");
gallery.insertAdjacentHTML("beforeend", listOfImages);

gallery.addEventListener("click", onBigUrlImageClick);

function onBigUrlImageClick(event) {
  // preventDefault();
  console.log(event.target);
}

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
