const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");
const galleryItems = document.querySelectorAll("#gallery-item");


galleryItems.forEach((item) => {
	item.addEventListener("click", () => {
		lightboxImage.src = item.src.replace("-thumbnail", "");
		lightbox.style.display = "flex";
	});
});

closeBtn.addEventListener("click", () => {
	lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
	if (e.target === lightbox) {
		lightbox.style.display = "none";
    }
});
