export const imageRelations = ['thumbnail', 'images'];

export const defaultProductCategoryRelations = [
  ...imageRelations,
  'parent_category',
];

export const defaultSimpleProductRelations = [
  ...imageRelations,
  'price_types',
  'type',
];

export const defaultProductRelations = [
  ...defaultSimpleProductRelations,
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

export const defaultGetProductVariantRelations = ['price_types', 'options'];

export const defaultProductOptionRelations = ['values'];

export const defaultOrderRelations = [
  'items',
  'items.appointment',
  'items.discounts',
  'payments',
  'discounts',
  'customer',
];

export const defaultSaleRelations = [
  'items',
  'items.appointment',
  'items.discounts',
  'payments',
  'discounts',
  'customer',
];

export const defaultCartRelations = [
  'items',
  'items.appointment',
  'customer',
  'items.discounts',
  'discounts',
];

export const defaultPaymentMethodRelations = ['currency', 'payment_provider'];

export const defaultPaymentTypeGroupRelations = [
  'payment_types',
  'payment_types.currency',
];

export const defaultProductBrandRelations = ['products'];

export const defaultTaxGroupRelations = ['taxes'];

export const defaultTaxRulesRelations = [
  'details',
  'details.tax',
  'details.tax_condition',
  'details.tax_condition.filters',
];
