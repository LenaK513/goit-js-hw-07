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

gallery.addEventListener("click", onLightboxOpenBigImg);

const imgEl = document.querySelector("#img");

function onLightboxOpenBigImg(event) {
  event.preventDefault();
  lightbox.classList.add("active");
  imgEl.src = event.target.dataset.source;
}

function onLightboxCloseBigImg() {
  lightbox.classList.remove("active");
}
