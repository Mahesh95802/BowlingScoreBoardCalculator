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
        expect(scoreCalculator([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(16)
    })
    it("should return correct output when given proper inputs", () => {
        expect(scoreCalculator([10, 9, 1, 10, 4, 5, 3, 6, 4, 4, 1, 3, 10, 1, 9, 5, 5, 2])).toBe(136)
    })
    it("should return correct output when given proper inputs", () => {
        expect(scoreCalculator([10, 5, 5, 9, 0])).toBe(48)
    })
    it("should return correct output when given proper inputs", () => {
        expect(scoreCalculator([10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(81)
    })
    it("should return correct output when given proper inputs", () => {
        expect(scoreCalculator([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10])).toBe(20)
    })
    it("Should throw error when not given array as input", () => {
        expect(() => scoreCalculator("abc")).toThrow(Error)
    })
    it("Should throw error when given mixed array as input", () => {
        expect(() => scoreCalculator(["abcd", 10, 10, 6])).toThrow(TypeError)
    })
})