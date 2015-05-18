$(function() {
  var output = $("#main");    
  var template = $("#home").html();
  var html = Mustache.render(template);
  output.append(html);
});
