import { adjectives } from "./adjectives";
import { woodlandCreatures } from "./woodlandCreatures";
import { nouns } from "./nouns";

/**
 * Generates a name by combining words from two arrays.
 *
 * @param {string} [delimiter=""] - The delimiter to use between words.
 * @param {string[]} [words1=adjectives] - The first array of words. Defaults to adjectives.
 * @param {string[]} [words2=woodland ? woodlandCreatures : nouns] - The second array of words. Defaults to nouns or woodland creatures based on the woodland flag.
 * @param {boolean} [woodland=false] - Whether to use woodland creatures as the second array of words.
 * @returns {string} - The generated name.
 *
 * @example
 * // Default usage with adjectives and nouns
 * generateName();
 *
 * @example
 * // Using a custom delimiter
 * generateName("-", false, ["quick", "lazy"], ["fox", "dog"]);
 *
 * @example
 * // Using woodland creatures
 * generateName("", true);
 */
function generateName(
  delimiter = "",
  words1 = adjectives,
  words2 = woodland ? woodlandCreatures : nouns,
  woodland = false
) {
  if (typeof delimiter !== "string") {
    delimiter = "";
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
    words1[getRandomInt(0, words1.length)]
  );
  const capitalizedName2 = capitalizeHyphenatedString(
    words2[getRandomInt(0, words2.length)]
  );

  return capitalizedName1 + delimiter + capitalizedName2;
}

/**
 * Returns a random integer between min (inclusive) and max (exclusive).
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - A random integer.
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = generateName;
