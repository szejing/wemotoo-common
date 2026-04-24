/**
 * Canonical path+query for signing/verification so both sides match.
 * - Path: no trailing slash (except root "/").
 * - Query: keys sorted alphabetically, consistent encoding (encodeURIComponent).
 * Use when building the path to sign (portal) and when verifying (backend).
 */
export declare function canonicalPathAndQuery(pathWithQuery: string): string;
/**
 * Build canonical path+query from pathname and query object (for portal signing).
 * Path has no trailing slash; query keys are sorted (same rules as canonicalPathAndQuery).
 * Repeated keys (e.g. defaultRelations=a&defaultRelations=b) come through as array values from
 * getQuery — emit one pair per element so this matches the server’s URLSearchParams expansion.
 */
export declare function canonicalPathAndQueryFromParts(pathname: string, query?: Record<string, any>): string;
/**
 * Canonical string format for request signing: METHOD\nPATH\nTIMESTAMP\nBODY_HASH
 * PATH must include query string if present. BODY_HASH is SHA256 of raw body in hex, or hash of empty string for GET/HEAD/OPTIONS.
 */
export declare function buildCanonicalString(method: string, path: string, timestamp: string, bodyHash: string): string;
/**
 * SHA256 hash of body for signature. Use empty string for GET/HEAD/OPTIONS.
 * Returns hex string.
 */
export declare function hashBody(rawBody: string | Buffer | undefined | null): string;
/**
 * HMAC-SHA256 signature of the canonical string. Returns hex string.
 */
export declare function signRequest(canonicalString: string, secret: string): string;
/**
 * Constant-time comparison of two hex signature strings to prevent timing attacks.
 */
export declare function constantTimeCompareSignature(a: string, b: string): boolean;
//# sourceMappingURL=request-signature.d.ts.map