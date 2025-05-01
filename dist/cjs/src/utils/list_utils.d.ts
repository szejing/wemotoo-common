/**
 * Replaces a single item in the list based on ID and returns a new list
 * @param currentList Current list of items
 * @param item Item to replace (must have an id property)
 * @returns New list with the replaced item
 */
export declare function replaceItem<T extends {
    id: string | number;
}>(currentList: T[], item: T): T[];
//# sourceMappingURL=list_utils.d.ts.map