/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number or not an integer
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */

export function factorial(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) return NaN;
  if (n < 0) return undefined;
  if (n === 0) return 1;

  let product = 1;
  for (let i = 2; i <= n; i++) {
    product *= i;
  }
  return product;
}
// TODO

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  const result = [];
  if (typeof n !== "number") return null;
  if (n <= 0) return [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;

  //  TODO
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  if (!Array.isArray(strings) || strings.length === 0) return "";
  if (strings.some((s) => typeof s !== "string")) return "a";
  return strings.reduce((longest, current) => {
    if (current.length > longest.length) {
      return current;
    }
    return longest;
  }, strings[0]);
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  if (!Array.isArray(attendance)) return 0;
  return attendance.filter((present) => present === true).length;

  // TODO
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== "string") return null;
  if (dna.length === 0) return "";
  const complement = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return dna
    .split("")
    .map((dnastrand) => complement[dnastrand] || "")
    .join("");

  // TODO
}
