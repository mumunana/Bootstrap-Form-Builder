/**
 * 控件类型的按钮视图
 * @author mu.kun@founder.com.cn
 */
define([
    'jquery', 'underscore', 'backbone'
    , "text!templates/app/button.html"


], function ($, _, Backbone,
             _buttonNavTemplate) {
    return Backbone.View.extend({
        tagName: "div"
        , className: "col-xs-4"
        , initialize: function () {
            //this.id = this.options.title.toLowerCase().replace(/\W/g,'');
            this.id = this.options.title.toLowerCase();
            this.tabNavTemplate = _.template(_buttonNavTemplate);
            this.render();
        }
        , events: {
            "mousedown": "funtest"
        }
        , render: function () {
            // Render Snippet Views
            var that = this;
            if (that.collection !== undefined) {
                _.each(this.collection.renderAll(), function (snippet) {
                    that.$el.append(snippet);
                    //将按钮增加到控件类型的基本框里面
                    that.el.innerHTML = that.tabNavTemplate({
                        title: that.options.title,
                        id: that.id,
                        datatoggle: snippet.html()
                    });
                    that.$el.append(snippet);
                    //$("#tab_content_item_input").append(that.tabNavTemplate({
                    //    title: that.options.title,
                    //    id: that.id,
                    //    //datatoggle: snippet.html()
                    //}));

                    //$(snippet).css({"display": "none"});
                    //that.$el.append();
                });
            } else if (that.options.content) {
                that.$el.append(that.options.content);
            }
            // Render & append nav for tab
            //$("#formtabs").append(this.tabNavTemplate({title: this.options.title, id: this.id}))

            // Render tab
            //this.$el.attr("id", this.id);
            //this.$el.attr("id", "tab_content_item");
            //this.$el.appendTo(".tab-content");
            //插入控件按钮到控件类型页签页面中
            this.$el.appendTo("#tab_content_item_input");
            //tab_content_item_input
            this.delegateEvents();
        }
        ,funtest: function (event) {
            console.log($(this.el)) ;
            $(this.el).find(".component").mousedown();

        }
    });
});
