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
            return [];
        }
    }
    return parseData;
};

const isValidBookmark = (bookmark) => {
    return (
        bookmark !== null &&
        typeof bookmark === "object" &&
        typeof bookmark.url === "string"
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
}

