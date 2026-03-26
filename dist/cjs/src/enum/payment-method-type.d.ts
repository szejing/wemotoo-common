declare enum PaymentMethodType {
    ALL = 0,
    CARD = 1,
    E_WALLET = 2,
    FPX = 3,
    DUITNOW_QR = 4,
    BANK_TRANSFER = 5,
    CASH = 6
}
declare const getPaymentMethodType: (type: PaymentMethodType) => "Cards, FPX, E-Wallet, Duitnow QR" | "Credit/Debit Card" | "E-Wallet" | "DuitnowQR" | "FPX" | "Cash" | "Bank Transfer" | "Unknown";
export { PaymentMethodType, getPaymentMethodType };
//# sourceMappingURL=payment-method-type.d.ts.map