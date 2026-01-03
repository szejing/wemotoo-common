var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType[PaymentMethodType["ALL"] = 0] = "ALL";
    PaymentMethodType[PaymentMethodType["CARD"] = 1] = "CARD";
    PaymentMethodType[PaymentMethodType["E_WALLET"] = 2] = "E_WALLET";
    PaymentMethodType[PaymentMethodType["FPX"] = 3] = "FPX";
    PaymentMethodType[PaymentMethodType["BANK_TRANSFER"] = 4] = "BANK_TRANSFER";
    PaymentMethodType[PaymentMethodType["CASH"] = 5] = "CASH";
})(PaymentMethodType || (PaymentMethodType = {}));
// parameter int convert to string
const getPaymentMethodType = (type) => {
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
