export enum OrderStatus {
	PENDING_PAYMENT = 'pending_payment',
	COMPLETED = 'completed',
	CANCELLED = 'cancelled',
	REQUIRES_ACTION = 'requires_action',
	REFUNDED = 'refunded',
}

// pending_payment | completed | cancelled | requires_action | refunded
