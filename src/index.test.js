import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./index";

test("capitalize first letter", () => {
  expect(capitalize("odin")).toBe("Odin");
});

test("capitalize first letter", () => {
  expect(capitalize("odin project")).toBe("Odin Project");
});

test("reverses string correctly", () => {
  expect(reverseString("odin")).toBe("nido");
});

test("reverses string correctly with space", () => {
  expect(reverseString("odin project")).toBe("tcejorp nido");
});

test("can calculate add operations", () => {
  const calculate = new Calculator(3, 3);
  expect(calculate.add()).toBe(6);
});

test("can calculate subtract operations", () => {
  const calculate = new Calculator(3, 3);
  expect(calculate.subtract()).toBe(0);
});

test("can calculate multiply operations", () => {
  const calculate = new Calculator(3, 3);
  expect(calculate.multiply()).toBe(9);
});

test("can calculate divide operations", () => {
  const calculate = new Calculator(3, 3);
  expect(calculate.divide()).toBe(1);
});

test("can shift words", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("can shift words while maintaining cases", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("can shift words but exceptionally avoids punctuations", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray can output an object with the correct average, min, max, and length value", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.average).toBe(4);
  expect(object.min).toBe(1);
  expect(object.max).toBe(8);
  expect(object.length).toBe(6);
});
