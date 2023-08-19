import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    (item) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
  </li>
`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    lightbox.close();
  }
});
