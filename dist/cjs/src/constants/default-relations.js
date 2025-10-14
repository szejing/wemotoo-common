"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTaxRulesRelations = exports.defaultTaxGroupRelations = exports.defaultProductBrandRelations = exports.defaultPaymentTypeGroupRelations = exports.defaultPaymentMethodRelations = exports.defaultCartRelations = exports.defaultSaleRelations = exports.defaultOrderRelations = exports.defaultProductOptionRelations = exports.defaultGetProductVariantRelations = exports.defaultProductRelations = exports.defaultSimpleProductRelations = exports.defaultProductCategoryRelations = exports.imageRelations = void 0;
exports.imageRelations = ['thumbnail', 'images'];
exports.defaultProductCategoryRelations = [...exports.imageRelations, 'parent_category'];
exports.defaultSimpleProductRelations = [...exports.imageRelations, 'price_types', 'type'];
exports.defaultProductRelations = [
    ...exports.defaultSimpleProductRelations,
    'variants',
    'variants.price_types',
    'variants.thumbnail',
    'variants.images',
    'variants.options',
    'options',
    'options.values',
    'categories',
    'tags',
    'brands',
    'collection',
    'options',
];
exports.defaultGetProductVariantRelations = ['price_types', 'options'];
exports.defaultProductOptionRelations = ['values'];
exports.defaultOrderRelations = ['currency', 'items', 'items.appointment', 'items.discounts', 'payments', 'discounts', 'customer', 'taxes'];
exports.defaultSaleRelations = ['currency', 'items', 'items.appointment', 'items.discounts', 'payments', 'discounts', 'customer', 'taxes'];
exports.defaultCartRelations = ['currency', 'items', 'items.appointment', 'customer'];
exports.defaultPaymentMethodRelations = ['currency', 'payment_provider'];
exports.defaultPaymentTypeGroupRelations = ['payment_types', 'payment_types.currency'];
exports.defaultProductBrandRelations = ['products'];
exports.defaultTaxGroupRelations = ['taxes'];
exports.defaultTaxRulesRelations = ['details', 'details.tax', 'details.tax_condition', 'details.tax_condition.filters'];
