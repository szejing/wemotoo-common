enum PaymentMethodType {
	ALL,
	CREDIT_CARD,
	DEBIT_CARD,
	QR_CODE,
	E_WALLET,
	BANK_TRANSFER,
	CASH,
}

// parameter int convert to string
const getPaymentMethodType = (type: number) => {
	switch (type) {
		case PaymentMethodType.ALL:
			return 'All';
		case PaymentMethodType.CREDIT_CARD:
			return 'Credit Card';
		case PaymentMethodType.DEBIT_CARD:
			return 'Debit Card';
		case PaymentMethodType.QR_CODE:
			return 'QR Code';
		case PaymentMethodType.E_WALLET:
			return 'E-Wallet';
		case PaymentMethodType.BANK_TRANSFER:
			return 'Bank Transfer';
		case PaymentMethodType.CASH:
			return 'Cash';
		default:
			return 'Unknown';
	}
};

export { PaymentMethodType, getPaymentMethodType };
