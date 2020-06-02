import { allSettled } from './allSettled';

it('returns a promise which has an array of resolved promise values', () => {
    let input = [
        Promise.resolve(33),
        new Promise(resolve => setTimeout(() => resolve(66), 0)),
        99,
        Promise.reject(new Error('an error'))
      ];
    let output = [
        {status: "fulfilled", value: 33},
        {status: "fulfilled", value: 66},
        {status: "fulfilled", value: 99},
        {status: "rejected",  reason: "Error: an error"}
      ];
    expect(allSettled(input)).resolves.toEqual(output);
});



it('should return expected data', () => {
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const promises = [promise1, promise2];
    const results = [{status: "fulfilled", value: 3}, {status: "rejected", value: "foo"}]
    expect(allSettled(promises)).resolves.toEqual(results);
});