'use strict';

/**
 * price-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::price-product.price-product');
