export enum PaymentStatus {
	NOT_PAID = 'not_paid',
	AWAITING = 'awaiting',
	SUCCESS = 'success',
	PARTIALLY_REFUNDED = 'partially_refunded',
	REFUNDED = 'refunded',
	CANCELED = 'canceled',
	REQUIRES_ACTION = 'requires_action',
}
