declare enum PaymentMethodType {
    ALL = 0,
    CARD = 1,
    E_WALLET = 2,
    FPX = 3,
    BANK_TRANSFER = 4,
    CASH = 5
}
declare const getPaymentMethodType: (type: number) => "Cards, FPX, E-Wallet" | "Credit/Debit Card" | "E-Wallet" | "FPX" | "Bank Transfer" | "Cash" | "Unknown";
export { PaymentMethodType, getPaymentMethodType };
