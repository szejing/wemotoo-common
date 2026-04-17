"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentStatus = void 0;
var ShipmentStatus;
(function (ShipmentStatus) {
    ShipmentStatus["PENDING"] = "pending";
    ShipmentStatus["SHIPPED"] = "shipped";
    ShipmentStatus["IN_TRANSIT"] = "in_transit";
    ShipmentStatus["DELIVERED"] = "delivered";
    ShipmentStatus["FAILED"] = "failed";
})(ShipmentStatus || (exports.ShipmentStatus = ShipmentStatus = {}));
