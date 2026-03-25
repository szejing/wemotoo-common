export var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["PAID"] = "paid";
    PaymentStatus["REFUNDED"] = "refunded";
    PaymentStatus["PENDING_REFUND"] = "pending_refund";
    PaymentStatus["PARTIALLY_REFUNDED"] = "partially_refunded";
    PaymentStatus["PARTIALLY_PAID"] = "partially_paid";
})(PaymentStatus || (PaymentStatus = {}));
