/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Sakib Sarder
 * Date: 07/26/2023
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "your requested url was not found",
  });
};

module.exports = handler;
