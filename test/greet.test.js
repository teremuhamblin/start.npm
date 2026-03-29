const { greet } = require("@teremuhamblin/start.npm");

describe("greet(name)", () => {
  test("retourne un message personnalisé avec le nom fourni", () => {
    const result = greet("Teremu");
    expect(result).toBe("Hello, Teremu!");
  });

  test("gère un nom vide ou undefined", () => {
    const result = greet();
    expect(result).toBe("Hello, undefined!");
  });
});
