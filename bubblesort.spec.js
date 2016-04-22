describe('Bubble Sort', function () {
    it("handles an empty array", function () {
        expect(bubbleSort([])).toEqual([]);
    });

    it("handles an array with one element", function () {
        expect(bubbleSort([10])).toEqual([10]);
    });

    it("handles an array with multiple elements", function () {
        expect(bubbleSort([3, 1, 2, 5, 4, 2])).toEqual([1, 2, 2, 3, 4, 5]);
    });

    it("does the right number of swaps and comparisons", function () {
        spyOn(window, "swap").and.callThrough();
        spyOn(window, "compare").and.callThrough();
        bubbleSort([3, 1, 2, 5, 4, 2]);
        expect(swap.calls.count()).toEqual(6);
        expect(compare.calls.count()).toEqual(14);
    });

});

describe('Swap', function () {
    it("handles an array with 2 elements", function () {
        var arr = [3, 2];
        swap(arr, 0);
        expect(arr).toEqual([2, 3]);
    });
    it("handles an array with multiple elements", function () {
        var arr = [3, 2, 4, 1, 8];
        swap(arr, 2);
        expect(arr).toEqual([3, 2, 1, 4, 8]);
    });
    it("throws an error if you give it an index higher than the penultimate element", function () {
        expect(function () {
            swap([1, 2, 3], 2);
        }).toThrow();
    });
});

describe('Compare', function () {
    it("returns true if we should swap", function () {
        expect(compare(3, 2)).toEqual(true);
    });
    it("returns false if we should not swap", function () {
        expect(compare(2, 3)).toEqual(false);
        expect(compare(2, 2)).toEqual(false);
    });
});
