var DualModel = require('lib/config/dual-model');

module.exports = DualModel.extend({
  name: 'product',

  // this is an array of fields used by FilterCollection.matchmaker()
  fields: ['title']
});