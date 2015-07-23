( function(){
	'use strict';

	var Ten4Slideshow = window.Ten4Slideshow = function( container ){
		this.slides = container.querySelectorAll( container.getAttribute( 'data-slides' ) );
		this.data_index_label = document.getElementById( container.getAttribute( 'data-index-label' ) );
		this.top_slide_i = 0;
		for( var i = 0; i < this.slides.length; i += 1 ){
			classie.addClass( this.slides[i], 'slideshow__slide' );
		}
		classie.addClass( this.slides[this.top_slide_i], 'slideshow__slide--top' );
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

	Ten4Slideshow.prototype.slideTo = function( index ){
		if( index < 0 || index > ( this.slides.length - 1 ) ){
			return;
		}
		for( var i = 0; i < this.slides.length; i += 1 ){
			classie.removeClass( this.slides[i], 'slideshow__slide--behind' );
		}
		this.updateIndexLabel( index );
		// This fixes an issue with classes being applied simultaneously - a 1ms delay prevents it
		window.setTimeout( ( function( slideshow ){
			return function(){
				classie.removeClass( slideshow.slides[slideshow.top_slide_i], 'slideshow__slide--top' );
				classie.addClass( slideshow.slides[slideshow.top_slide_i], 'slideshow__slide--behind' );
				classie.addClass( slideshow.slides[index], 'slideshow__slide--top' );
				slideshow.top_slide_i = index;
			};
		} )( this ), 1 );
	};

	Ten4Slideshow.prototype.slide = function( backwards ){
		var next_slide_i = this.top_slide_i + ( backwards ? -1 : 1 );
		if( next_slide_i < 0 ){
			next_slide_i = this.slides.length - 1;
		}
		else if( next_slide_i > ( this.slides.length - 1 ) ){
			next_slide_i = 0;
		}
		this.slideTo( next_slide_i );
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