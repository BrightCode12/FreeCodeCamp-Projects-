const currentDate = new Date();
const currentFormat = `Current Date and Time: ${currentDate}`;
console.log(currentFormat);
function formatDateMMDDYYYY(currentDate) {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}
function formatDateLong(formattedDate) {
    const year = formattedDate.getFullYear();
	const month = String(formattedDate.getMonth() + 1);
    const day = String(formattedDate.getDate()).padStart(2, "0");
    let convertMonth = "";
    switch (month) {
        case "1":
             convertMonth = "January";
            return `Formatted Date (Month Day, Year): ${convertMonth} ${day},${year}`;
            break;
        case "2":
            convertMonth = "February";
            return `Formatted Date (Month Day, Year): ${convertMonth} ${day},${year}`;
            break;
        case "3":
            convertMonth = "March";
            return `Formatted Date (Month Day, Year): ${convertMonth} ${day},${year}`;
            break;
        case "4":
            convertMonth = "April"
            return `Formatted Date (Month Day, Year): ${convertMonth} ${day},${year}`;
            break;
        case "5":
            convertMonth = "May"
            return `Formatted Date (Month Day, Year): ${convertMonth} ${day},${year}`;
            break;
        case "6":
            convertMonth = "June";
            return `Formatted Date (Month Day, Year): ${convertMonth} ${day},${year}`;
            break;
        case "7":
            convertMonth = "July";
            return `Formatted Date (Month Day, Year): ${convertMonth} ${day},${year}`;
            break;
        case "8":
            convertMonth = "August";
            return `Formatted Date (Month Day, Year): ${convertMonth} ${day},${year}`;
            break;
        case "9":
            convertMonth = "September";
            return `Formatted Date (Month Day, Year): ${convertMonth} ${day},${year}`;
            break;
        case "10":
            convertMonth = "October";
            return `Formatted Date (Month Day, Year): ${convertMonth} ${day},${year}`;
            break;
        case "11":
            convertMonth = "November";
            return `Formatted Date (Month Day, Year): ${convertMonth} ${day},${year}`;
            break;
        case "12":
            convertMonth = "December";
            return `Formatted Date (Month Day, Year): ${convertMonth} ${day},${year}`;
            break;
        default:
            break;
    }
	return `Formatted Date (Month Day, Year): ${convertMonth} ${day},${year}`;
}
console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));

//Short Form 
const FormatDateMidAdvancedForm = (currentDate) => {
    const year = currentDate.getFullYear();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthName = month[currentDate.getMonth()];
    const dayName = day[currentDate.getDay()];
    const date = String(currentDate.getDate()).padStart(2, "0");

    return `Formatted Date (Day Month, Year): ${date} ${dayName} ${monthName},${year}`;
}
console.log(FormatDateMidAdvancedForm(currentDate));

//Using toLocalStringDate

const FormatDateAdvancedForm = (currentDate) => {
    const options = { month: "long", day:"2-digit", year: "numeric" };
    const convertedString = currentDate.toLocaleDateString("en-US", options);
    return `Formatted Date (Day Month, Year): ${convertedString}`;
}

console.log(FormatDateAdvancedForm(currentDate));