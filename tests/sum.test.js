const sum = require("../src/sum");

test("Test if 1 + 1 is 2", () => {
    expect(
        sum(1, 1)
    ).toBe(2)
})
