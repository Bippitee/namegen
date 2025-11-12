# @foxandbear/namegen

Generate whimsical names from predefined lists of words.

## Installation

You can install this package using npm:

```sh
npm install @foxandbear/namegen
```

## Usage

Here's how you can use the `@foxandbear/namegen` package to generate names:

### Basic Usage

```javascript
const generateName = require("@foxandbear/namegen");

// Generate a name using default settings
const name = generateName();
console.log(name); // Example output: "QuickFox"
```

### Custom Delimiter

You can specify a custom delimiter to use between words:

```javascript
const generateName = require("@foxandbear/namegen");

// Generate a name with a hyphen as the delimiter
const name = generateName({ delimiter: "-" });
console.log(name); // Example output: "Quick-Fox"
```

### Using Woodland Creatures

You can generate names using woodland creatures:

```javascript
const generateName = require("@foxandbear/namegen");

// Generate a name using woodland creatures
const name = generateName({ woodland: true });
console.log(name); // Example output: "QuickSquirrel"
```

### Custom Word Lists

You can pass your own arrays of words to generate names:

```javascript
const generateName = require("@foxandbear/namegen");

const adjectives = ["happy", "sad", "angry"];
const animals = ["lion", "tiger", "bear"];

// Generate a name using custom word lists
const name = generateName({ words1: adjectives, words2: animals });
console.log(name); // Example output: "HappyLion"
```

### Using a Seed for Deterministic Generation

You can provide a seed string to generate the same name consistently:

```javascript
const generateName = require("@foxandbear/namegen");

// Generate a name using a seed (will always produce the same result)
const name1 = generateName({ seed: "my-project-name" });
const name2 = generateName({ seed: "my-project-name" });
console.log(name1 === name2); // true - both names will be identical

// Different seeds produce different names
const name3 = generateName({ seed: "different-seed" });
console.log(name3); // Different from name1 and name2
```

## API

`generateName({delimiter = "", woodland = false, words1 = adjectives, words2 = woodland ? woodlandCreatures : nouns, seed})`

Generates a name by combining words from two arrays.

#### Parameters

- `delimiter` (string, optional): The delimiter to use between words. Defaults to an empty string.
- `woodland` (boolean, optional): Whether to use woodland creatures as the second array of words. Defaults to false.
- `words1` (string[], optional): The first array of words. Defaults to adjectives.
- `words2` (string[], optional): The second array of words. Defaults to nouns or woodland creatures based on the woodland flag.
- `seed` (string, optional): Optional seed for deterministic random generation. If provided, the same seed will always produce the same name.

#### Returns

- `string`: The generated name.

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

Ben Carragher (Fox and Bear)
