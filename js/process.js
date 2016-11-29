theMovieDb.common.api_key = "96e769aaf4e0ffe7112b1cc2cbdd9db9";
var genreAPI = "https://api.themoviedb.org/3/genre/movie/list?api_key=96e769aaf4e0ffe7112b1cc2cbdd9db9&language=en-US"

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


function getGenre(genreAPI, genre)
{
  $.getJSON(genreAPI, function(data)
    {$.map(data.genres, function(obj){
        if (obj.name == genre){
          genreIndex = obj.id;
          console.log(genreIndex);
        }
    }); console.log(genreIndex)
  }, 
  ); 
} 


$(document).ready(function(){
    $("#searchbutton").click(function(){
      var actor = $('#input-25').val();
      var genre = $('#input-26').val();
      var rating = $('#input-27').val();
      var year = $('#input-28').val();
      console.log(actor + genre + rating + year)
      getGenre(genreAPI, genre)
      // console.log(genreIndex)
      // theMovieDb.discover.getMovies({'year': year , 'with_genres' : indexGenre }, successCB, errorCB)

    })


    });


