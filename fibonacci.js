const fibsRecurse = (n) => {
	return n === 1
		? [0]
		: n === 2
		? [0, 1]
		: [...fibsRecurse(n - 1), fibsRecurse(n - 1)[n - 2] + fibsRecurse(n - 1)[n - 3]];
};


console.log(fibsRecurse(1)); // returns [0]
console.log(fibsRecurse(2)); // returns [0, 1]
console.log(fibsRecurse(3)); // returns [0, 1, 1]
console.log(fibsRecurse(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]