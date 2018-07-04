
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCD1bODZOBTbf86Xw6IGD06bhQiC94RrY8",
    authDomain: "eat-easy-f802a.firebaseapp.com",
    databaseURL: "https://eat-easy-f802a.firebaseio.com",
    projectId: "eat-easy-f802a",
    storageBucket: "",
    messagingSenderId: "161860057580"
  };
  firebase.initializeApp(config);

//Variable to reference database 
      var database = firebase.database();

//initial values
var userSearch = "";
var recipesSaved = "";

//Create function that prevents default behavior in the case of an error and that listens for click event
      $("#search-button").on("click", function(event) {
      //Prevent default behavior
      event.preventDefault();
 
      $("user-recipe-input").on("click", function(event) {
      event.
      }

      userSearch = $("#user-search-input").val().trim()
      userRecipe = $("#user-recipe-input").val().trim()

//Next, because we want to create a collection, we use push to push the added train object to the database.
      database.ref().push({
        userSearch: searchesSaved
        recipesSaved: recipesSaved
        });

        
      });

database.ref().on("value", function(snapshot) {

//Update containers that house searches and saved recipes
$("user-search-input").text(snapshot.val().userSearch);
$("user-recipe-input").text(snapshot.val().recipeSaved);

















