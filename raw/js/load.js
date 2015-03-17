( function(){
	'use strict';

	if( document.cookie.indexOf( 'seenCookieNotice' ) === -1 ){
		classie.addClass( document.body, 'show-cookie-notice' );
		document.cookie = 'seenCookieNotice=yes;path=/;max-age=31536000';
		eventie.bind( document.querySelector( '.cookie-notice button' ), 'click', function(){
			classie.removeClass( document.body, 'show-cookie-notice' );
		} );
	}

} )();