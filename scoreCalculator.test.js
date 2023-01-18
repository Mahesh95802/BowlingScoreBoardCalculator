const { scoreCalculator } = require('./scoreCalculator')

describe("Score Caculator", () => {
    it("should return correct output when given proper inputs", () => {
        expect(scoreCalculator([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toBe(30)
    })
    it("should return correct output when given proper inputs", () => {
        expect(scoreCalculator([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90)
    })
})