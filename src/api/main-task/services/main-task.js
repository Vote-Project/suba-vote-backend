'use strict';

/**
 * main-task service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-task.main-task');
