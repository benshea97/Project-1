

var inOne = "";
var inTwo = "";
var video ="";

$("#food-button").on("click", function(){
    var mainIngredient = $("#food-input").val();
    var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + mainIngredient
    console.log(queryURL);
    console.log(mainIngredient);

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var results = response.meals;
        for (var i = 0; i < results.length; i++){
            var recbox = $("<div class='item'>");

            var recImage = $("<img class='foodimage'>");

            var apiImg = results[i].strMealThumb;

            var recTitle = results[i].strMeal;

            var picTitle = $("<p>").text(recTitle);
            
            recImage.attr("src", apiImg);

            var recID = results[i].idMeal;

            recImage.attr("data-id",recID);

            recbox.append(picTitle);

            recbox.append(recImage);

            $("#rec").append(recbox);
            }
      });
      $("#rec").empty()
})

$(document).on("click",".foodimage", function(){

    $("#rec").empty();

    var recID = $(this).attr("data-id");
    var queryURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +recID;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var results = response.meals;

        console.log('results',results);

        var ingredientList = $("<ul>");
        var amount = $("<ul>")

        for(var i = 1; i <= 20; i++){ 
        // console.log('number to string for i', 'stringIngrdient'+i.toString());
        first();
        second();
        inOne = response.meals.strIngredient1;
        inTwo = response.meals.strIngredient2;
        video = response.meals.strYoutube;

        var ingredientKey = 'strIngredient'+i.toString();
        var ingredient = results[0][ingredientKey];
        if (ingredient.length > 0) {
            console.log('ingredient', ingredient)

            var listItem = $("<li>").text(ingredient);

            ingredientList.append(listItem);


            $("#ingredients").append(ingredientList);

            // this is the value of each valid ingredient 
        }
        }

        for(var i = 1; i <= 20; i++){
            var ingamountKey = 'strMeasure'+i.toString();
            var ingredientMeasure = results[0][ingamountKey];
            
            if (ingredientMeasure.length > 0){
                
                var amountlist = $("<li>").text(ingredientMeasure);

                amount.append(amountlist);

                $("#amount").append(amount);
            }
        }
      });
})

// first ingredient walmart search
function first(event) {
    event.preventDefault();
    // Here we grab the text from the input box
    // var search = $("#food-input").val();
    // Here we construct our URL
    var queryURL = "http://api.walmartlabs.com/v1/search?apiKey=avwfn326ass7ejz97edr7w49&ls&query=" + inOne;

    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: "jsonp"

    }).then(function(response) {
      console.log(response);
      var results = response.items;
      var price = "$" + results[0].salePrice + "<br>";
      var name = results[0].name + "<br>";
      var image = $("<img>" + "<br>");
      image.attr("src",results[0].mediumImage);
      var site = results[0].productUrl;
      var link = ("<div><a href=" + site + " >Walmart.com</a></div>")

      $("#food-view").append(image);
      $("#food-view").append(price);
      $("#food-view").append(name);
      $("#food-view").append(link);

    });
  }
//   second ingredient walmart search
  function second(event) {
    event.preventDefault();
    // Here we grab the text from the input box
    // var search = $("#food-input").val();
    // Here we construct our URL
    var queryURL = "http://api.walmartlabs.com/v1/search?apiKey=avwfn326ass7ejz97edr7w49&ls&query=" + inTwo;

    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: "jsonp"

    }).then(function(response) {
      console.log(response);
      var results = response.items;
      var price = "$" + results[0].salePrice + "<br>";
      var name = results[0].name + "<br>";
      var image = $("<img>" + "<br>");
      image.attr("src",results[0].mediumImage);
      var site = results[0].productUrl;
      var link = ("<div><a href=" + site + " >Walmart.com</a></div>")

      $("#food-view").append(image);
      $("#food-view").append(price);
      $("#food-view").append(name);
      $("#food-view").append(link);

    });
  }
