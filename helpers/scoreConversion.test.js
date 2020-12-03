const scoreConversion = require("./scoreConversion");
test("Mengkonversi nilai angka menjadi alfabet", () => {
    expect(scoreConversion(75)).toBe("A");
});

test("Mengkonversi nilai angka menjadi alfabet", () => {
    expect(scoreConversion(55)).toBe("C");
});