theMovieDb.common.api_key = "96e769aaf4e0ffe7112b1cc2cbdd9db9";

function successCB(data) {
    var obj = $.parseJSON(data);
    obj.results.forEach(function(item){
    	console.log(theMovieDb.common.images_uri + item.poster_path)
    })
};

function errorCB(data) {
            console.log("Error callback: " + data);
    };

theMovieDb.discover.getMovies({'year':2016}, successCB, errorCB)
