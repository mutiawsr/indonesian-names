### 🇮🇩 Indonesian Names

This is an Indonesian names generator.

| Function        | Description                                              | Example Output   |
| --------------- | -------------------------------------------------------- | ---------------- |
| `fullFemale()`  | Returns a full name with a female first and last name    | `"Dewi Cahyani"` |
| `fullMale()`    | Returns a full name with a male first and last name      | `"Agus Satrio"`  |
| `fullNeutral()` | Returns a full name with a neutral first and last name   | `"Eka Kusuma"`   |
| `firstFemale()` | Returns a female-associated female first name            | `"Indri"`        |
| `firstMale()`   | Returns a male-associated male first name                | `"Budi"`         |
| `firstNeutral()`| Returns a gender neutral first name                      | `"Dwi"`          |
| `lastFemale()`  | Returns a female-associated last name                    | `"Febriani"`     |
| `lastMale()`    | Returns a male-associated last name                      | `"Prasetyo"`     |
| `lastNeutral()` | Returns a gender neutral last name                       | `"Lubis"`        |

#### 🔧 Advanced Usage

For more control, use `fullName()`, `firstName()`, or `lastName()` to generate names with customizable parameters:

```js
// default parameters
fullName(gender = "neutral", cross = false, words = 2, generateMany = 1)
firstName(gender = "neutral", generateMany = 1)
lastName(gender = "neutral", generateMany = 1)
```

- `gender` (`"neutral"` | `"male"` | `"female"`): Specifies the gender style of the first name.
- `cross` (`true` | `false`): If `true`, combines a gendered first name with a **neutral** last name.
- `words` (`number`): Specifies number of words in the names
- `generateMany` (`number`): Specifies number of names generated

### Examples

```js
fullName("female", true, 3, 3)  // e.g., [ 'Desi Diah Mahendra', 'Monica Rahayu Rahardian', 'Syifa Lilis Priyanto' ]
fullName("male", false, 4, 2)   // e.g., [ 'Kartono Reza Bagus Marwan', 'Hendro Purwanto Fajar Arfan' ]
firstName("female", 3)          // e.g., [ 'Raisa', 'Kirana', 'Lina' ]
lastName("male", 2)             // e.g., [ 'Harun', 'Suryana' ]
```

> 🔍 Tip: `fullMale()`, `fullFemale()`, and `fullNeutral()` are convenient wrappers around `fullName()`, `firstName()`, and `lastName()`, but you can also use `generateMany` parameter for batch generation, e.g., `firstMale(3)` or `lastFemale(5)` to get an array of names.

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
- API support
- Export to JSON or CSV

#### ⚠️ Known Issues

- Duplicate name generation on generateMany() method