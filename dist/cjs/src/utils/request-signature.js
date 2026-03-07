"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canonicalPathAndQuery = canonicalPathAndQuery;
exports.canonicalPathAndQueryFromParts = canonicalPathAndQueryFromParts;
exports.buildCanonicalString = buildCanonicalString;
exports.hashBody = hashBody;
exports.signRequest = signRequest;
exports.constantTimeCompareSignature = constantTimeCompareSignature;
const crypto_1 = require("crypto");
/**
 * Canonical path+query for signing/verification so both sides match.
 * - Path: no trailing slash (except root "/").
 * - Query: keys sorted alphabetically, consistent encoding (encodeURIComponent).
 * Use when building the path to sign (portal) and when verifying (backend).
 */
function canonicalPathAndQuery(pathWithQuery) {
    if (!pathWithQuery || typeof pathWithQuery !== 'string')
        return '/';
    const idx = pathWithQuery.indexOf('?');
    const pathname = idx === -1 ? pathWithQuery : pathWithQuery.slice(0, idx);
    const search = idx === -1 ? '' : pathWithQuery.slice(idx + 1);
    const pathNormalized = pathname.replace(/\/+$/, '') || '/';
    if (!search.trim())
        return pathNormalized;
    const params = new URLSearchParams(search);
    const entries = [];
    params.forEach((value, key) => entries.push([key, value]));
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    const queryString = entries
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        .join('&');
    return `${pathNormalized}?${queryString}`;
}
/**
 * Build canonical path+query from pathname and query object (for portal signing).
 * Path has no trailing slash; query keys are sorted.
 */
function canonicalPathAndQueryFromParts(pathname, query) {
    const pathNormalized = (pathname || '/').replace(/\/+$/, '') || '/';
    if (!query || Object.keys(query).length === 0)
        return pathNormalized;
    const keys = Object.keys(query).sort((a, b) => a.localeCompare(b));
    const pairs = keys.map((k) => {
        const v = query[k];
        const str = Array.isArray(v) ? v.join(',') : v == null ? '' : String(v);
        return `${encodeURIComponent(k)}=${encodeURIComponent(str)}`;
    });
    return `${pathNormalized}?${pairs.join('&')}`;
}
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
