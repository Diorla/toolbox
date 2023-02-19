/**
 * Used to remove a matching item from an array.
 * It uses basic equality, hence would not work with array of objects
 * @param list an array of primitives
 * @param item a primitive
 * @param recursive - remove every occurrence or just the first one. default - false
 * @returns It would return an array excluding the current content
 */
export default function removeItem<type>(
  list: type[],
  item: type,
  recursive?: boolean
): type[] {
  if (!list.includes(item)) return list;
  const idx = list.indexOf(item);
  const newList = [...list.slice(0, idx), ...list.slice(idx + 1)];
  if (recursive && newList.includes(item)) {
    return removeItem(newList, item, true);
  }
  return newList;
}
