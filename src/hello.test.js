const hello = require("./hello")


test("print hello and provided word.", () => {
    expect(
        hello("world")
    ).toBe("Hello world")
});