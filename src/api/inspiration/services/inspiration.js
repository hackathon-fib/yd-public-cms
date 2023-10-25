'use strict';

/**
 * inspiration service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inspiration.inspiration');
