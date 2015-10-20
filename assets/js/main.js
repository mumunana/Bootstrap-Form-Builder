require.config({
    baseUrl: "assets/js/lib/"
    , shim: { //shim  �������ò�����AMD�淶��ģ�� ����  underscore.js  �� Backbone.js
        'backbone': {
            deps: ['underscore', 'jquery'], // backbone ��������1��exportsֵ������ı����������������ģ���ⲿ����ʱ�����ƣ���2��deps���飬������ģ��������ԡ�
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
    app.initialize();
});