/**
 * Used to remove an item from an array using the index of the target item
 * @param list an array
 * @param index the target index, it should be a positive number, otherwise it will return the entire array
 * @returns It would return an array excluding the current content
 */
export default function removeIndex<type>(list: type[], index: number): type[] {
  if (index < 0) return list;
  return [...list.slice(0, index), ...list.slice(index + 1)];
}
