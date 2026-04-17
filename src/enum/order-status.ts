export enum OrderStatus {
	PENDING_PAYMENT = 'pending_payment',
	/** Paid, awaiting fulfillment / ops (CRM fulfillment phase 1). */
	PAID = 'paid',
	PROCESSING = 'processing',
	SHIPPED = 'shipped',
	DELIVERED = 'delivered',
	COMPLETED = 'completed',
	CANCELLED = 'cancelled',
	REFUNDED = 'refunded',
	REQUIRES_ACTION = 'requires_action',
}

// new | completed | cancelled | refunded | requires_action

// PENDING -> PAID | PROCESSING -> … -> COMPLETED / SHIPPED / DELIVERED
// COMPLETED -> CANCELLED -> REFUNDED
