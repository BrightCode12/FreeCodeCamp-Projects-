function addTogether(x, y) {
	if (!Number.isFinite(x)) {
		return undefined;
	}
	if (arguments.length === 1) {
		return function (z) {
			return Number.isFinite(z) ? x + z : undefined;
		};
	}
	if (!Number.isFinite(y)) {
		return undefined;
	}
	return x + y;
}

console.log(addTogether(5)(7));
