declare enum PaymentMethodType {
    ALL = 0,
    CREDIT_CARD = 1,
    DEBIT_CARD = 2,
    QR_CODE = 3,
    E_WALLET = 4,
    BANK_TRANSFER = 5,
    CASH = 6
}
declare const getPaymentMethodType: (type: number) => "All" | "Credit Card" | "Debit Card" | "QR Code" | "E-Wallet" | "Bank Transfer" | "Cash" | "Unknown";
export { PaymentMethodType, getPaymentMethodType };
