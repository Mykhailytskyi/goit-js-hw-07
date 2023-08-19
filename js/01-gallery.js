import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");
let currentLightboxInstance = null;

const galleryItemsMarkup = galleryItems
  .map(
    (item) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
    </a>
  </li>
`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.tagName === "IMG") {
    const largeImageUrl = event.target.getAttribute("data-source");
    const lightbox = basicLightbox.create(`
      <img src="${largeImageUrl}" alt="${event.target.alt}" />
    `);

    lightbox.show();
    currentLightboxInstance = lightbox;
    document.addEventListener("keydown", onEscapeKeyDown);
  }
});

function onEscapeKeyDown(event) {
  if (event.key === "Escape" && currentLightboxInstance) {
    currentLightboxInstance.close();
    document.removeEventListener("keydown", onEscapeKeyDown);
    currentLightboxInstance = null;
  }
}
