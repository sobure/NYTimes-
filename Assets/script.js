var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&begin_date=" + yearStart + "&end_date=" + yearEnd + "&api-key=ZqwQqIWuyM9laRluApcFhucWcDEjlB6O"


    var query = $('#search-term').val();
    var yearStart = $('#start-year').val();
    var yearEnd = $('#end-year').val();
             

    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      console.log(response);


      
      });
