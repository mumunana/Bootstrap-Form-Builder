define([
       "jquery" , "underscore" , "backbone"
       , "models/snippet"
       //, "views/tab-snippet"
       , "views/button-snippet"
], function(
  $, _, Backbone
  , SnippetModel
  //, TabSnippetView
  , ButtonSnippetView
){
  return Backbone.Collection.extend({
    model: SnippetModel
    , renderAll: function(){
      return this.map(function(snippet){
        return new ButtonSnippetView({model: snippet}).render();
      });
    }
  });
});
