"use strict";

alert("we have a connection");

//Things we need to build: function to search for the specific article by name

var queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=trump&api-key=jNsOaY3zXnloxdZaaFOJAhwhA5CCIvRZ";
console.log(queryURL);

$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function(response) {
    // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.

    // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

    console.log(response.response.docs[0].headline.main);

    console.log(response.response.docs[0].lead_paragraph);

    console.log(queryURL);
  })

  .catch(function(error) {
    console.log(error);
  });

//   var queryURL =
//     "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=c2d964f3-c207-4d2d-ad02-7adb6bc7268e";

//   console.log("We're in the first function");

//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(data) {
//     // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
//     // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.
//     console.log("We're in the second function");
//     console.log(data.response.docs[0].headline.main);
//   });
// }
