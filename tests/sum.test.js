const {sum, sub} = require("../src/sum");

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
