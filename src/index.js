/**
 * Created by joe on 16/9/22.
 */
const appConfig = require('../config/index');

if (process.env.NODE_ENV !== 'production') {
    //require("source-map-support").install();
    require('babel-register')({
        "sourceMap":'inline',
        "plugins": [
            "transform-async-to-generator",
            "transform-es2015-modules-commonjs"
        ]
    });
} else {
    appConfig.isProduction = true;
}

if (process.env.BUILD) {
    console.log('compile vue!!!');
    require('pomjs/dist/build.js')(appConfig);
} else {
    const app = require('pomjs');
    app(appConfig);
}
