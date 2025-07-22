function handleGenerateMany(generatorFn, generateMany = 1) {
  if (generateMany === 1) {
    return generatorFn();
  }
  return Array.from({ length: generateMany }, () => generatorFn());
}

module.exports = {
  handleGenerateMany,
}