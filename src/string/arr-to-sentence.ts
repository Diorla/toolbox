/**
 * Basically turns an array to human readable string
 * @param arr the list of things you want to convert to a sentence
 * @returns string
 * @example arrToSentence(["hello", "world"]) // hello and world
 */
export default function arrToSentence(arr: (string | number)[]) {
  if (arr.length > 2) {
    const lastTwo = arr.slice(-2);
    const first = arr.slice(0, -2);
    return `${first.join(", ")}` + `, ${lastTwo.join(" and ")}`;
  }
  if (arr.length === 2) return `${arr[0]} and ${arr[1]}`;
  return String(arr[0] || "");
}
