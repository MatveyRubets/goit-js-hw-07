import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const imagesMarkup = createImageGallery(galleryItems);

// Пройтись мапом по картинкам и засунуть их в галлерею
gallery.insertAdjacentHTML("beforeend", imagesMarkup);

function createImageGallery(images) {
	return images.map(mapImages).join("");
}
function mapImages({ preview, original, description }) {
	return ` 
	<a class="gallery__item" href="${original}">
		<img class="gallery__image"
							src="${preview}" 
							alt="${description}" />
	</a>
`;
}

const modalSwiperLightBox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
});
