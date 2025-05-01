"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationProvider = void 0;
var AuthenticationProvider;
(function (AuthenticationProvider) {
    AuthenticationProvider[AuthenticationProvider["FACEBOOK"] = 0] = "FACEBOOK";
    AuthenticationProvider[AuthenticationProvider["GOOGLE"] = 1] = "GOOGLE";
    AuthenticationProvider[AuthenticationProvider["APPLE"] = 2] = "APPLE";
    AuthenticationProvider[AuthenticationProvider["EMAIL"] = 3] = "EMAIL";
})(AuthenticationProvider || (exports.AuthenticationProvider = AuthenticationProvider = {}));
