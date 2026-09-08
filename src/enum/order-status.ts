import { BadgeColor } from './../constants/component-color';

/**
 * Merchant/customer workflow timeline for orders.
 * Payment truth lives in {@link PaymentStatus}; warehouse steps in
 * {@link FulfillmentLifecycleStatus}; courier steps in {@link ShipmentStatus}.
 */
export enum OrderStatus {
	PENDING_PAYMENT = 'pending_payment',
	CONFIRMED = 'confirmed',
	PAID = 'paid',
	PROCESSING = 'processing',
	READY_FOR_PICKUP = 'ready_for_pickup',
	SHIPPED = 'shipped',
	DELIVERED = 'delivered',
	COMPLETED = 'completed',
	CANCELLED = 'cancelled',
	REFUNDED = 'refunded',
	REQUIRES_ACTION = 'requires_action',
}

export const ORDER_STATUS_COLORS: Record<OrderStatus, BadgeColor> = {
	[OrderStatus.PENDING_PAYMENT]: 'info',
	[OrderStatus.CONFIRMED]: 'info',
	[OrderStatus.PAID]: 'info',
	[OrderStatus.PROCESSING]: 'info',
	[OrderStatus.READY_FOR_PICKUP]: 'primary',
	[OrderStatus.SHIPPED]: 'primary',
	[OrderStatus.DELIVERED]: 'success',
	[OrderStatus.COMPLETED]: 'success',
	[OrderStatus.CANCELLED]: 'error',
	[OrderStatus.REFUNDED]: 'error',
	[OrderStatus.REQUIRES_ACTION]: 'warning',
};

export function getOrderStatusColor(status: OrderStatus | string): BadgeColor | undefined {
	return ORDER_STATUS_COLORS[status as OrderStatus];
}
