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

const imgEl = document.querySelector("#img");
gallery.insertAdjacentHTML("beforeend", listOfImages);

gallery.addEventListener("click", onLightboxOpenBigImg);
// gallery.addEventListener("click", onLightboxCloseBigImg);

const lightbox = basicLightbox.create(`
    <img src="" alt="">
`);

// instance.show();

function onLightboxOpenBigImg(event) {
  event.preventDefault();
  lightbox.classList.add("active");
  imgEl.src = event.target.dataset.source;
  console.log("click on photo");
}

// function onLightboxCloseBigImg() {
//   lightbox.classList.remove("active");
//   imgEl.src = "";
// }

// {/* <div class="lightbox js-lightbox">
// <div class="lightbox__overlay"></div>

// <div class="lightbox__content">
//   <img class="lightbox__image" src="" alt="" />
// </div> */}
