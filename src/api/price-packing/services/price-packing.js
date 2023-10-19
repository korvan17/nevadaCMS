'use strict';

/**
 * price-packing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::price-packing.price-packing');
