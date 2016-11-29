theMovieDb.common.api_key = "96e769aaf4e0ffe7112b1cc2cbdd9db9";

function successCB(data) {
    var obj = $.parseJSON(data);
    obj.results.slice(0,4).forEach(function(item){
    	var url = theMovieDb.common.images_uri + item.poster_path;
    	var img = $(document.createElement("img"));
      	img.attr('src', url);
      	img.appendTo(".pics")
    })
};

function errorCB(data) {
            console.log("Error callback: " + data);
    };


$(document).ready(function(){
    $("#searchbutton").click(function(){
      var actor = $('#input-25').val();
      var genre = $('#input-26').val();
      var rating = $('#input-27').val();
      var year = $('#input-28').val();
      console.log(actor + genre + rating + year)
      console.log("genres")

      theMovieDb.discover.getMovies({'year': year , 'with_genres' : 16 }, successCB, errorCB)

    });


    });


