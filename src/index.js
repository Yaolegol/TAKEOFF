import {handleLoad} from '/common/helpers/load';

// default webpack import function
function importAll (r) {
    r.keys().forEach(r);
}

// setup import from all folders in project
var commonStyles = require.context("/styles", true, /\.less$/);
var components = require.context("/components", true, /\.(js|less)$/);

importAll(commonStyles);
importAll(components);

handleLoad();
