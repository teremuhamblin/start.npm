const { add } = require("@teremuhamblin/start.npm");

describe("add(a, b)", () => {
  test("additionne deux nombres positifs", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  test("fonctionne avec des nombres négatifs", () => {
    const result = add(-2, -3);
    expect(result).toBe(-5);
  });

  test("fonctionne avec zéro", () => {
    const result = add(0, 5);
    expect(result).toBe(5);
  });
});
