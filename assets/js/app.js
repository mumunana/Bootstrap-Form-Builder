define([
    "jquery", "underscore", "backbone"
    , "collections/snippets", "collections/my-form-snippets"
    //, "views/tab"
    , "views/button","views/my-form"
    , "text!data/input.json", "text!data/radio.json", "text!data/select.json", "text!data/buttons.json"
    , "text!templates/app/render.html", "text!templates/app/about.html",
], function ($, _, Backbone
    , SnippetsCollection, MyFormSnippetsCollection
    //, TabView
    ,ButtonView, MyFormView

    , inputJSON, radioJSON, selectJSON, buttonsJSON
    , renderTab, aboutTab) {
    return {
        initialize: function (formName) {
            //穆坤增加  用途 事件监听

            /*var App.vent = null;
            _.extend(App.vent, Backbone.Events);*/
            //Bootstrap tabs from json.
            //给基础控件绑定事件   通过处理inputJson 把

           new ButtonView({
                title: "单行文本框"
                , collection: new SnippetsCollection(JSON.parse(inputJSON))
            });
            new ButtonView({
                title: "select"
                , collection: new SnippetsCollection(JSON.parse(selectJSON))
            });
            //Make the first tab active!
            $("#components .tab-pane").first().addClass("active");
            $("#formtabs li").first().addClass("active");
            // Bootstrap "My Form" with 'Form Name' snippet.
            //创建右侧MyFormvView
            new MyFormView({
                title: "Original"
                , collection: new MyFormSnippetsCollection([
                    {
                        "title": "Form Name"
                        , "fields": {
                        "name": {
                            "label": "Form Name"
                            , "type": "input"
                            , "value": formName
                        }
                    }
                    }
                ])
            });

        }
    }
});
