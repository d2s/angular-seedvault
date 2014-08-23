 var  _ = require('underscore');

    /* CONFIGURAION
     * Feel free to edit these to suit your asset pipeline
     * NOTE: Stylus and Jade partials starting with '_' only trigger builds,
     * but do not get build as html fragments in './dist'.                       */

module.exports.paths = {
    // Asset pipeline
        html      : ['client/**/*.html', '!client/bower_components/**/*.html'],
        stylWatch : ['client/**/*.styl', '!client/bower_components/**.styl'],
        styl      : ['client/**/*.styl', '!client/bower_components/**.styl', '!client/**/_*.styl'],
        css       : ['client/**/*.css', '!client/bower_components/**.css'],
        json      : ['client/**/*.json', '!client/bower_components/**/*.json'],
        jade      : ['client/**/*.jade', '!client/bower_components/**/*.jade'],
        fonts     : ['client/**/*.{eot,ttf,otf,cff,afm,lwfn,ffil,fon,pfm,pfb,woff,std,pro,xsf}', '!client/bower_components/**/*.{otf,ttf,woff,eot}'],
        js        : ['client/**/*.js', '!client/bower_components/**/*.js'],
        images    : ['client/**/*.{png,svg,jpg,jpeg,gif}', '!client/bower_components/**/*.{png,svg,jpg,jpeg,gif}'],
        dist      : 'dist/',
    // Server paths
        restart   : ['server', 'gulp_tasks',  'gulpfile.js'],
        expressApp : 'server/app.js'
    };

module.exports.LOCAL_ENV = 'development',
module.exports.LIVERELOAD_ENV = _.contains(['development', undefined], process.env.NODE_ENV)
