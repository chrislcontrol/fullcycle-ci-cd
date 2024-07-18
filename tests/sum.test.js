const {sum, sub, times, div} = require("../src/sum");

test("Test if 1 + 1 is 2", () => {
    expect(
        sum(1, 1)
    ).toBe(2)
})


test("Test if 1 - 1 is 0", () => {
    expect(
        sub(1, 1)
    ).toBe(0)
})


test("Test if 2 * 5 is 10", () => {
    expect(
        times(2, 5)
    ).toBe(10)
})


test("Test if 10 / 2 is 5", () => {
    expect(
        div(10, 2)
    ).toBe(5)
})


test("Test if div by 0 throws error", () => {
    expect(
        () => {div(1, 0)}
    ).toThrow("Division by zero error")
})
