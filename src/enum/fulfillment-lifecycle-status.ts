/**
 * Warehouse-style fulfillment steps for CRM Phase 1.
 * Distinct from {@link FulfillmentStatus} (legacy line-level / provider states).
 */
export enum FulfillmentLifecycleStatus {
	PENDING = 'pending',
	PROCESSING = 'processing',
	PACKED = 'packed',
	FULFILLED = 'fulfilled',
}
