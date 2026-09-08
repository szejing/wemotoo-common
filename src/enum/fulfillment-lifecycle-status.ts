import { BadgeColor } from './../constants/component-color';

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

export const FULFILLMENT_LIFECYCLE_STATUS_COLORS: Record<FulfillmentLifecycleStatus, BadgeColor> = {
	[FulfillmentLifecycleStatus.PENDING]: 'warning',
	[FulfillmentLifecycleStatus.PROCESSING]: 'info',
	[FulfillmentLifecycleStatus.PACKED]: 'primary',
	[FulfillmentLifecycleStatus.FULFILLED]: 'success',
};

export function getFulfillmentLifecycleStatusColor(status: FulfillmentLifecycleStatus | string): BadgeColor | undefined {
	return FULFILLMENT_LIFECYCLE_STATUS_COLORS[status as FulfillmentLifecycleStatus];
}
