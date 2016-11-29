theMovieDb.common.api_key = "96e769aaf4e0ffe7112b1cc2cbdd9db9";

function successCB(data) {
    var obj = $.parseJSON(data);
    obj.results.forEach(function(item){
    	var url = theMovieDb.common.images_uri + item.poster_path;
    	var img = $(document.createElement("img"));
      	img.attr('src', url);
      	img.appendTo(".pics")
    })
};

function errorCB(data) {
            console.log("Error callback: " + data);
    };


theMovieDb.discover.getMovies({'year': 2009 }, successCB, errorCB)
