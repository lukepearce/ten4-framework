( function(){
	'use strict';

	// Multiple slideshows
	var slideshows = document.querySelectorAll( '.slideshow' );
	for( var i = 0; i < slideshows.length; i += 1 ){
		new Ten4Slideshow( slideshows );
	}

	// Single slideshow
	var slideshow = new Ten4Slideshow( document.querySelector( '.slideshow' ) );
	slideshow.slide(); // slide forwards
	slideshow.slide( true ); // slide backwards

} )();