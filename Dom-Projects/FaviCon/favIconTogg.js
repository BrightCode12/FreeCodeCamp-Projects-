const hearts = document.querySelectorAll(".favorite-icon");

hearts.forEach(heart => {
    heart.addEventListener("click", () => {
        heart.classList.toggle("filled");
        heart.innerHTML = heart.classList.contains("filled")
            ? "&#9829;" 
            : "&#9825;"; 
    });
});