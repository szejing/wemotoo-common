"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymentMethodType = exports.PaymentMethodType = void 0;
var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType[PaymentMethodType["ALL"] = 0] = "ALL";
    PaymentMethodType[PaymentMethodType["CARD"] = 1] = "CARD";
    PaymentMethodType[PaymentMethodType["E_WALLET"] = 2] = "E_WALLET";
    PaymentMethodType[PaymentMethodType["FPX"] = 3] = "FPX";
    PaymentMethodType[PaymentMethodType["DUITNOW_QR"] = 4] = "DUITNOW_QR";
    PaymentMethodType[PaymentMethodType["BANK_TRANSFER"] = 5] = "BANK_TRANSFER";
    PaymentMethodType[PaymentMethodType["CASH"] = 6] = "CASH";
})(PaymentMethodType || (exports.PaymentMethodType = PaymentMethodType = {}));
// parameter int convert to string
const getPaymentMethodType = (type) => {
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
exports.getPaymentMethodType = getPaymentMethodType;
