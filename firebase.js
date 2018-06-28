
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



