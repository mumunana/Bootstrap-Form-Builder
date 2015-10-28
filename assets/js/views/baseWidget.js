define([
    'jquery', 'underscore', 'backbone'
    //, "text!templates/app/tab-nav.html"
    , "models/snippet"
     , "views/snippet", "views/temp-snippet"
     , "helper/pubsub"
], function ($, _, Backbone
    //, _tabNavTemplate
             , SnippetModel
              , SnippetView, TempSnippetView
              , PubSub) {
    return Backbone.View.extend({
        tagName: "div"
        , className: "tab-pane"
        , initialize: function () {
            //this.tabNavTemplate = _.template(_tabNavTemplate);
            this.render();
        }
        , render: function () {
            // Render Snippet Views
            var that = this;
            if (that.collection !== undefined) {
                _.each(this.collection.renderAll(), function (snippet) {
                    that.$el.append(snippet);
                });
            } else if (that.options.content) {
                that.$el.append(that.options.content);
            }

            this.delegateEvents();
        },
        //绑定基本控件下的控件事件
        el: "#tab_content_item",
        initialize: function () {
            console.log(this.options);
            this.render();
        },
        render: function () {

        },
        events: {
            "click .btn-primary": "event_handler",
            "mousedown": "mouseDownHandler"
        },
        event_handler: function (event) {

        },
        mouseDownHandler: function (mouseDownEvent) {
            mouseDownEvent.preventDefault();
            mouseDownEvent.stopPropagation();
            ////hide all popovers
            $(".popover").hide();
            //this.options.collection.models[0].attributes
            //$("body").append(new TempSnippetView({model: new SnippetModel($.extend(true, {}, this.model.attributes))}).render());
            //弹出浮动框
            $("body").append(new TempSnippetView({model: new SnippetModel($.extend(true, {}, this.options.collection.models[0].attributes))}).render());
            PubSub.trigger("newTempPostRender", mouseDownEvent);
        }
    });
});
