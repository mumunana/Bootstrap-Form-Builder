define([
       "jquery", "underscore", "backbone",
       "views/snippet", "views/temp-snippet",
       "helper/pubsub"
], function(
  $, _, Backbone,
  SnippetView, TempSnippetView,
  PubSub
){
  return SnippetView.extend({
    events:{
      "click"   : "preventPropagation" //stops checkbox / radio reacting.
      , "mousedown" : "mouseDownHandler"
      , "mouseup"   : "mouseUpHandler"
    }

    ,
    mouseDownHandler : function(mouseDownEvent){
      //点击表单事件
      mouseDownEvent.stopPropagation();
      mouseDownEvent.preventDefault();
      var that = this;
      //popover
      $(".popover").remove();
      //bootstrap 弹出框
      $("#tab_content_itemData_container").empty().append(that.$el.attr("data-content"));
      //暂时不用popover方式弹出
      //this.$el.popover("show");
      $('#formtabs li:eq(3) a').tab('show');
      $('#formtabs li:eq(3) a').tab('show');
      //$(".popover #save").on("click", this.saveHandler(that));
      //$(".popover #cancel").on("click", this.cancelHandler(that));


      $("#tab_content_itemData_container #save").on("click", function(){
        that.saveHandler(that) ;
      });
      $("#tab_content_itemData_container #cancel").on("click", this.cancelHandler(that));

      //add drag event for all but form name
      if(this.model.get("title") !== "Form Name"){
        $("body").on("mousemove", function(mouseMoveEvent){
          if(
            Math.abs(mouseDownEvent.pageX - mouseMoveEvent.pageX) > 10 ||
            Math.abs(mouseDownEvent.pageY - mouseMoveEvent.pageY) > 10
          ){
            that.$el.popover('destroy');
            PubSub.trigger("mySnippetDrag", mouseDownEvent, that.model);
            that.mouseUpHandler();
          };
        });
      }
    }

    , preventPropagation: function(e) {
      e.stopPropagation();
      e.preventDefault();
    }

    , mouseUpHandler : function(mouseUpEvent) {
        $("body").off("mousemove");
    }
    , saveHandler : function(boundContext) {
      event.preventDefault() ;
      var fields = $("#tab_content_itemData_container .field");
      console.log(fields);
      _.each(fields, function(e){
        var $e = $(e)
            , type = $e.attr("data-type")
            , name = $e.attr("id");
        console.log(type) ;
        switch(type) {
          case "checkbox":
            boundContext.model.setField(name, $e.is(":checked"));
            break;
          case "input":
            boundContext.model.setField(name, $e.val());
            break;
          case "textarea":
            boundContext.model.setField(name, $e.val());
            break;
          case "textarea-split":
            boundContext.model.setField(name,
                _.chain($e.val().split("\n"))
                    .map(function(t){return $.trim(t)})
                    .filter(function(t){return t.length > 0})
                    .value()
            );
            break;
          case "select":
            var valarr = _.map($e.find("option"), function(e){
              return {value: e.value, selected: e.selected, label:$(e).text()};
            });
            boundContext.model.setField(name, valarr);
            break;
        }
      });
      boundContext.model.trigger("change");



/*      return function(mouseEvent) {
        console.log(mouseEvent) ;
        mouseEvent.preventDefault();
        //var fields = $(".popover .field");
        var fields = $("#tab_content_itemData_container .field");
        console.log(fields);

        _.each(fields, function(e){

          var $e = $(e)
          , type = $e.attr("data-type")
          , name = $e.attr("id");
        console.log(type) ;
          switch(type) {
            case "checkbox":
              boundContext.model.setField(name, $e.is(":checked"));
              break;
            case "input":
              boundContext.model.setField(name, $e.val());
              break;
            case "textarea":
              boundContext.model.setField(name, $e.val());
              break;
            case "textarea-split":
              boundContext.model.setField(name,
                _.chain($e.val().split("\n"))
                  .map(function(t){return $.trim(t)})
                  .filter(function(t){return t.length > 0})
                  .value()
                  );
              break;
            case "select":
              var valarr = _.map($e.find("option"), function(e){
                return {value: e.value, selected: e.selected, label:$(e).text()};
              });
              boundContext.model.setField(name, valarr);
              break;
          }
        });
        boundContext.model.trigger("change");
        //$(".popover").remove();
      }*/
    }

    , cancelHandler : function(boundContext) {
      event.preventDefault();
      boundContext.model.trigger("change");
      /*return function(mouseEvent) {
        mouseEvent.preventDefault();
        $(".popover").remove();
        boundContext.model.trigger("change");
      }*/
    }

  });
});
