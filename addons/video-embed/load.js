( function(){
	'use strict';

	var videos = document.querySelectorAll( '.video-embed' );

	function buildVideoPlayer( container ){
		var embed_url = container.getAttribute( 'data-embed-url' );
		var iframe = document.createElement( 'iframe' );
		iframe.setAttribute( 'width', 1640 );
		iframe.setAttribute( 'height', 923 );
		iframe.setAttribute( 'src', embed_url );
		iframe.setAttribute( 'frameborder', 0 );
		iframe.setAttribute( 'allowfullscreen', true );
		classie.addClass( container, 'flex-container' );
		classie.removeClass( container, 'unplayed' );
		container.innerHTML = '';
		container.appendChild( iframe );
	}

	function handleVideoClick( container ){
		return function( event ){
			if( event.preventDefault ){
				event.preventDefault();
			}
			else {
				event.returnValue = false;
			}
			buildVideoPlayer( container );
		};
	}

	for( var j = 0; j < videos.length; j += 1 ){
		eventie.bind( videos[j], 'click', handleVideoClick( videos[j] ) );
	}

} )();