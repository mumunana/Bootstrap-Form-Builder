require.config({
    baseUrl: "assets/js/lib/"
    , shim: { //shim  用来配置不符合AMD规范的模块 比如  underscore.js  和 Backbone.js
        'backbone': {
            deps: ['underscore', 'jquery'], // backbone 的依赖（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: '$.fn.popover'
        }
    }
    , paths: {
        app: ".."
        , collections: "../collections"
        , data: "../data"
        , helper: "../helper"
        , models: "../models"
        , templates: "../templates"
        , views: "../views"
    }
});
require(['app/app'], function (app) {
    app.initialize("病人资料");
});