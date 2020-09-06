const path = require("path");

// setup import from all folders in project
var commonStyles = require.context("/styles", true, /\.(js|less)$/);
var components = require.context("/components", true, /\.(js|less)$/);

import '/header/menu-toggle';
