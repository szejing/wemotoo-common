import { BadgeColor } from './../constants/component-color';

export enum FulfillmentStatus {
	NOT_FULFILLED = 'not_fulfilled',
	PARTIALLY_FULFILLED = 'partially_fulfilled',
	FULFILLED = 'fulfilled',
	PARTIALLY_SHIPPED = 'partially_shipped',
	SHIPPED = 'shipped',
	PARTIALLY_RETURNED = 'partially_returned',
	RETURNED = 'returned',
	CANCELED = 'canceled',
	REQUIRES_ACTION = 'requires_action',
}

export const FULFILLMENT_STATUS_COLORS: Record<FulfillmentStatus, BadgeColor> = {
	[FulfillmentStatus.NOT_FULFILLED]: 'warning',
	[FulfillmentStatus.PARTIALLY_FULFILLED]: 'info',
	[FulfillmentStatus.FULFILLED]: 'success',
	[FulfillmentStatus.PARTIALLY_SHIPPED]: 'info',
	[FulfillmentStatus.SHIPPED]: 'primary',
	[FulfillmentStatus.PARTIALLY_RETURNED]: 'warning',
	[FulfillmentStatus.RETURNED]: 'error',
	[FulfillmentStatus.CANCELED]: 'error',
	[FulfillmentStatus.REQUIRES_ACTION]: 'warning',
};

export function getFulfillmentStatusColor(status: FulfillmentStatus | string): BadgeColor | undefined {
	return FULFILLMENT_STATUS_COLORS[status as FulfillmentStatus];
}
