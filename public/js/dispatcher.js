/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
const socket = io();

const vm = new Vue({
  el: '#orders',
  data: {
    orders: {},
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  }
});
