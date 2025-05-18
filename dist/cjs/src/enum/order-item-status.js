"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemStatus = void 0;
var OrderItemStatus;
(function (OrderItemStatus) {
    OrderItemStatus["ACTIVE"] = "active";
    OrderItemStatus["VOIDED"] = "voided";
    OrderItemStatus["REFUNDED"] = "refunded";
})(OrderItemStatus || (exports.OrderItemStatus = OrderItemStatus = {}));
// active | voided | refunded
