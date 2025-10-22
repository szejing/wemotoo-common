export enum OrderStatus {
	PENDING_PAYMENT = 'pending_payment',
	PROCESSING = 'processing',
	COMPLETED = 'completed',
	CANCELLED = 'cancelled',
	REFUNDED = 'refunded',
	REQUIRES_ACTION = 'requires_action',
}

// new | completed | cancelled | refunded | requires_action

// PENDING -> PROCESSING -> COMPLETED
// COMPLETED -> CANCELLED -> REFUNDED
