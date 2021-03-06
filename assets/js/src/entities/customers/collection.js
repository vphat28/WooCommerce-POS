var Collection = require('lib/config/collection');
var Model = require('./model');
var Radio = require('backbone.radio');

module.exports = Collection.extend({
  model: Model,
  name: 'customers',
  extends: ['dual', 'filtered'],

  initialState: {
    filter: {
      order: 'ASC',
      orderby: 'last_name',
      limit: 10,
      qFields: [
        'email',
        'username', // required
        'first_name',
        'last_name',
        'billing_address.phone',
        'billing_address.company'
      ]
    }
  },

  initialize: function(){
    var settings = Radio.request('entities', 'get', {
      type: 'option',
      name: 'customers'
    });
    if(settings){
      this._guest = settings.guest;
      this._default = settings['default'] || settings.guest;
    }
  },

  getGuestCustomer: function(){
    return this._guest;
  },

  getDefaultCustomer: function(){
    return this._default;
  }
});