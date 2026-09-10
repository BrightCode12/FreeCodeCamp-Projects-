
const lunches = [];
function addLunchToEnd(lunches, LunchItem) {
  lunches.push(LunchItem);
  console.log(`${LunchItem} added to the end of the lunch menu.`);
  return (lunches);
}

function addLunchToStart(lunches, LunchItem) {
  lunches.unshift(LunchItem);
  console.log(`${LunchItem} added to the start of the lunch menu.`);
  return lunches;
}
function removeLastLunch(lunches) {
  let LastLunch = lunches.pop(lunches.length - 1)
  if (lunches.length > 0)
   { console.log(`${LastLunch} removed from the end of the lunch menu.`) }
  if(lunches.length === 0) {
    console.log("No lunches to remove.")
  }
  return lunches;
}
function removeFirstLunch(lunches) {
  let FirstLunch = lunches[0]
  if (lunches.length > 0) { 
    lunches.shift([0]);
    console.log(`${FirstLunch} removed from the start of the lunch menu.`) }
  if(lunches.length === 0) {
    console.log("No lunches to remove.")
  }
  return lunches;
}
function getRandomLunch(lunches) {
  const randomLunch = lunches[Math.floor(Math.random() * lunches.length)];
  if (lunches.length > 0) {
    console.log(`Randomly selected lunch: ${randomLunch}`);
  } else {
    console.log(`No lunches available.`);
    return randomLunch;
  }
}
function showLunchMenu(lunches) {
  if (lunches.length > 0) {
    console.log("Menu items: " + lunches.join(", "));
  }
  else {
    console.log("The menu is empty.");
  }
  return lunches;
}
console.log(showLunchMenu(["Greens", "Corns", "Beans"]));
