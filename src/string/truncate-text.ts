/**
 * It should return a string that has the maximum length indicated
 * @param text the string that will be truncated, depending on the size
 * @param length the maximum length, default is 10
 * @returns string
 */
export default function truncateText(text: string, length = 10) {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}
