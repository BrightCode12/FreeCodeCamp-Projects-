const mainSection = document.getElementById("main-section");
const categoryDropDown = document.getElementById("category-dropdown");
const viewCategoryBtn = document.getElementById("view-category-button");
const addBookMarkBtn = document.getElementById("add-bookmark-button");
const formSection = document.getElementById("form-section");
const categoryName = document.querySelector(".category-name");
const name = document.getElementById("name");
const url = document.getElementById("url");
const closeFormBtn = document.getElementById("close-form-button");
const addBookMarkBtnForm = document.getElementById("add-bookmark-button-form");
const bookMarkListSection = document.getElementById("bookmark-list-section");
const categoryList = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookMarkBtn = document.getElementById("delete-bookmark-button");

const getBookmarks = () => {
	const storeData = localStorage.setItem("bookmarks");

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
            return []
        } 
    }
    return parseData;
};

const isValidBookmark = (bookmark) => {
    return (
        bookmark !== null && typeof bookmark === "object" && typeof bookmark.url === "string"
    );
};
