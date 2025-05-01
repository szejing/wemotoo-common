/**
 * Truncates a string to a maximum length
 * @param str The string to truncate
 * @param maxLength The maximum length of the string
 * @returns The truncated string
 */
export declare function truncate(str: string, maxLength: number): string;
/**
 * Truncates a string to a maximum length from the front
 * @param str The string to truncate
 * @param maxLength The maximum length of the string
 * @returns The truncated string
 */
export declare function truncateFront(str: string, maxLength: number): string;
/**
 * Checks if a string is empty or null
 * @param str The string to check
 * @returns True if the string is empty or null, false otherwise
 */
export declare function isEmptyOrNull(str: string): boolean;
/**
 * Extracts the value after a separator in a string
 * @param str The string to extract from (e.g., "M00001/00001")
 * @param separator The separator character (e.g., "/")
 * @returns The value after the separator, or the original string if separator not found
 */
export declare function extractAfterSeparator(str: string, separator: string): string;
/**
 * Extracts the value before a separator in a string
 * @param str The string to extract from (e.g., "M00001/00001")
 * @param separator The separator character (e.g., "/")
 * @returns The value before the separator, or the original string if separator not found
 */
export declare function extractBeforeSeparator(str: string, separator: string): string;
/**
 * Removes the merchant ID from a string
 * @param str The string to remove the merchant ID from
 * @returns The string without the merchant ID
 */
export declare function removeMerchantId(str: string): string;
