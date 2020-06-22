
    // Example queryURL for Giphy API
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=d0zgc0GcMv2r08SDI5hJCS28BAP34oqJ
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      
      }
      
    );
