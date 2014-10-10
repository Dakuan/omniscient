var EventEmitter = require("events").EventEmitter,
    immstruct    = require('immstruct'),
    React        = require('react');

var component = require('../../component'),
    d         = React.DOM;

var Editable = require('./editable');

var Item = component(function (cursor) {
  return d.li({}, Editable(cursor));
});

var List = component(function (cursor) {
  return d.ul({}, cursor.toArray().map(function (item, key) {
    return Item(key, item);
  }));
});

var data = immstruct({
  items: [
    { text: 'one' },
    { text: 'two' },
    { text: 'three' }
  ]
});

$ = document.querySelector.bind(document);

function render () {
  React.renderComponent(
    List(data.cursor('items')),
    $('.app'));
}

render();
data.on('render', render);