import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
// console.log(gallery);

const listOfElements = (galleryItem) => {
  return `<li> <img class="image-item" src=${galleryItem.original} alt='${galleryItem.description}' /> </li>`;
};

const listOfImages = galleryItems.map(listOfElements).join("");

gallery.insertAdjacentHTML("beforeend", listOfImages);
console.log(gallery);
// console.log(galleryItems);
