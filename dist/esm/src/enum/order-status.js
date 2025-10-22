export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING_PAYMENT"] = "pending_payment";
    OrderStatus["PROCESSING"] = "processing";
    OrderStatus["COMPLETED"] = "completed";
    OrderStatus["CANCELLED"] = "cancelled";
    OrderStatus["REFUNDED"] = "refunded";
    OrderStatus["REQUIRES_ACTION"] = "requires_action";
})(OrderStatus || (OrderStatus = {}));
// new | completed | cancelled | refunded | requires_action
// PENDING -> PROCESSING -> COMPLETED
// COMPLETED -> CANCELLED -> REFUNDED
