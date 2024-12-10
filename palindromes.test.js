const palindromes = require("./palindromes");

describe("palindromes()", () => {
  it("corrrectly identifies 1 word palindromes", () => {
    expect(palindromes("mom")).toEqual(["mom"]);
  });
});
