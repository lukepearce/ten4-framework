( function(){
	'use strict';

	function popUpWindow( url ){
		var popup_width = 550;
		var popup_height = 420;
		var x = ( window.screen.width / 2 ) - ( popup_width / 2 );
		var y = ( window.screen.height / 2 ) - ( popup_height / 2 ) - 50;
		var new_window = window.open( url, '', 'dependent=1,height=' + popup_height.toString() + ',width=' + popup_width.toString() + ',left=' + x.toString() + ',top=' + y.toString() + ',resizable=0,status=0' );
		if( window.focus ){
			new_window.focus();
		}
		return false;
	}

	var social_share_buttons = document.querySelectorAll( '.social-share' );
	for( var i = 0; i < social_share_buttons.length; i += 1 ){
		eventie.bind( social_share_buttons[i], 'click', handleSocialShare( social_share_buttons[i] ) );
	}

	function handleSocialShare( share_button ){
		var url = share_button.getAttribute( 'data-share-url' );
		return function( event ){
			event.preventDefault();
			popUpWindow( url );
		};
	}

} )();