function bubbleSort(array, i) {
	i = i || 1; // this is so that we can keep track of the number of "last elements" we no longer need to compare
	
	if (array.length < 1) return array;

	var compareNum = 0, swapNum = 0;
	
	for (var j = 0; j < array.length-i; j++) {
		compareNum++;
		if (compare(array[j], array[j+1])) {
			swapNum++;
			swap(array, j);
		}
	}
	
	if (compareNum === array.length-i && swapNum === 0) {
		return array;
	} else {
		i++;
		return bubbleSort(array, i);
	}
}

function swap(arr, i) {
	i = i || 0;
	var temp = arr[i];
	arr[i] = arr[i+1];
	arr[i+1] = temp;
}

function compare(a, b) {
	return a > b;
}