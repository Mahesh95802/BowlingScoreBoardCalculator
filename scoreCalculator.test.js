const { describe, it, expect } = require('@jest/globals');
const { scoreCalculator } = require('./scoreCalculator')

describe("Score Caculator", () => {
    it("should return correct output when given proper inputs", () => {
        expect(scoreCalculator([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toBe(30)
    })
    it("should return correct output when given proper inputs", () => {
        expect(scoreCalculator([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90)
    })
    it("should return correct output when given proper inputs", () => {
        expect(scoreCalculator([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90)
    })
    it("Should throw error when not given array as input", () => {
        expect(() => scoreCalculator("abc")).toThrow(Error)
    })
    it("Should throw error when given mixed array as input", () => {
        expect(() => scoreCalculator(["abcd", 10, 10, 6])).toThrow(TypeError)
    })
})