const { hello } = require("@teremuhamblin/start.npm");

describe("hello()", () => {
  test("retourne 'Hello, World!'", () => {
    const result = hello();
    expect(result).toBe("Hello, World!");
  });
});
