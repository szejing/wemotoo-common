"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentMethodType = exports.PaymentMethodType = void 0;
var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType[PaymentMethodType["ALL"] = 0] = "ALL";
    PaymentMethodType[PaymentMethodType["CREDIT_CARD"] = 1] = "CREDIT_CARD";
    PaymentMethodType[PaymentMethodType["DEBIT_CARD"] = 2] = "DEBIT_CARD";
    PaymentMethodType[PaymentMethodType["QR_CODE"] = 3] = "QR_CODE";
    PaymentMethodType[PaymentMethodType["E_WALLET"] = 4] = "E_WALLET";
    PaymentMethodType[PaymentMethodType["BANK_TRANSFER"] = 5] = "BANK_TRANSFER";
    PaymentMethodType[PaymentMethodType["CASH"] = 6] = "CASH";
})(PaymentMethodType || (exports.PaymentMethodType = PaymentMethodType = {}));
// parameter int convert to string
const paymentMethodType = (type) => {
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
exports.paymentMethodType = paymentMethodType;
