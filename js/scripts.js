



$(document).ready(function(){
  var creams = ["vanilla", "mintchip", "browncow", "pbfudge", "cookiedough"]
  creams.forEach(function(cream){
    $("#types").append("<li>" + cream + "</li>");
  });
});
