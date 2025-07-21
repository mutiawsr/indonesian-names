### 🇮🇩 Indonesian Names

This is an Indonesian names generator.

| Function        | Description                                           | Example Output   |
| --------------- | ----------------------------------------------------- | ---------------- |
| `fullFemale()`  | Returns a full name with a female first and last name | `"Dewi Cahyani"` |
| `fullMale()`    | Returns a full name with a male first and last name   | `"Agus Satrio"` |
| `firstFemale()` | Returns a random female first name                    | `"Indri"`         |
| `firstMale()`   | Returns a random male first name                      | `"Budi"`         |
| `lastFemale()`  | Returns a female-associated last name                 | `"Febriani"`      |
| `lastMale()`    | Returns a male-associated last name                   | `"Prasetyo"`       |

#### 📦 Installation via NPM

```bash
npm i indonesian-names
```

#### 🛠 Usage

```js
const name = require('indonesian-names');

console.log(name.fullMale());     // e.g., "Agus Satrio"
console.log(name.firstFemale());  // e.g., "Indri"
```

#### 🔮 Upcoming Features

- Broader range of Indonesian names
- Additional formats and region-based names
- Batch name generation (e.g., `generateMany(10)`)
- API support
- Export to JSON or CSV