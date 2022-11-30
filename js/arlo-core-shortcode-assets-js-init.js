
(function($, fnFrontend){
	"use strict";
	
	
	
	var FrenifyArlo = {
		
		isAdmin: false,
		adminBarH: 0,
		
		init: function() {
			
			if($('body').hasClass('admin-bar')){
				FrenifyArlo.isAdmin 	= true;
				FrenifyArlo.adminBarH 	= $('#wpadminbar').height();
			}

			var widgets = {
				'frel-blog-group.default' : FrenifyArlo.blogGroup,
			};

			$.each( widgets, function( widget, callback ) {
				fnFrontend.hooks.addAction( 'frontend/element_ready/' + widget, callback );
			});
		},
		
		
		
		
		blogGroup: function(){
			FrenifyArlo.BgImg();
			FrenifyArlo.ImgToSVG();
			FrenifyArlo.isotopeFunction();
		},
		
		
		
		/* COMMMON FUNCTIONS */
		BgImg: function(){
			var div = $('*[data-bg-img]');
			div.each(function(){
				var element = $(this);
				var attrBg	= element.attr('data-bg-img');
				var dataBg	= element.data('bg-img');
				if(typeof(attrBg) !== 'undefined'){
					element.css({backgroundImage:'url('+dataBg+')'});
				}
			});
		},
		
		ImgToSVG: function(){
			
			$('img.arlo_w_fn_svg').each(function(){
				var $img 		= $(this);
				var imgClass	= $img.attr('class');
				var imgURL		= $img.attr('src');

				$.get(imgURL, function(data) {
					var $svg = $(data).find('svg');
					if(typeof imgClass !== 'undefined') {
						$svg = $svg.attr('class', imgClass+' replaced-svg');
					}
					$img.replaceWith($svg);

				}, 'xml');

			});
		},
		
		jarallaxEffect: function(){
			$('.jarallax').each(function(){
				var element			= $(this);
				var	customSpeed		= element.data('speed');

				if(customSpeed !== "undefined" && customSpeed !== ""){
					customSpeed = customSpeed;
				}else{
					customSpeed 	= 0.5;
				}
				element.jarallax({
					speed: customSpeed,
					automaticResize: true
				});
			});
		},
		isotopeFunction: function(){
			var masonry = $('.fn_cs_masonry');
			if($().isotope){
				masonry.each(function(){
					$(this).isotope({
					  itemSelector: '.fn_cs_masonry_in',
					  masonry: {

					  }
					});
				});
			}
		},
		
		lightGallery: function(){
			if($().lightGallery){
				// FIRST WE SHOULD DESTROY LIGHTBOX FOR NEW SET OF IMAGES

				var gallery = $('.fn_cs_lightgallery');

				gallery.each(function(){
					var element = $(this);
					element.lightGallery(); // binding
					if(element.length){element.data('lightGallery').destroy(true); }// destroying
					$(this).lightGallery({
						selector: ".lightbox",
						thumbnail: 1,
						loadYoutubeThumbnail: !1,
						loadVimeoThumbnail: !1,
						showThumbByDefault: !1,
						mode: "lg-fade",
						download:!1,
						getCaptionFromTitleOrAlt:!1,
					});
				});
			}	
		},
	};
	
	$( window ).on( 'elementor/frontend/init', FrenifyArlo.init );
	
	
	$( window ).on('resize',function(){
		setTimeout(function(){
			FrenifyArlo.isotopeFunction();
		},700);
	});
	$( window ).on('load',function(){
		FrenifyArlo.isotopeFunction();
	});
	
})(jQuery, window.elementorFrontend);