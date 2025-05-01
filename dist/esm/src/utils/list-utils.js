/**
 * Replaces a single item in the list based on ID and returns a new list
 * @param currentList Current list of items
 * @param item Item to replace (must have an id property)
 * @returns New list with the replaced item
 */
export function replaceItem(currentList, item) {
    if (currentList.length === 0) {
        return [item];
    }
    return currentList.map((currentItem) => (currentItem.id === item.id ? item : currentItem));
}
