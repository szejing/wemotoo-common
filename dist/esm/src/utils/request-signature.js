import { createHash, createHmac, timingSafeEqual } from 'crypto';
/**
 * Canonical string format for request signing: METHOD\nPATH\nTIMESTAMP\nBODY_HASH
 * PATH must include query string if present. BODY_HASH is SHA256 of raw body in hex, or hash of empty string for GET/HEAD/OPTIONS.
 */
export function buildCanonicalString(method, path, timestamp, bodyHash) {
    return [method.toUpperCase(), path, timestamp, bodyHash].join('\n');
}
/**
 * SHA256 hash of body for signature. Use empty string for GET/HEAD/OPTIONS.
 * Returns hex string.
 */
export function hashBody(rawBody) {
    if (rawBody === undefined || rawBody === null) {
        return createHash('sha256').update('', 'utf8').digest('hex');
    }
    const buf = typeof rawBody === 'string' ? Buffer.from(rawBody, 'utf8') : rawBody;
    return createHash('sha256').update(buf).digest('hex');
}
/**
 * HMAC-SHA256 signature of the canonical string. Returns hex string.
 */
export function signRequest(canonicalString, secret) {
    return createHmac('sha256', secret)
        .update(canonicalString, 'utf8')
        .digest('hex');
}
/**
 * Constant-time comparison of two hex signature strings to prevent timing attacks.
 */
export function constantTimeCompareSignature(a, b) {
    const bufA = Buffer.from(a, 'hex');
    const bufB = Buffer.from(b, 'hex');
    if (bufA.length !== bufB.length) {
        return false;
    }
    return timingSafeEqual(bufA, bufB);
}
