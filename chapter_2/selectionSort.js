function findSmallest(array) {
	let smallest = array[0];
	let smallestIndex = 0;
	for (const index in array) {
		if (array[index] < smallest) {
			smallest = array[index];
			smallestIndex = index;
		}
	}
	return smallestIndex;
}

function selectionSort(array) {
	let newArray = [];
	let smallest = 0;
	let forDeleting = 0;
	for (const index in array) {
		smallest = findSmallest(array);
		newArray.push(array[smallest]);
		forDeleting = array[smallest];
		array = array.filter(item => item != forDeleting);
	}
	return newArray;
}

console.log(selectionSort([5, 3, 6, 2, 10]));