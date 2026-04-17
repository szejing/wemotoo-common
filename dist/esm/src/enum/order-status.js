export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING_PAYMENT"] = "pending_payment";
    /** Paid, awaiting fulfillment / ops (CRM fulfillment phase 1). */
    OrderStatus["PAID"] = "paid";
    OrderStatus["PROCESSING"] = "processing";
    OrderStatus["SHIPPED"] = "shipped";
    OrderStatus["DELIVERED"] = "delivered";
    OrderStatus["COMPLETED"] = "completed";
    OrderStatus["CANCELLED"] = "cancelled";
    OrderStatus["REFUNDED"] = "refunded";
    OrderStatus["REQUIRES_ACTION"] = "requires_action";
})(OrderStatus || (OrderStatus = {}));
// new | completed | cancelled | refunded | requires_action
// PENDING -> PAID | PROCESSING -> … -> COMPLETED / SHIPPED / DELIVERED
// COMPLETED -> CANCELLED -> REFUNDED
