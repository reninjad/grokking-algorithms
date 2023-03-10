const list = [1, 3, 5, 7, 9];

function binarySearch(list, item) {
	let low = 0;
	let high = list.length - 1;
	let mid = 0
	let guess = 0
	while (low <= high) {
		mid = Math.floor((low + high) / 2);
		guess = list[mid];
		if (guess === item) {
			return mid;
		}
		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null;

}

console.log(binarySearch(list, 3));
console.log(binarySearch(list, -1));
console.log(binarySearch(list, 7));