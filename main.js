$("#find-food").on("click", function(event) {

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

// This .on("click") function will trigger the AJAX Call
      $("#find-food").on("click", function(event) {
        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();
        // Here we grab the text from the input box
        var search = $("#food-input").val();
        // Here we construct our URL
        var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + search;
        $.ajax({
          url: queryURL,
          method: "GET",
        }).then(function(response) {
          console.log(response);
        });
        // -----------------------------------------------------------------------
      });
