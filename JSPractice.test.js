const {sum, doubleInt, collectionsIntArray, doWeMatch} = require('./JSPractice');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test("Doubles the provided number", () => {
    expect(doubleInt(2)).toBe(4);
});
test("Doubles each num in the array", () => {
    expect(collectionsIntArray([1,2,3])).toEqual([2,4,6])
})
test("Checks to see if arrays are matching", () => {
    expect(doWeMatch([1,2,3], [1,2,3])).toBe(true)
})