const fs = require('fs');
const path = require('path');

function loadCsv(filepath) {
  const absolutePath = path.resolve(__dirname, '..', 'assets', filepath);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  return data.split('\n').map(name => name.trim()).filter(Boolean);
}

module.exports = {
  loadCsv,
};