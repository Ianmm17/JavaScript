const {sum, doubleInt, collectionsIntArray, doWeMatch, lowestAndHighest} = require('./JSPractice');

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
test("handles adding lowest and highest values", () => {
    let numArray = [1,4,5]
    const choice = "add"
    expect(lowestAndHighest(numArray, choice)).toEqual([1,5,6])
})