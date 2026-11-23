const authorContainer = document.querySelector("#author-container");
const loadMoreBtn = document.querySelector("#load-more-btn");

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

const initialFetch = async () => {
	try {
		const res = await fetch(
			"https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json",
		);
		authorDataArr = await res.json();
		displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
	} catch (error) {
		authorContainer.innerHTML = `<p class = "error-msg"> There was an error loading the authors</p>`;
	}
};

const fetchMoreAuthors = () => {
	startingIndex += 8;
	endingIndex += 8;
	displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
	if (authorDataArr.length <= endingIndex) {
		loadMoreBtn.disabled = true;
		loadMoreBtn.style.cursor = "not-allowed";
		loadMoreBtn.textContent = "No more data to load";
	}
};

const displayAuthors = (authors) => {
	authorContainer.innerHTML = authors
		.map(
			({ author, image, url, bio }, index) => /*html*/ `
	   <div id = "${index}"  class="user-card">
		<h2 class="author-name">${author}</h2>
		<img src="${image}" alt="${author} avatar" class="user-img">
		<div class="purple-divider"></div>
		<p class="bio">${bio.length > 50 ? `${bio.slice(0, 50)}...` : bio}</p>
		<a href="${url}" class="author-link" target= "_blank">
			${author}'s author page
		</a>
	   </div>
		`,
		)
		.join("");
};
initialFetch();
loadMoreBtn.addEventListener("click", fetchMoreAuthors);
