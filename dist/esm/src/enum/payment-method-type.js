export var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType[PaymentMethodType["ALL"] = 0] = "ALL";
    PaymentMethodType[PaymentMethodType["CREDIT_CARD"] = 1] = "CREDIT_CARD";
    PaymentMethodType[PaymentMethodType["DEBIT_CARD"] = 2] = "DEBIT_CARD";
    PaymentMethodType[PaymentMethodType["QR_CODE"] = 3] = "QR_CODE";
    PaymentMethodType[PaymentMethodType["E_WALLET"] = 4] = "E_WALLET";
    PaymentMethodType[PaymentMethodType["BANK_TRANSFER"] = 5] = "BANK_TRANSFER";
    PaymentMethodType[PaymentMethodType["CASH"] = 6] = "CASH";
})(PaymentMethodType || (PaymentMethodType = {}));
