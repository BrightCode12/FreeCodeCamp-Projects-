function translatePigLatin(str) {
	const vowelRegex = /^[aeiou]/i;
	const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;
	let result = "";
	if (vowelRegex.test(str)) {
		return (result = str + "way");
	}
	if (consonantRegex.test(str)) {
		return (result = str.replace(
			/^([bcdfghjklmnpqrstvwxyz]+)(.*)$/i,
			"$2$1ay",
		));
	}
}

console.log(translatePigLatin("scholar"));
