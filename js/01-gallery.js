import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const listOfElements = (galleryItem) => {
  return `<li> <img class="image-item" src=${galleryItem.original} alt='${image.description}' /> </li>`;
};

const listOfImages = images.map(listOfElements).join("");

gallery.insertAdjacentHTML("beforeend", listOfImages);
console.log(gallery);
console.log(galleryItems);
