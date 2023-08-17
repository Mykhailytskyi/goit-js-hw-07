import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
let activeModal = null;

function createGalleryItem(item) {
  const li = document.createElement("li");
  li.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;
  image.setAttribute("data-source", item.original);

  link.appendChild(image);
  li.appendChild(link);

  return li;
}

galleryItems.forEach((item) => {
  const galleryItem = createGalleryItem(item);
  gallery.appendChild(galleryItem);
});

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    const source = e.target.getAttribute("data-source");

    activeModal = basicLightbox.create(`
            <img src="${source}" width="800" height="600">
        `);

    activeModal.show();

    document.addEventListener("keydown", handleEscapeKey);
  }
});

function handleEscapeKey(e) {
  if (e.key === "Escape") {
    if (activeModal) {
      activeModal.close();
      activeModal = null;
    }

    document.removeEventListener("keydown", handleEscapeKey);
  }
}
