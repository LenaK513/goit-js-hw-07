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

gallery.addEventListener("click", onBigUrlImageClick);

function onBigUrlImageClick(event) {
  event.preventDefault();

  console.dir(event);

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" >
`);

  instance.show(window.addEventListener("keydown", onEscapeButtonEvent));

  function onEscapeButtonEvent(event) {
    window.removeEventListener("keydown", onEscapeButtonEvent);
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
//
