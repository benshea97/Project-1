
$("#walmart-button").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var search = $("#food-input").val();

    // Here we construct our URL
    var queryURL = "http://api.walmartlabs.com/v1/search?apiKey=avwfn326ass7ejz97edr7w49&ls&query=" + search;

    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: "jsonp"
    }).then(function(response) {
      console.log(response);
    });


    // -----------------------------------------------------------------------

  });

  $("#food-button").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var foodSearch = $("#food-input").val();


    // Here we construct our URL
    var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + foodSearch;

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function(response) {
      console.log(response);
      $("#food-view").text(JSON.stringify(response))
    });


    // -----------------------------------------------------------------------

  });


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD22zMFQLX0LSzrND6ccKiFtjQXo4rQFlg",
    authDomain: "recipe-440f0.firebaseapp.com",
    databaseURL: "https://recipe-440f0.firebaseio.com",
    projectId: "recipe-440f0",
    storageBucket: "",
    messagingSenderId: "383790739796"
  };

  firebase.initializeApp(config);

  var database = firebase.database();


    var search = "";
   
    

    $("#add-search").on("click", function(event) {
        console.log("click heard");

        event.preventDefault();
  
        search = $("#search").val().trim();
      
        console.log(search);
        
        database.ref().push({
          search: search,
          
        });
       
      });

      database.ref().on("child_added", function(snapshot) {
        // Change the HTML to reflect
        console.log(snapshot.val().search);
        $("#search").append(snapshot.val().search + "<br");
    
    
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);

    });



