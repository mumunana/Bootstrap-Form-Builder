define([
    "jquery", "underscore", "backbone"
    , "collections/snippets", "collections/my-form-snippets"
    , "views/tab", "views/button","views/my-form" ,"views/baseWidget"
    , "text!data/input.json", "text!data/radio.json", "text!data/select.json", "text!data/buttons.json","text!data/widget.json"
    , "text!templates/app/render.html", "text!templates/app/about.html",
], function ($, _, Backbone
    , SnippetsCollection, MyFormSnippetsCollection
    , TabView,ButtonView, MyFormView ,BaseWidgetView
    , inputJSON, radioJSON, selectJSON, buttonsJSON,widgetJson
    , renderTab, aboutTab) {
    return {
        initialize: function (formName) {
            //Bootstrap tabs from json.
            //给基础控件绑定事件   通过处理inputJson 把
            var item =
/*            new BaseWidgetView({
                    el:"#tab_content_item_input2",
                    title: "text"
                    ,collection: new SnippetsCollection(JSON.parse(inputJSON))
            });*/
            //console.log(item.el);
            new ButtonView({
                title: "Select"
                , collection: new SnippetsCollection(JSON.parse(inputJSON))
            });
            new ButtonView({
                title: "Select"
                , collection: new SnippetsCollection(JSON.parse(inputJSON))
            });
/*            new TabView({
                title: "CRF配置"
                //, collection: new SnippetsCollection(JSON.parse(inputJSON))
            });
            new TabView({
                title: "Section配置"
                //, collection: new SnippetsCollection(JSON.parse(radioJSON))
            });
            new TabView({
                title: "控件类型"
                , collection: new SnippetsCollection(JSON.parse(widgetJson))
            });
            new TabView({
                title: "控件属性"
                //, collection: new SnippetsCollection(JSON.parse(buttonsJSON))
            });*/

               //comment at 20152019 by mukun@founder
            /* new TabView({
             title: "Radios / Checkboxes"
             , collection: new SnippetsCollection(JSON.parse(radioJSON))
             });
             new TabView({
             title: "Select"
             , collection: new SnippetsCollection(JSON.parse(selectJSON))
             });
             new TabView({
             title: "Buttons"
             , collection: new SnippetsCollection(JSON.parse(buttonsJSON))
             });
            new TabView({
                title: "Buttonsss"
                , collection: new SnippetsCollection(JSON.parse(selectJSON))
            });*/
/*             new TabView({
             title: "Rendered"
             , content: renderTab
             });
             new TabView({
             title: "About"
             , content: aboutTab
             });*/

            //Make the first tab active!
            $("#components .tab-pane").first().addClass("active");
            $("#formtabs li").first().addClass("active");
            // Bootstrap "My Form" with 'Form Name' snippet.
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
