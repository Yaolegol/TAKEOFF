import {handleLoad} from 'helpers/load';

// default webpack import function
function importAll (r) {
    r.keys().forEach(r);
}

// setup import from all folders in project

const styles = require.context("styles", true, /\.less$/);
const components = require.context("components", true, /\.less$/);
const modules = require.context("modules", true, /\.less$/);
const page = require.context("./", true, /\.(js|less)$/);

importAll(styles);
importAll(components);
importAll(modules);
importAll(page);

handleLoad();
