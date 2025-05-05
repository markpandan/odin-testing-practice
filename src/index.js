export const capitalize = (string) => {
  const words = string.split(" ");

  let newString = "";
  for (const word of words)
    newString += `${word[0].toUpperCase() + word.substring(1)} `;

  return newString.trimEnd();
};

export const reverseString = (string) => {
  return string.split("").reverse().join("");
};

export function Calculator(a, b) {
  this.add = () => {
    return a + b;
  };
  this.subtract = () => {
    return a - b;
  };
  this.divide = () => {
    return a / b;
  };
  this.multiply = () => {
    return a * b;
  };
}

export const caesarCipher = (string, shiftFactor) => {};
