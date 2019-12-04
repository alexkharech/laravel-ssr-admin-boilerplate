const path = require("path");
const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    postCss: [require("autoprefixer")],
    hmrOptions: {
        host: "localhost", // site's host name
        port: 8080
    }
}).webpackConfig({
    // add any webpack dev server config here
    devServer: {
        proxy: {
            host: "localhost", // host machine ip
            port: 8080
        },
        watchOptions: {
            aggregateTimeout: 200,
            poll: 5000
        },
        contentBase: path.resolve(__dirname, "public")
    }
});

// client
mix.js("resources/js/app-client.js", "public/js");

// server
mix.js("resources/js/app-server.js", "public/js");

if (process.env.npm_lifecycle_event !== "hot") {
    mix.options({
        extractVueStyles: true
    }).version();
}
const path = require("path");
const mix = require("laravel-mix");

mix.options({
    postCss: [require("autoprefixer")],
    hmrOptions: {
        host: "localhost", // site's host name
        port: 8080
    }
}).webpackConfig({
    // add any webpack dev server config here
    devServer: {
        proxy: {
            host: "localhost", // host machine ip
            port: 8080
        },
        watchOptions: {
            aggregateTimeout: 200,
            poll: 5000
        },
        contentBase: path.resolve(__dirname, "public")
    }
});

// client
mix.js("resources/js/app-client.js", "public/js");

// server
mix.js("resources/js/app-server.js", "public/js");

if (process.env.npm_lifecycle_event !== "hot") {
    mix.options({
        extractVueStyles: true
    }).version();
}
