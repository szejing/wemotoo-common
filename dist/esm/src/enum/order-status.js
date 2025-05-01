export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["NEW"] = "new";
    OrderStatus["PENDING_PAYMENT"] = "pending_payment";
    OrderStatus["COMPLETED"] = "completed";
    OrderStatus["CANCELLED"] = "cancelled";
    OrderStatus["REQUIRES_ACTION"] = "requires_action";
    OrderStatus["REFUNDED"] = "refunded";
})(OrderStatus || (OrderStatus = {}));
// pending_payment | completed | new | cancelled | requires_action | refunded
