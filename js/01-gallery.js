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

const instance = basicLightbox.create(
  `<img src="" >`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscapeButtonEvent);
    },
  },
  {
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscapeButtonEvent);
    },
  }
);

function onBigUrlImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance.element().querySelector("img").src = event.target.dataset.sourse;
  instance.show();
}

function onEscapeButtonEvent(event) {
  event.preventDefault();

  if (event.code === "Escape") {
    instance.close();
    return;
  }
}

//
