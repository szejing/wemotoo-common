import { createHash, createHmac, timingSafeEqual } from 'crypto';

/**
 * Canonical string format for request signing: METHOD\nPATH\nTIMESTAMP\nBODY_HASH
 * PATH must include query string if present. BODY_HASH is SHA256 of raw body in hex, or hash of empty string for GET/HEAD/OPTIONS.
 */
export function buildCanonicalString(
	method: string,
	path: string,
	timestamp: string,
	bodyHash: string,
): string {
	return [method.toUpperCase(), path, timestamp, bodyHash].join('\n');
}

/**
 * SHA256 hash of body for signature. Use empty string for GET/HEAD/OPTIONS.
 * Returns hex string.
 */
export function hashBody(rawBody: string | Buffer | undefined | null): string {
	if (rawBody === undefined || rawBody === null) {
		return createHash('sha256').update('', 'utf8').digest('hex');
	}
	const buf =
		typeof rawBody === 'string' ? Buffer.from(rawBody, 'utf8') : rawBody;
	return createHash('sha256').update(buf).digest('hex');
}

/**
 * HMAC-SHA256 signature of the canonical string. Returns hex string.
 */
export function signRequest(canonicalString: string, secret: string): string {
	return createHmac('sha256', secret)
		.update(canonicalString, 'utf8')
		.digest('hex');
}

/**
 * Constant-time comparison of two hex signature strings to prevent timing attacks.
 */
export function constantTimeCompareSignature(a: string, b: string): boolean {
	const bufA = Buffer.from(a, 'hex');
	const bufB = Buffer.from(b, 'hex');
	if (bufA.length !== bufB.length) {
		return false;
	}
	return timingSafeEqual(bufA, bufB);
}
