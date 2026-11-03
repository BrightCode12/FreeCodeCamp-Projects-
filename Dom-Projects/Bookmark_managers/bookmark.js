const mainSection = document.getElementById("main-section");
const categoryDropDown = document.getElementById("category-dropdown");
const viewCategoryBtn = document.getElementById("view-category-button");
const addBookMarkBtn = document.getElementById("add-bookmark-button");
const formSection = document.getElementById("form-section");
const categoryName = document.querySelector(".category-name");
const siteName = document.getElementById("name");
const url = document.getElementById("url");
const closeFormBtn = document.getElementById("close-form-button");
const addBookMarkBtnForm = document.getElementById("add-bookmark-button-form");
const bookMarkListSection = document.getElementById("bookmark-list-section");
const categoryList = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookMarkBtn = document.getElementById("delete-bookmark-button");

/* 
FUNCTION getBookmarks()

SET storedData TO the value of "bookmarks" in local storage

IF storedData does not exist
		RETURN an empty array
END IF

TRY
		PARSE storedData as JSON
IF parsing fails
		RETURN an empty array
END TRY

IF parsed data is not an array
		RETURN an empty array
END IF

FOR EACH bookmark IN parsed data
		IF bookmark is not a valid bookmark object
				RETURN an empty array
		END IF
END FOR

RETURN parsed data

END FUNCTION 
*/

const getBookmarks = () => {
	const storeData = localStorage.getItem("bookmarks");

	if (storeData === null) {
		return [];
	}
	let parseData;

	try {
		parseData = JSON.parse(storeData);
	} catch (error) {
		return [];
	}
	if (!Array.isArray(parseData)) {
		return [];
	}
	for (const bookmark of parseData) {
		if (!isValidBookmark(bookmark)) {
			return [];
		}
	}
	return parseData;
};

const isValidBookmark = (bookmark) => {
	return (
		bookmark !== null &&
		typeof bookmark === "object" &&
		typeof bookmark.name === "string" && bookmark.name.trim() !== "" &&
		typeof bookmark.url === "string" && bookmark.url.trim() !== ""
	);
};

/*
FUNCTION saveBookmarks(bookmarks)

CONVERT bookmarks array to JSON

STORE the JSON under the key "bookmarks"
		in local storage

END FUNCTION 
*/

const saveBookmarks = (bookmarks) => {
	const storedJson = JSON.stringify(bookmarks);
	localStorage.setItem("bookmarks", storedJson);
};

/*
FUNCTION displayOrCloseForm()

		TOGGLE the "hidden" class on #main-section

			TOGGLE the "hidden" class on #form-section

		END FUNCTION
*/

const displayOrCloseForm = () => {
	mainSection.classList.toggle("hidden");
	formSection.classList.toggle("hidden");
};

/*
FUNCTION displayOrHideCategory()

		TOGGLE the "hidden" class on #main-section
	  
				TOGGLE the "hidden" class on #bookmark-list-section
			  
				END FUNCTION
				*/

const displayOrHideCategory = () => {
	mainSection.classList.toggle("hidden");
	bookMarkListSection.classList.toggle("hidden");
};

/*
WHEN #add-bookmark-button IS CLICKED

		GET the selected category from #category-dropdown

				DISPLAY the selected category in .category-name

						CALL displayOrCloseForm()

						END EVENT
*/

closeFormBtn.addEventListener("click", () => {
	displayOrCloseForm();
});

/*
WHEN #add-bookmark-button-form IS CLICKED

SET bookmarks TO getBookmarks()
GET bookmarkName from #name input
GET bookmarkCategory from #category-dropdown
 GET bookmarkURL from #url input

CREATE newBookmark with:
name = bookmarkName
category = bookmarkCategory
url = bookmarkURL
APPEND newBookmark to bookmarks
CALL saveBookmarks(bookmarks)
CLEAR #name input
CLEAR #url input
CALL displayOrCloseForm()
END EVENT
*/

addBookMarkBtn.addEventListener("click", () => {
	const selectedCategory = categoryDropDown.value;
	categoryName.textContent = selectedCategory;
	displayOrCloseForm();
});

addBookMarkBtnForm.addEventListener("click", () => {
	const bookmarks = getBookmarks();

	const bookmarkName = siteName.value.trim();
	const bookmarkCategory = categoryDropDown.value.trim();
	const siteUrl = url.value.trim();

	const newBookmark = {
		name: bookmarkName,
		category: bookmarkCategory,
		url: siteUrl,
	};

	if (!isValidBookmark(newBookmark)) {
		alert("Please fill in all fields.");
		return;
	}

	bookmarks.push(newBookmark);

	saveBookmarks(bookmarks);

	siteName.value = "";
	url.value = "";

	displayOrCloseForm();
});

viewCategoryBtn.addEventListener("click", () => {
	const selectedCategory = categoryDropDown.value;
	categoryName.textContent = selectedCategory;

	const bookmarks = getBookmarks();
	const matchingBookmarks = [];

	for (const bookmark of bookmarks) {
		if (bookmark.category === selectedCategory) {
			matchingBookmarks.push(bookmark);
		}
	}
	categoryList.innerHTML = "";

	if (!matchingBookmarks.length) {
		categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
	} else {
		for (const bookmark of matchingBookmarks) {
			categoryList.innerHTML += `
			<label for = "${bookmark.name}">
			<input type = "radio" id = "${bookmark.name}"  value = "${bookmark.name}" name = "category">
			<a href = "${bookmark.url}">${bookmark.name}</a>
			</label>
			`;
		}
	}
	displayOrHideCategory();
});

closeListBtn.addEventListener("click", () => {
	displayOrHideCategory();
});

deleteBookMarkBtn.addEventListener("click", () => {
	const selectedCategory = categoryDropDown.value;
	const bookmarks = getBookmarks();
	const selectedRadio = document.querySelector(`input[name="category"]:checked`);
	
	if (!selectedRadio) {
		alert("PLease select a bookmark to delete");
		return; 
	} 
	const updatedBookmarks = [];
	for (const bookmark of bookmarks) {
		if (bookmark.name !== selectedRadio.value || bookmark.category !== selectedCategory) {
			updatedBookmarks.push(bookmark);
		}
	}
	localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
	viewCategoryBtn.click();
	displayOrHideCategory();
});