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

// gallery.addEventListener("click", onBigUrlImageClick);

// const lightbox = document.createElement("div");
// lightbox.id = "lightbox";
// document.body.appendChild(lightbox);

// galleryItems.forEach((galleryItem) => {
//   galleryItem.addEventListener("click", (event) => {
//     event.preventDefault();
//     lightbox.classList.add("active");
//     const imgEl = document.createElement("img");
//     imgEl.scr = galleryItem.original;
//     lightbox.appendChild(img);

//     // console.log(event.target.dataset);
//   });
// });
