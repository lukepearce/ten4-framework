( function(){
	'use strict';

	var Ten4Slideshow = window.Ten4Slideshow = function( container ){
		this.slides = container.querySelectorAll( container.getAttribute( 'data-slides' ) );
		this.data_index_label = document.getElementById( container.getAttribute( 'data-index-label' ) );
		for( var i = 0; i < this.slides.length; i += 1 ){
			classie.addClass( this.slides[i], 'slideshow__slide' );
		}
		classie.addClass( this.slides[0], 'slideshow__slide--top' );
		this.addSlideProp( container );
		var next = document.getElementById( container.getAttribute( 'data-next' ) );
		if( next ){
			eventie.bind( next, 'click', ( function( slideshow ){
				return function(){
					classie.addClass( container, 'slideshow--swap' );
					slideshow.slide();
				};
			} )( this ) );
		}
		var previous = document.getElementById( container.getAttribute( 'data-previous' ) );
		if( previous ){
			eventie.bind( previous, 'click', ( function( slideshow ){
				return function(){
					classie.removeClass( container, 'slideshow--swap' );
					slideshow.slide( true );
				};
			} )( this ) );
		}
	};

	Ten4Slideshow.prototype.slide = function( backwards ){
		var current_slide_i = 0;
		for( var i = 0; i < this.slides.length; i += 1 ){
			classie.removeClass( this.slides[i], 'slideshow__slide--behind' );
			if( classie.hasClass( this.slides[i], 'slideshow__slide--top' ) ){
				current_slide_i = i;
			}
		}
		var next_slide_i = null;
		if( backwards ){
			next_slide_i = current_slide_i - 1;
			if( next_slide_i < 0 ){
				next_slide_i = this.slides.length - 1;
			}
		}
		else{
			next_slide_i = current_slide_i + 1;
			if( next_slide_i > ( this.slides.length - 1 ) ){
				next_slide_i = 0;
			}
		}
		this.updateIndexLabel( next_slide_i );
		// This fixes an issue with classes being applied simultaneously - a 1ms delay prevents it
		window.setTimeout( ( function( slideshow ){
			return function(){
				classie.removeClass( slideshow.slides[current_slide_i], 'slideshow__slide--top' );
				classie.addClass( slideshow.slides[current_slide_i], 'slideshow__slide--behind' );
				classie.addClass( slideshow.slides[next_slide_i], 'slideshow__slide--top' );
			};
		} )( this ), 1 );
	};

	Ten4Slideshow.prototype.updateIndexLabel = function( slide_index ){
		if( !this.data_index_label ){
			return;
		}
		this.data_index_label.innerHTML = ( slide_index + 1 ).toString();
	};

	Ten4Slideshow.prototype.addSlideProp = function( container ){
		var slideshow_prop = this.getTallestSlide().cloneNode( true );
		classie.removeClass( slideshow_prop, 'slideshow__slide' );
		classie.addClass( slideshow_prop, 'slideshow__prop' );
		container.appendChild( slideshow_prop );
	};

	Ten4Slideshow.prototype.getTallestSlide = function(){
		var tallest = this.slides[0];
		for( var i = 1; i < this.slides.length; i += 1 ){
			if( this.slides[i].clientHeight > tallest.clientHeight ){
				tallest = this.slides[i];
			}
		}
		return tallest;
	};

} )();