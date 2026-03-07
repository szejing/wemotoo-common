"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCanonicalString = buildCanonicalString;
exports.hashBody = hashBody;
exports.signRequest = signRequest;
exports.constantTimeCompareSignature = constantTimeCompareSignature;
const crypto_1 = require("crypto");
/**
 * Canonical string format for request signing: METHOD\nPATH\nTIMESTAMP\nBODY_HASH
 * PATH must include query string if present. BODY_HASH is SHA256 of raw body in hex, or hash of empty string for GET/HEAD/OPTIONS.
 */
function buildCanonicalString(method, path, timestamp, bodyHash) {
    return [method.toUpperCase(), path, timestamp, bodyHash].join('\n');
}
/**
 * SHA256 hash of body for signature. Use empty string for GET/HEAD/OPTIONS.
 * Returns hex string.
 */
function hashBody(rawBody) {
    if (rawBody === undefined || rawBody === null) {
        return (0, crypto_1.createHash)('sha256').update('', 'utf8').digest('hex');
    }
    const buf = typeof rawBody === 'string' ? Buffer.from(rawBody, 'utf8') : rawBody;
    return (0, crypto_1.createHash)('sha256').update(buf).digest('hex');
}
/**
 * HMAC-SHA256 signature of the canonical string. Returns hex string.
 */
function signRequest(canonicalString, secret) {
    return (0, crypto_1.createHmac)('sha256', secret)
        .update(canonicalString, 'utf8')
        .digest('hex');
}
/**
 * Constant-time comparison of two hex signature strings to prevent timing attacks.
 */
function constantTimeCompareSignature(a, b) {
    const bufA = Buffer.from(a, 'hex');
    const bufB = Buffer.from(b, 'hex');
    if (bufA.length !== bufB.length) {
        return false;
    }
    return (0, crypto_1.timingSafeEqual)(bufA, bufB);
}
