$(document).ready(function() {

  $(".favoriteThings").submit(function(event) {
    event.preventDefault();

    var favorite1 = $("#favorite1").val();
    var favorite2 = $("#favorite2").val();
    var favorite3 = $("#favorite3").val();
    var favorite4 = $("#favorite4").val();


    var favorites = []
    favorites.push(favorite1, favorite2, favorite3, favorite4);
    favorites.pop();
    favorites.splice(0,1);
    favorites.splice(1,0,favorite1);

    var newFavorites = favorites.slice();

    alert(newFavorites);
  //
  $("#output1").text(newFavorites[0]);
  $("#output2").text(newFavorites[1]);
  $("#output3").text(newFavorites[2]);

  });
});
