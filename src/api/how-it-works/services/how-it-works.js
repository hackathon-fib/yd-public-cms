'use strict';

/**
 * how-it-works service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::how-it-works.how-it-works');
