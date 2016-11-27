/*
 * Getting Data JS
 *
 */

 //predefined functions by the writer of the library

    function successCB(data) {
        return data;
};

    function errorCB() {
            console.log("Error callback");
    };


//getting the data
	var szamok = 5;
//	theMovieDb.genres.getMovies({"id": 28}, successCB, errorCB)

	var test = function(){
		theMovieDb.genres.getMovies({"id": 28}, successCB, errorCB)
	}
