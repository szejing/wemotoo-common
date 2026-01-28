/**
 * Encodes a string to base64
 * @param str The string to encode
 * @returns The base64 encoded string
 */
export function encodebase64(str) {
    return Buffer.from(str, 'utf-8').toString('base64');
}
/**
 * Decodes a base64 encoded string
 * @param base64Str The base64 encoded string to decode
 * @returns The decoded string
 */
export function decodebase64(base64Str) {
    return Buffer.from(base64Str, 'base64').toString('utf-8');
}
