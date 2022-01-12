const {sum, doubleInt, collectionsIntArray, doWeMatch, 
    lowestAndHighest, numberOfLegs, sumInt, 
    productMulti, userChoiceAddOrMultiply, convertToSeconds, rps} = require('./JSPractice');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test("Doubles each num in the array", () => {
    expect(collectionsIntArray([1,2,3])).toEqual([2,4,6])
})

test("Checks to see if arrays are matching", () => {
    expect(doWeMatch([1,2,3], [1,2,3])).toBe(true)
})

test("conver hours and minutes to seconds", () => {
    const actual = convertToSeconds(1,1)
    const expected = 3660
    expect(actual).toEqual(expected)
})

describe("TestdoubleInt", () => {
    test("Doubles the provided number", () => {
        const actual = doubleInt(2)
        const expected = 4
        expect(actual).toBe(expected);
    });
    test("handles negative input", () => {
        const actual = doubleInt(2)
        const expected = 4
        expect(actual).toBe(expected);
    });
    test("handles when input number is zero", () => {
        const actual = doubleInt(0)
        const expected = 0
        expect(actual).toBe(expected);
    });
})

describe("TestlowestAndHighest", () => {
    test("handles adding lowest and highest values", () => {
        const actual = lowestAndHighest([1,4,5], "add")
        const expected = [1,5,6]
        expect(actual).toEqual(expected)
    });
    test("handles multiplying lowest and highest values", () => {
        const actual = lowestAndHighest([1,4,5], "multiply")
        const expected = [1,5,5]
        expect(actual).toEqual(expected)
    });
    test("when array is empty", () => {
        const actual = lowestAndHighest([], "add")
        const expected = []
        expect(actual).toEqual(expected)
    });
})

describe("TestNumberOfLegs", () => {
    test("adds all the legs up", () => {
    const actual = numberOfLegs(1,1,1)
    const expected = 14
    expect(actual).toEqual(expected)
    })
})

describe("TestSumInt", () => {
    test("adds all numbers in array and returns sum", () => {
        const actual = sumInt([1,2])
        const expected = 3
        expect(actual).toEqual(expected)
    })
    test("handles adding negative numbers", () => {
        const actual = sumInt([1,2,-4])
        const expected = -1
        expect(actual).toEqual(expected)
    })
})

describe("TestProductMulti", () => {
    test("multiply all numbers in array and returns the product", () => {
        const actual = productMulti([1,2])
        const expected = 2
        expect(actual).toEqual(expected)
    })
    test("handles multiplying negative numbers", () => {
        const actual = productMulti([1,-4])
        const expected = -4
        expect(actual).toEqual(expected)
    })
})

describe("TestUserChoiceAddOrMultiply", () => {
    test("when choice is true return sum", () => {
        const actual = userChoiceAddOrMultiply([1,2], true)
        const expected = 3
        expect(actual).toEqual(expected)
    })
    test("when choice is true return sum", () => {
        const actual = userChoiceAddOrMultiply([1,2], false)
        const expected = 2
        expect(actual).toEqual(expected)
    })
})
describe("rock paper scissors", () =>{
    test("P1 Wins", () => {
        const actual1 = rps("scissors", "paper")
        const actual2 = rps("paper", "rock")
        const actual3 = rps("rock", "scissors")
        const expected = "Player 1 won!"
        expect(actual1).toEqual(expected)
        expect(actual2).toEqual(expected)
        expect(actual3).toEqual(expected)
    })
    test("P2 Wins", () => {
        const actual1 = rps("paper", "scissors")
        const actual2 = rps("rock", "paper")
        const actual3 = rps("scissors", "rock")
        const expected = "Player 2 won!"
        expect(actual1).toEqual(expected)
        expect(actual2).toEqual(expected)
        expect(actual3).toEqual(expected)
    })
    test("Draw", () => {
        const actual1 = rps("scissors", "scissors")
        const actual2 = rps("paper", "paper")
        const actual3 = rps("rock", "rock")
        const expected = "Draw!"
        expect(actual1).toEqual(expected)
        expect(actual2).toEqual(expected)
        expect(actual3).toEqual(expected)
    })
})

