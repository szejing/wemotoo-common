export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["NEW"] = "new";
    OrderStatus["COMPLETED"] = "completed";
    OrderStatus["CANCELLED"] = "cancelled";
    OrderStatus["REFUNDED"] = "refunded";
    OrderStatus["REQUIRES_ACTION"] = "requires_action";
})(OrderStatus || (OrderStatus = {}));
// new | completed | cancelled | refunded | requires_action
