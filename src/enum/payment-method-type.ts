enum PaymentMethodType {
	ALL,
	CARD,
	E_WALLET,
	FPX,
	BANK_TRANSFER,
	CASH,
}

// parameter int convert to string
const getPaymentMethodType = (type: number) => {
	switch (type) {
		case PaymentMethodType.ALL:
			return 'Cards, FPX, E-Wallet';
		case PaymentMethodType.CARD:
			return 'Credit/Debit Card';
		case PaymentMethodType.E_WALLET:
			return 'E-Wallet';
		case PaymentMethodType.FPX:
			return 'FPX';
		case PaymentMethodType.BANK_TRANSFER:
			return 'Bank Transfer';
		case PaymentMethodType.CASH:
			return 'Cash';
		default:
			return 'Unknown';
	}
};

export { PaymentMethodType, getPaymentMethodType };
