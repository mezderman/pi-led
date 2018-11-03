var dash_button = require('node-dash-button'),
    dash = dash_button('ac:63:be:2b:7f:c9'), 

dash.on('detected', function() {
   console.log('I got dash message')
});