// Write your own test cases.
import { myForEach, myMap, myFilter, myReduce } from "./arrayUtils";

describe("myForEach", () => {
    it("should execute the condition in the callback function on each element of the passed iterator", () => {
        let arr = [];
        let fn = (inArr) => {
            myForEach(inArr, (elem) => arr.push(elem + 3));
            return arr;
        }
        expect(fn([1, 1, 1])).toStrictEqual([4, 4, 4]);

    });
    it("should throw when args are improper", () => {
        expect(() => myForEach('a','b','c','d')).toThrow();
        expect(() => myForEach()).toThrow();
    });
})

describe("myMap", () => {
    it("should map the array with the given condition in the call back function", () => {
        expect(myMap([0, 1, 2, 3, 4, 5, 6],
            (elem, index, array) => elem > 3))
            .toStrictEqual([false, false, false, false, true, true, true]);
        expect(myMap([0, 1, 2, 3, 4, 5, 6],
            (elem, index, array) => elem < 3))
            .toStrictEqual([true, true, true, false, false, false, false]);
        expect(myMap(new Set([1,2,3,4]),
            (elem, index, array) => elem < 3))
            .toStrictEqual([true, true, false, false]);
        expect(myMap(new Map([['foo', 3], ['bar', 'nuff'], ['baz', undefined]]),
            (elem, index, array) => elem))
            .toStrictEqual([["foo", 3], ["bar", "nuff"], ["baz", undefined]]);

    });
    it("should throw when args are improper", () => {
        expect(() => myMap('a','b','c','d')).toThrow();
        expect(() => myMap()).toThrow();
    });
})

describe("myFilter", () => {
    it("should filter the array according to the given condition in the call back function", () => {
        expect(myFilter([0, 1, 2, 3, 4, 5, 6],
            (elem, index, array) => elem > 3))
            .toStrictEqual([4, 5, 6]);
        expect(myFilter([0, 1, 2, 3, 4, 5, 6],
            (elem, index, array) => elem < 3))
            .toStrictEqual([0, 1, 2]);
        expect(myFilter(new Set([1,2,3,4]),
            (elem, index, array) => elem < 3))
            .toStrictEqual([1, 2]);
    });
    it("should throw when args are improper", () => {
        expect(() => myFilter('a','b','c','d')).toThrow();
        expect(() => myFilter()).toThrow();
    });
})

describe("myReduce", () => {
    it("should reduce the array to a single value", () => {
        expect(myReduce([0, 1, 2, 3, 4, 5, 6],
            (accumulator, currentValue, currentIndex, array) => accumulator + currentValue,
            10))
            .toBe(31);
        expect(myReduce([0, 1, 2, 3, 4, 5, 6],
            (accumulator, currentValue, currentIndex, array) => accumulator + currentValue))
            .toBe(21);
        expect(myReduce(new Set([1,2,3,4]),
            (accumulator, currentValue, currentIndex, array) => accumulator + currentValue))
            .toBe(10);
        expect(myReduce(new Map([['foo', 3], ['bar', {}], ['baz', undefined]]),
            (accumulator, currentValue, currentIndex, array) => accumulator + currentValue))
            .toBe("foo,3bar,[object Object]baz,");

    });
    it("should throw when args are improper", () => {
        expect(() => myReduce('a','b','c','d')).toThrow();
        expect(() => myReduce()).toThrow();
    });
})