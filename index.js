const adjectives = require("./adjectives");
const woodlandCreatures = require("./woodlandCreatures");
const nouns = require("./nouns");
/**
 * Generates a name by combining words from two arrays.
 *
 * @param {Object} [options] - The options for generating the name.
 * @param {string} [options.delimiter=""] - The delimiter to use between words.
 * @param {boolean} [options.woodland=false] - Whether to use woodland creatures as the second array of words.
 * @param {string[]} [options.words1=adjectives] - The first array of words. Defaults to adjectives.
 * @param {string[]} [options.words2=options.woodland ? woodlandCreatures : nouns] - The second array of words. Defaults to nouns or woodland creatures based on the woodland flag.
 * @param {string} [options.seed] - Optional seed for deterministic random generation. If provided, the same seed will always produce the same name.
 * @returns {string} - The generated name.
 *
 * @example
 * // Default usage with adjectives and nouns
 * generateName();
 *
 * @example
 * // Using a custom delimiter
 * generateName({ delimiter: "-" });
 *
 * @example
 * // Using woodland creatures
 * generateName({ woodland: true });
 *
 * @example
 * // Using a seed for deterministic generation
 * generateName({ seed: "my-seed-string" });
 */
function generateName({
  delimiter = "",
  woodland = false,
  words1 = adjectives,
  words2 = woodland ? woodlandCreatures : nouns,
  seed,
} = {}) {
  if (typeof delimiter !== "string") {
    delimiter = "";
  }

  // Create a seeded random function if seed is provided
  let randomFunc = Math.random;
  if (seed !== undefined) {
    randomFunc = createSeededRandom(seed);
  }
  const capitalizeWords = (words) => {
    return words
      .map((word) => {
        if (word.includes("-")) {
          // If the word contains a hyphen, capitalize each part separately
          return word
            .split("-")
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join("-");
        } else {
          // Otherwise, capitalize the whole word
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      })
      .join(delimiter);
  };

  const capitalizeHyphenatedString = (str) => {
    const words = str.split(/\s+/); // Split on spaces
    return capitalizeWords(words);
  };

  const capitalizedName1 = capitalizeHyphenatedString(
    words1[getRandomInt(0, words1.length, randomFunc)]
  );
  const capitalizedName2 = capitalizeHyphenatedString(
    words2[getRandomInt(0, words2.length, randomFunc)]
  );

  return capitalizedName1 + delimiter + capitalizedName2;
}

module.exports = generateName;

/**
 * Returns a random integer between min (inclusive) and max (exclusive).
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @param {function} [randomFunc=Math.random] - The random function to use.
 * @returns {number} - A random integer.
 */
function getRandomInt(min, max, randomFunc = Math.random) {
  return Math.floor(randomFunc() * (max - min)) + min;
}

/**
 * Creates a seeded random number generator using a simple LCG algorithm.
 *
 * @param {string} seed - The seed string.
 * @returns {function} - A function that returns random numbers between 0 and 1.
 */
function createSeededRandom(seed) {
  // Convert string to numeric seed using a simple hash function
  let numericSeed = 0;
  if (typeof seed === "string") {
    for (let i = 0; i < seed.length; i++) {
      numericSeed =
        ((numericSeed << 5) - numericSeed + seed.charCodeAt(i)) & 0xffffffff;
    }
  } else {
    numericSeed = seed;
  }

  let state = Math.abs(numericSeed) || 1; // Ensure we have a positive non-zero seed
  return function () {
    // Linear Congruential Generator (LCG) algorithm
    state = (state * 1664525 + 1013904223) % Math.pow(2, 32);
    return state / Math.pow(2, 32);
  };
}
