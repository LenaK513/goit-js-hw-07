import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onBigUrlImageClick);

function onBigUrlImageClick(event) {
  // preventDefault();
  console.log(event.target);
}

const listOfElements = (galleryItem) => {
  // return `<li> <img class="image-item" src=${galleryItem.original} alt='${galleryItem.description}' /> </li>`;
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

gallery.insertAdjacentHTML("beforeend", listOfImages);
// console.log(listOfElements);
const listOfImages = galleryItems.map(listOfElements).join("");

// console.log(gallery);
