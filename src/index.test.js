import { capitalize, reverseString, Calculator, caesarCipher } from "./index";

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

test("can calculate divide operations", () => {
  expect(calculate.divide()).toBe(1);
});
