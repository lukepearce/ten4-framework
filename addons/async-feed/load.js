( function(){
	'use strict';

	function handleAjaxSuccess( feed_container ){
		return function( data ){
			classie.addClass( feed_container, 'loaded' );
			feed_container.innerHTML = data;
		};
	}

	function handleAjaxError( feed_container ){
		return function(){
			classie.addClass( feed_container, 'loaded' );
			feed_container.innerHTML = '<p class="p">Feed failed to load.</p>';
		};
	}

	var feed_containers = document.querySelectorAll( '.js-external-feed' );
	for( var i = 0; i < feed_containers.length; i += 1 ){
		var url = feed_containers[i].getAttribute( 'data-feed-url' );
		if( !url ){
			continue;
		}
		ajax( {
			type: 'get',
			url: url,
			timeout: 8000,
			onSuccess: handleAjaxSuccess( feed_containers[i] ),
			onError: handleAjaxError( feed_containers[i] )
		} );
	}

} )();