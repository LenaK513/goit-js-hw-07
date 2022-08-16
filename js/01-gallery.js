import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
// console.log(gallery);

const listOfElements = (galleryItem) => {
  // return `<li> <img class="image-item" src=${galleryItem.original} alt='${galleryItem.description}' /> </li>`;
  return `
<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
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

console.log(listOfImages);
// gallery.insertAdjacentHTML("beforeend", listOfImages);
// console.log(gallery);
// console.log(galleryItems);
