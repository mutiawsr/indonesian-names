const { loadCsv } = require("./utils/csvLoader");
const { getRandomElement } = require('./utils/random');

function fullFemale() {
  const firstNames = loadCsv("first-female.csv");
  const lastNames = loadCsv("last-female.csv");
  const first = getRandomElement(firstNames);
  const last = getRandomElement(lastNames);
  return `${first} ${last}`;
}

function fullMale() {
  const firstNames = loadCsv("first-male.csv");
  const lastNames = loadCsv("last-male.csv");
  const first = getRandomElement(firstNames);
  const last = getRandomElement(lastNames);
  return `${first} ${last}`;
}

function firstFemale() {
  const firstNames = loadCsv("first-female.csv");
  const first = getRandomElement(firstNames);
  return `${first}`;
}

function firstMale() {
  const firstNames = loadCsv("first-male.csv");
  const first = getRandomElement(firstNames);
  return `${first}`;
}

function lastFemale() {
  const lastNames = loadCsv("last-female.csv");
  const last = getRandomElement(lastNames);
  return `${last}`;
}

function lastMale() {
  const lastNames = loadCsv("last-male.csv");
  const last = getRandomElement(lastNames);
  return `${last}`;
}

module.exports = {
  fullFemale,
  fullMale,
  firstFemale,
  firstMale,
  lastFemale,
  lastMale,
};
