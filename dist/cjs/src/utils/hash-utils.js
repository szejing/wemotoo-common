"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodebase64 = encodebase64;
exports.decodebase64 = decodebase64;
/**
 * Encodes a string to base64
 * @param str The string to encode
 * @returns The base64 encoded string
 */
function encodebase64(str) {
    return Buffer.from(str, 'utf-8').toString('base64');
}
/**
 * Decodes a base64 encoded string
 * @param base64Str The base64 encoded string to decode
 * @returns The decoded string
 */
function decodebase64(base64Str) {
    return Buffer.from(base64Str, 'base64').toString('utf-8');
}
