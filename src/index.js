const path = require("path");

// setup import from all folders in project
var req = require.context("/", true, /\.(js|less)$/);
req.keys().forEach(function(key){
    req(key);
});

import '/header/menu-toggle';
