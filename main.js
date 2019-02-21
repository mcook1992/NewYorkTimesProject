"use strict";

alert("we have a connection");

//Things we need to build: function to search for the specific article by name

$("#searchButton").on("click", function() {
  var searchTerm = "Trump";

  // Once we can actually accept user input, we can set the variable to whatever the value of the search term they put in is (using code commented below). For now, just marking it as Trump for funsies.
  //  var searchTerm = $("#searchInput")
  // //   .val()
  //   .trim();
  // console.log(searchTerm);

  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=" +
    searchTerm +
    "&api-key=jNsOaY3zXnloxdZaaFOJAhwhA5CCIvRZ";
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.

      var searchValue = $("#searchInput")
        .val()
        .trim();

      // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

      console.log(response.response.docs[0].headline.main);
      $("#articleTitle").text(response.response.docs[0].headline.main);

      console.log(response.response.docs[0].lead_paragraph);

      $("#articleText").text(response.response.docs[0].lead_paragraph);

      var newSearchHistoryTerm = $("<div>");
      newSearchHistoryTerm.text(searchTerm);
      $("#searchHist").append(newSearchHistoryTerm);
    })

    //this catches any errors that might pop up
    .catch(function(error) {
      console.log(error);
    });
});
