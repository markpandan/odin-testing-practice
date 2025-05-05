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

export const caesarCipher = (string, shiftFactor) => {
  let newString = "";
  for (const letter of string) {
    let code = letter.charCodeAt();
    if ((code >= 97 && code <= 122) || (code >= 65 && code <= 90)) {
      code += shiftFactor;

      if (letter === letter.toUpperCase())
        newString += String.fromCharCode(code <= 90 ? code : code - 90 + 64);

      if (letter === letter.toLowerCase())
        newString += String.fromCharCode(code <= 122 ? code : code - 122 + 96);
    } else newString += letter;
  }

  return newString;
};

export const analyzeArray = (array) => {
  const object = {};

  object["average"] =
    array.reduce((sum, current) => sum + current, 0) / array.length;
  object["min"] = Math.min(...array);
  object["max"] = Math.max(...array);
  object["length"] = array.length;

  return object;
};
