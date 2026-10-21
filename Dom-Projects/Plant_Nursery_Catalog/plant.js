const ballerina = {
	commonName: "Spanish lavender",
	scientificName: "Lavandula stoechas",
	cultivar: "Ballerina",
};
const prettyPolly = {
	commonName: "Spanish lavender",
	scientificName: "Lavandula stoechas",
	cultivar: "Pretty Polly",
};
const willowVale = {
	commonName: "Spanish lavender",
	scientificName: "Lavandula stoechas",
	cultivar: "Willow Vale",
};

const hidcote = {
	commonName: "English lavender",
	scientificName: "Lavandula angustifolia",
	cultivar: "Hidcote",
};

const imperialGem = {
	commonName: "English lavender",
	scientificName: "Lavandula angustifolia",
	cultivar: "Imperial Gem",
};

const royalCrown = {
	commonName: "French lavender",
	scientificName: "Lavandula dentata",
	cultivar: "Royal Crown",
};

const catalog = new Map();
catalog.set(ballerina, {
	small: 20,
	medium: 15,
	large: 12,
});
catalog.set(prettyPolly, {
	small: 31,
	medium: 14,
	large: 24,
});
catalog.set(willowVale, {
	small: 3,
	medium: 5,
	large: 10,
});
catalog.set(hidcote, {
	small: 33,
	medium: 13,
	large: 18,
});
catalog.set(imperialGem, {
	small: 19,
	medium: 35,
	large: 28,
});
catalog.set(royalCrown, {
	small: 40,
	medium: 22,
	large: 9,
});

const sellPlants = (plant, size, quantity) => {
	if (!catalog.has(plant)) {
		return `Item not found`;
	}
	const name = `${plant.scientificName} '${plant.cultivar}'`;
	const pots = catalog.get(plant);
	if (pots[size] < quantity) {
		return `Not enough ${size} size pots for ${name}. Only ${pots[size]} left.`;
	}

	pots[size] -= quantity;
	return `Sold ${quantity} ${size} pots of ${name}.
	 Catalog successfully updated.`;
};
const removePlant = (remove) => {
	return catalog.delete(remove);
};
const displayCatalog = () => {
	let result = "";

	catalog.forEach((value, key) => {
		result += `${key.scientificName} '${key.cultivar}': ${value.small} S, ${value.medium} M, ${value.large} L\n`;
	});

	return result;
};

const displayPlantsSet = () => {
	
	const commonName = [
		"Spanish lavender",
		"English lavender",
		"French lavender",
	];
	const catalogSet = new Set(commonName);
	return catalogSet;
};


const plantsSet = displayPlantsSet();

 console.log(plantsSet);

console.log(sellPlants(ballerina, "small", 19));
console.log(removePlant("ballerina"));
console.log(displayCatalog());
