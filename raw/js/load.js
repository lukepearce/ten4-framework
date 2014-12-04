( function(){
	'use strict';

	if( document.cookie.indexOf( 'seenCookieNotice' ) === -1 ){
		classie.addClass( document.body, 'show-cookie-notice' );
		document.cookie = 'seenCookieNotice=yes;path=/;max-age=31536000';
	}

} )();