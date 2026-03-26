enum PaymentMethodType {
	ALL,
	CARD,
	E_WALLET,
	FPX,
	DUITNOW_QR,
	BANK_TRANSFER,
	CASH,
}

// parameter int convert to string
const getPaymentMethodType = (type: PaymentMethodType) => {
	switch (type) {
		case PaymentMethodType.ALL:
			return 'Cards, FPX, E-Wallet, Duitnow QR';
		case PaymentMethodType.CARD:
			return 'Credit/Debit Card';
		case PaymentMethodType.E_WALLET:
			return 'E-Wallet';
		case PaymentMethodType.DUITNOW_QR:
			return 'DuitnowQR';
		case PaymentMethodType.FPX:
			return 'FPX';
		case PaymentMethodType.CASH:
			return 'Cash';
		case PaymentMethodType.BANK_TRANSFER:
			return 'Bank Transfer';
		default:
			return 'Unknown';
	}
};

export { PaymentMethodType, getPaymentMethodType };
