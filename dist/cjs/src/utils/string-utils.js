"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = truncate;
exports.truncateFront = truncateFront;
exports.isEmptyOrNull = isEmptyOrNull;
exports.extractAfterSeparator = extractAfterSeparator;
exports.extractBeforeSeparator = extractBeforeSeparator;
exports.removeMerchantId = removeMerchantId;
/**
 * Truncates a string to a maximum length
 * @param str The string to truncate
 * @param maxLength The maximum length of the string
 * @returns The truncated string
 */
function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength);
}
/**
 * Truncates a string to a maximum length from the front
 * @param str The string to truncate
 * @param maxLength The maximum length of the string
 * @returns The truncated string
 */
function truncateFront(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(-maxLength);
}
/**
 * Checks if a string is empty or null
 * @param str The string to check
 * @returns True if the string is empty or null, false otherwise
 */
function isEmptyOrNull(str) {
    return str === null || str === undefined || str === '';
}
/**
 * Extracts the value after a separator in a string
 * @param str The string to extract from (e.g., "M00001/00001")
 * @param separator The separator character (e.g., "/")
 * @returns The value after the separator, or the original string if separator not found
 */
function extractAfterSeparator(str, separator) {
    const parts = str.split(separator);
    return parts.length > 1 ? parts[parts.length - 1] : str;
}
/**
 * Extracts the value before a separator in a string
 * @param str The string to extract from (e.g., "M00001/00001")
 * @param separator The separator character (e.g., "/")
 * @returns The value before the separator, or the original string if separator not found
 */
function extractBeforeSeparator(str, separator) {
    const parts = str.split(separator);
    return parts.length > 0 ? parts[0] : str;
}
/**
 * Removes the merchant ID from a string
 * @param str The string to remove the merchant ID from
 * @returns The string without the merchant ID
 */
function removeMerchantId(str) {
    return str.replace(/^M\d{5}\//, '');
}
