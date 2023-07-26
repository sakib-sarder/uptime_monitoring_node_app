/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Sakib Sarder
 * Date: 07/26/2023
 */

// module scaffolding
const handler = {};

handler.sampleHandle = (requestProperties, callback) => {
  console.log(requestProperties);
  callback(200, {
    message: "This is a sample url",
  });
};

module.exports = handler;
