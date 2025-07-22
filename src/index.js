const { loadCsv } = require("./utils/csvLoader");
const { getRandomElement } = require('./utils/random');
const { handleGenerateMany } = require('./utils/generateMany');

function fullName(gender = "neutral", cross = false, words = 2, generateMany = 1) {
  let firstNames, lastNames;

  if (gender === "neutral") {
    firstNames = loadCsv("first-neutral.csv");
    lastNames = loadCsv("last-neutral.csv");
  } else if (gender === "female") {
    firstNames = loadCsv("first-female.csv");
    lastNames = cross ? loadCsv("last-neutral.csv") : loadCsv("last-female.csv");
  } else if (gender === "male") {
    firstNames = loadCsv("first-male.csv");
    lastNames = cross ? loadCsv("last-neutral.csv") : loadCsv("last-male.csv");
  } else {
    throw new Error("Invalid Parameter. Expected 'neutral', 'female', or 'male'");
  }

  const generator = () => {
    let parts = [];
    parts.push(getRandomElement(firstNames));
    while (parts.length < words - 1) {
      parts.push(getRandomElement(firstNames));
    }
    parts.push(getRandomElement(lastNames));
    return parts.join(" ");
  };

  return handleGenerateMany(generator, generateMany);
}

function firstName(gender = "neutral", generateMany = 1) {
  let firstNames;
  if (gender === "neutral") {
    firstNames = loadCsv("first-neutral.csv");
  } else if (gender === "female") {
    firstNames = loadCsv("first-female.csv");
  } else if (gender === "male") {
    firstNames = loadCsv("first-male.csv");
  } else {
    throw new Error("Invalid Parameter. Expected 'neutral', 'female', or 'male'");
  }
  const generator = () => getRandomElement(firstNames);
  return handleGenerateMany(generator, generateMany);
}

function lastName(gender = "neutral", generateMany = 1) {
  let lastNames;
  if (gender === "neutral") {
    lastNames = loadCsv("last-neutral.csv");
  } else if (gender === "female") {
    lastNames = loadCsv("last-female.csv");
  } else if (gender === "male") {
    lastNames = loadCsv("last-male.csv");
  } else {
    throw new Error("Invalid Parameter. Expected 'neutral', 'female', or 'male'");
  }
  const generator = () => getRandomElement(lastNames);
  return handleGenerateMany(generator, generateMany);
}

function fullFemale(generateMany = 1) {
  const firstNames = loadCsv("first-female.csv");
  const lastNames = loadCsv("last-female.csv");
  const generator = () => `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
  return handleGenerateMany(generator, generateMany);
}

function fullMale(generateMany = 1) {
  const firstNames = loadCsv("first-male.csv");
  const lastNames = loadCsv("last-male.csv");
  const generator = () => `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
  return handleGenerateMany(generator, generateMany);
}

function fullNeutral(generateMany = 1) {
  const firstNames = loadCsv("first-neutral.csv");
  const lastNames = loadCsv("last-neutral.csv");
  const generator = () => `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
  return handleGenerateMany(generator, generateMany);
}

function firstFemale(generateMany = 1) {
  const firstNames = loadCsv("first-female.csv");
  const generator = () => getRandomElement(firstNames);
  return handleGenerateMany(generator, generateMany);
}

function firstMale(generateMany = 1) {
  const firstNames = loadCsv("first-male.csv");
  const generator = () => getRandomElement(firstNames);
  return handleGenerateMany(generator, generateMany);
}

function firstNeutral(generateMany = 1) {
  const firstNames = loadCsv("first-neutral.csv");
  const generator = () => getRandomElement(firstNames);
  return handleGenerateMany(generator, generateMany);
}

function lastFemale(generateMany = 1) {
  const lastNames = loadCsv("last-female.csv");
  const generator = () => getRandomElement(lastNames);
  return handleGenerateMany(generator, generateMany);
}

function lastMale(generateMany = 1) {
  const lastNames = loadCsv("last-male.csv");
  const generator = () => getRandomElement(lastNames);
  return handleGenerateMany(generator, generateMany);
}

function lastNeutral(generateMany = 1) {
  const lastNames = loadCsv("last-neutral.csv");
  const generator = () => getRandomElement(lastNames);
  return handleGenerateMany(generator, generateMany);
}

module.exports = {
  fullName,
  firstName,
  lastName,
  fullFemale,
  fullMale,
  fullNeutral,
  firstFemale,
  firstMale,
  firstNeutral,
  lastFemale,
  lastMale,
  lastNeutral,
};
