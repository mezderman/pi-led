var dash_button = require('node-dash-button'),
  dash = dash_button('ac:63:be:2b:7f:c9'), // replace xx:xx:xx:xx:xx:xx with your Dash Button's hardware address
  exec = require('child_process').exec

dash.on('detected', function () {
  console.log('I got dash message')
})
