function myReplace(text, replaceText, textReplace) {
    const firstChar = replaceText[0];
    if (firstChar === firstChar.toUpperCase()) {
        textReplace = textReplace[0].toUpperCase() + textReplace.slice(1);
    } else {
        textReplace = textReplace[0].toLowerCase() + textReplace.slice(1);
    }
	return text.replace(replaceText, textReplace);
}


console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));