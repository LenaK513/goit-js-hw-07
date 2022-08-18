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
gallery.addEventListener("click", show);

const modal = basicLightbox.create(`
   return
<img id="image" src=" " alt="" >
`);

function show(event) {
  event.preventDefault();
  const imgEl = document.querySelector("#image");
  console.log(event.target.dataset.sourse);
  imgEl.src = event.target.dataset.sourse;
}

modal.show();
