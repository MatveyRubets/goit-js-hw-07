import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const imagesMarkup = createImageGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", imagesMarkup);

function createImageGallery(images) {
	return images.map(mapImages).join("");
}
function mapImages({ preview, original, description }) {
	return ` 
	<div class="gallery__item">
		<a data-lightbox="lbox" class="gallery__link" href="large-image.jpg">
			<img
				class="gallery__image"
				src="${preview}"
				data-source="${original}"
				alt="${description}"
			/>
	</a>
</div>`;
}

const instance = basicLightbox.create(`
    <div class="modal">
        <img src="" alt="" width="800" height="600"/>
    </div>
`);

gallery.addEventListener("click", onClickImagePopup);
function onClickImagePopup(e) {
	e.preventDefault();
	if (e.target.nodeName !== "IMG") {
		return;
	}

	instance.element().querySelector("img").src = e.target.dataset.source;
	instance.element().querySelector("img").alt = e.target.alt;

	instance.show();

	window.addEventListener("keydown", onModalClose);
	instance.element().addEventListener("click", onModalClose);
}

function onModalClose(e) {
	if (e.code === "Escape" || e.currentTarget.nodeName === "DIV") {
		instance.close();
		window.removeEventListener("keydown", onModalClose);
	}
}
