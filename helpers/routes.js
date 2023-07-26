/*
 * Title: Routes
 * Description: Applications Route
 * Author: Sakib Sarder
 * Date: 07/26/2023
 */

// dependencies
const { sampleHandle } = require("../handlers/routeHandlers/sampleHandlers");

const routes = {
  sample: sampleHandle,
};

module.exports = routes;
