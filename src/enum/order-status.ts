export enum OrderStatus {
	NEW = 'new',
	PENDING_PAYMENT = 'pending_payment',
	CANCELLED = 'cancelled',
	REQUIRES_ACTION = 'requires_action',
	REFUNDED = 'refunded',
}

// pending_payment | completed | new | cancelled | requires_action | refunded
