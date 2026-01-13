
(function($, fnFrontend){
	"use strict";
	

	
	var Frel = {
		
		isAdmin: false,
		adminBarH: 0,
		
		init: function() {
			
			if($('body').hasClass('admin-bar')){
				Frel.isAdmin 	= true;
				Frel.adminBarH 	= $('#wpadminbar').height();
			}

			var widgets = {
				'frel-hero-header.default' : Frel.frel_all_functions,
				'frel-info-list.default' : Frel.frel_all_functions,
				'frel-about.default' : Frel.parallaxMaster,
				'frel-info-rating.default' : Frel.infoRatingCarousel,
				'frel-services.default' : Frel.serviceShortcode,
				'frel-experience.default' : Frel.experienceShortcode,
				'frel-project-sticky.default' : Frel.projectStickyShortcode,
				'frel-support-block.default' : Frel.supportBlockShortcode,
				'frel-triple-blog.default' : Frel.tripleBlogShortcode,
				'frel-check-list.default' : Frel.ImgToSVG,
				'frel-accordion.default' : Frel.accordionFunction,
				'frel-location-list.default' : Frel.locationListFunction,
				'frel-main-slider-with-content.default' : Frel.mainSliderWithContnetFunction,
				'frel-introduce.default' : Frel.introduceFunction,
				'frel-principles.default' : Frel.principlesFunction,
				'frel-counter-with-content.default' : Frel.counterWithContentFunction,
				'frel-counter-with-rating.default' : Frel.counterWithContentFunction,
				'frel-project-sticky-modern.default' : Frel.projectStickyShortcode,
				'frel-services-classic.default' : Frel.ImgToSVG,
				'frel-triple-blog-modern.default' : Frel.tripleBlogShortcode,
				'frel-hero-header-modern.default' : Frel.frel_all_functions,
				'frel-principles-modern.default' : Frel.frel_all_functions,
				'frel-service-query.default' : Frel.serviceQueryFunction,
				'frel-full-custom-list.default' : Frel.serviceQueryFunction,
				'frel-about-with-rating.default' : Frel.frel_all_functions,
				'frel-single-testimonial.default' : Frel.frel_all_functions,
				'frel-project-sticky-full.default' : Frel.projectStickyShortcode,
				'frel-kenburnsy.default' : Frel.kenburnsyShortcode,
				'frel-arrow-link.default' : Frel.ImgToSVG,
				'frel-alpha-slider.default' : Frel.alphaSliderFunction,
				'frel-portfolio-details.default' : Frel.frel_all_functions,
				'frel-hero-header-all-in-one.default' : Frel.heroHeaderAllInOne,
				'frel-about-text-slider.default' : Frel.aboutTextSlider,
				'frel-about-text-slider-classic.default' : Frel.aboutTextSlider,
				'frel-progress-bar.default' : Frel.progress,
				'frel-progress-bar-with-desc.default' : Frel.progress,
				'frel-project-category-filter.default' : Frel.projectCategoryFilter,
				'frel-why-choose-us.default' : Frel.whyChooseUs,
				'frel-team-member.default' : Frel.teamMemberFunctions,
				'frel-single-testimonial-parallax.default' : Frel.singleTestimonialParallax,
				'frel-partners.default' : Frel.partners,
				'frel-useful-information.default' : Frel.ImgToSVG,
				'frel-portfolio-images.default' : Frel.BgImg,
				'frel-triple-blog-shadow.default' : Frel.BgImg,
				'frel-counter-with-description.default' : Frel.counterWithContentFunction,
				'frel-triple-blog-shadow-a.default' : Frel.BgImg,
				'frel-hero-header-elegant.default' : Frel.heroHeaderAllInOne,
				'frel-portfolio-video-button.default' : Frel.magnific_popup,
				'frel-personal-video.default' : Frel.personalVideo,
				'frel-portfolio-demo-one.default' : Frel.portfolio_all_functions,
				'frel-portfolio-demo-two.default' : Frel.portfolioDemoSecond,
				'frel-interactive-list-vertical-full.default' : Frel.interactiveListVertical,
				'frel-interactive-list-vertical-half.default' : Frel.interactiveListVerticalHalf,
				'frel-interactive-list-horizontal-half.default' : Frel.interactiveListHorizontalHalf,
				'frel-interactive-flickity.default' : Frel.interactiveFlickityFunctions,
				'frel-split-screen.default' : Frel.splitScreenFunctions,
				'frel-background-shapes.default' : Frel.ImgToSVG,
				'frel-about-minimal.default' : Frel.frel_all_functions,
				'frel-universal-list-filter-masonry.default' : Frel.filterj,
				'frel-intro-button.default' : Frel.ImgToSVG,
				'frel-intro-demo-list.default' : Frel.introAllFunctions,
				'frel-intro-testimonials.default' : Frel.introTestimonialsFunctions,
				'frel-half-slider.default' : Frel.halfSliderScroll,
				'frel-personal-hero.default' : Frel.personalHeroFunctions,
				'frel-personal-portfolio-list.default' : Frel.personalAllfunctions,
				'frel-personal-progress.default' : Frel.personalPgrogressFunctions,
				'frel-personal-slider.default' : Frel.portfolio_slider,
				'frel-features-icon-list.default' : Frel.ImgToSVG,
				'frel-portfolio-reviews.default' : Frel.personalReviewsFunctions,
				'frel-portfolio-news.default' : Frel.BgImg,
				'frel-personal-news.default' : Frel.personalNews,
				'frel-personal-partners.default' : Frel.reviewSlider,
				'frel-contact.default' : Frel.contactShortcode,
				'frel-personal-services.default' : Frel.BgImg,				
				'frel-personal-services-second.default' : Frel.BgImg,				
				'frel-portfolio-single-title-hero.default' : Frel.pSingleTitleHero,
				'frel-portfolio-single-prevnext.default' : Frel.portfolioSinglePrevnext,
				'frel-after-before.default' : Frel.imageAfterBefore,
				'frel-share.default' : Frel.shareFunction,
				'frel-counter-with-caption.default' : Frel.counter,
				'frel-text-with-totop.default' : Frel.toTopJumper,
				'frel-video.default' : Frel.magnificPopup,
				'frel-half-image-text.default' : Frel.halfImageText,
				'frel-gallery.default' : Frel.allGalleryFunctions,
				'frel-posts.default' : Frel.allPostsFunctions,
				'frel-interactive-all.default' : Frel.interactiveAll,
				'frel-partners-second.default' : Frel.partnersSecondFunction,
				'frel-about-with-video.default' : Frel.aboutWithVideoFunctions,
				'frel-project-team-list.default' : Frel.projectTeamList,
				'frel-portfolio-slider.default' : Frel.porftfolioSliderFunctions,
				'frel-about-intro.default' : Frel.aboutIntroFunctions,
				'frel-services-with-gallery.default' : Frel.serviceWithGallery,
				'frel-creative-agency.default' : Frel.BgImg,
				'frel-image-with-name.default' : Frel.BgImg,
				'frel-agency-blog.default' : Frel.agencyBlogFunctions,
				'frel-button-extra.default' : Frel.ImgToSVG,
				'frel-process.default' : Frel.ImgToSVG,
				'frel-pricing.default' : Frel.pricingFunctions,
				'frel-posts-slider.default' : Frel.postSliderFunctions,
			};

			$.each( widgets, function( widget, callback ) {
				fnFrontend.hooks.addAction( 'frontend/element_ready/' + widget, callback );
			});
		},
		
		
		teamMemberFunctions: function(){
			Frel.BgImg();
			Frel.ImgToSVG();
			Frel.teamMemberPopup();
		},
		
		teamMemberPopup:function(){
		
			var team = $('.fn_cs_team_member[data-popup="yes"]');
			
			if(team.length){
				
				var member		= $('.fn_cs_team_member');
				var workerBox	= '<div class="fn_cs_worker_boxx"><span class="overlay"></span><div class="info_box"><div class="info_box_inner"><div class="image"><img src="" alt="" /><div class="main"><div class="trigger"><a href="#"></a></div></div></div><div class="worker_social"><ul></ul></div><div class="main_content"><div class="name_holder"><h3></h3><span></span></div><div class="description scrollable"></div></div></div></div></div>';
				var button		= member.find('.my_button');
				
				button.on('click',function(){
					var element 		= $(this);
					var parent 			= element.closest('.fn_cs_team_member');
					var description 	= parent.find('.hidden_desc').html();
					var title 			= parent.find('.title_holder h3').html();
					var occ 			= parent.find('.title_holder p span').html();
					var list 			= parent.find('ul').html();
					var imgURL			= parent.find('.original_img').attr('data-bg-img');
					var placeholder 	= parent.find('.hidden_image img').attr('src');
					parent.addClass('view');
					
					
					if(!$('.fn_cs_worker_boxx').length){
						$('body').append(workerBox);
					}
					var box				= $('.fn_cs_worker_boxx');
					
					box.addClass('opened');
					
					box.find('.name_holder h3').html(title);
					box.find('.name_holder span').html(occ);
					box.find('.description').html(description);
					box.find('.worker_social ul').html(list);
					box.find('.main').css({backgroundImage: 'url('+imgURL+')'});
					box.find('.image img').attr('src',placeholder);					
					
					Frel.teamMemberScrollable();
					closerFunction();
					return false;
				});
				
				var closerFunction = function(){
					
					var closer		= $('.fn_cs_worker_boxx .trigger a,.fn_cs_worker_boxx .overlay');
					
					closer.off().on('click',function(){
						var element = $(this);
						element.closest('.fn_cs_worker_boxx').removeClass('opened');
						$('.fn_cs_team_member').removeClass('view');
						return false;
					});
				};
			}
			
		},
		
		teamMemberScrollable: function(){

			var H				= $(window).height();
			var workerBox		= $('.fn_cs_worker_boxx');
			var scrollable		= workerBox.find('.main_content .scrollable');
			var mainPart		= workerBox.find('.main_content .description');
			var image			= workerBox.find('.info_box').width();
			var social			= workerBox.find('.worker_social').outerHeight();
			var nameHolder		= workerBox.find('.main_content .name_holder').outerHeight();

			mainPart.css({height:H-image-social-nameHolder});

			scrollable.each(function(){
				var element		= $(this);

				element.css({height: H-image-social-nameHolder}).niceScroll({
					touchbehavior:false,
					cursorwidth:0,
					autohidemode:true,
					cursorborder:"0px solid #333"
				});
			});

		},
		
		
		aboutIntroFunctions: function(){
			Frel.BgImg();
			Frel.aboutTimelineSlider();
		},
		
		agencyBlogFunctions: function(){
			Frel.BgImg();
			Frel.agencyBlogListHeight();
		},
		
		businessFunctions: function(){
			Frel.BgImg();
			Frel.businessSlider();
		},
		
		pricingFunctions: function(){
			Frel.ImgToSVG();
			Frel.pricingSwitcher();
		},
		
		postSliderFunctions: function(){
			Frel.postsSlider();
			Frel.BgImg();
		},
		
		pricingSwitcher: function(){
			var mySwitch	= $('.fn_cs_pricing_switcher input');
			
			mySwitch.on('click',function(){
				
				var element	= $(this);
				var ul 		= element.closest('.fn_cs_pricing').find('ul.fn_column');
				
				ul.toggleClass('active');
				
			});
		},
		
		
		
		
		postsSlider: function(){
			Frel.BgImg();
			$('.fn_cs_posts_slider').each(function(){
				var element 	= $(this);
				var container 	= element.find('.swiper-container');
				var mySwiper 	= new Swiper (container, {
					loop: true,
//					effect: 'fade',
					slidesPerView: 1,
					spaceBetween: 0,
					speed: 1600,
					loopAdditionalSlides: 20,
					hashNavigation: {
						watchState: true,
					},
					pagination: {
						el: '.fn_cs_swiper_number_progress',
						type: 'custom', // progressbar
						renderCustom: function (swiper,current,total) {
							var progressDOM	= container.find('.fn_cs_swiper_number_progress');
							progressDOM.find('.progress_wrap').removeClass('active');
							progressDOM.find('.progress_wrap').eq(current-1).addClass('active');
						}
					},
					autoplay: {
						delay: 7000,
						disableOnInteraction: false
					},
				});
			});
		},
		
		
		
		
		
		agencyBlogListHeight: function(){
			var ww					= $(window).width();
			if(ww >= 1040){
				var agencies		= $('.fn_cs_agency_blog .in');
				if(agencies.length){
					agencies.each(function(){
						var agency 		= $(this);
						var left_image 	= agency.find('.left img');
						var list_height	= agency.find('.right ul').height();
						left_image.css({height:list_height+'px'});
					});
				}
			}
		},
		
		
		aboutTimelineSlider: function(){
			$('.fn_cs_about_intro').each(function(){
				var element 	= $(this);
				var container 	= element.find('.swiper-container');
				var mySwiper 	= new Swiper (container, {
					loop: true,
					effect: 'fade',
					slidesPerView: 1,
					spaceBetween: 0,
					speed: 1000,
					loopAdditionalSlides: 20,
					pagination: {
						el: '.fn_cs_swiper_vertical_progress',
						type: 'custom', // progressbar
						renderCustom: function (swiper,current,total) {
							// progress animation
							var scale,translateX;
							var progressDOM	= container.find('.fn_cs_swiper_vertical_progress');
							if(progressDOM.hasClass('fill')){
								translateX 	= '0px';
								scale		= parseInt((current/total)*100)/100;
							}else{
								scale 		= parseInt((1/total)*100)/100;
								translateX 	= (current-1) * parseInt((100/total)*100)/100 + '%';
							}
							progressDOM.find('.all span').css({transform:'translate3d(0px,'+translateX+',0px) scaleY('+scale+') scaleX(1)'});
						}
					},
					autoplay: {
						delay: 5000,
						disableOnInteraction: false
					},
				});
			});
		},
		
		
		serviceWithGallery: function(){
			Frel.serviceWithGallery_hover();
			Frel.BgImg();
			Frel.lightGallery();
		},
		
		
		serviceWithGallery_hover: function(){
			$('.fn_cs_services_gallery .list_inner li').on('mouseenter', function(){
				var item 				= $(this);
				if(!item.hasClass('active')){
					var parent 			= item.closest('.fn_cs_services_gallery'),
						items 			= parent.find('.list_inner li'),
						galleryItems 	= parent.find('.gallery_list').children(),
						index			= item.index();
					galleryItems.removeClass('active');
					items.removeClass('active');
					item.addClass('active');
					galleryItems.eq(index).addClass('active');
					galleryItems.find('li').removeClass('active');
					setTimeout(function(){
						galleryItems.eq(index).find('li').eq(0).addClass('active');
						galleryItems.eq(index).find('li').eq(1).addClass('active');
						galleryItems.eq(index).find('li').eq(2).addClass('active');
					},10);
				}
			});
		},
		
		projectTeamList: function(){
			Frel.BgImg();
			$('.fn_cs_project_team_list .team_list li').on('mouseenter', function(){
				$(this).addClass('hovered');
			}).on('mouseleave',function(){
				$(this).removeClass('hovered');	
			});
			$('.fn_cs_project_team_list .team_list .abs_img').on('mouseenter',function(){
				$('.fn_cs_project_team_list .team_list li').removeClass('hovered');
			});
		},
		
		porftfolioSliderFunctions: function(){
			Frel.BgImg();
			
			jQuery(".fn_cs_portfolio_slider .titlepart").niceScroll({
				cursorcolor: "#111", // change cursor color in hex
				cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
				cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
				cursorwidth: "0px", // cursor width in pixel (you can also write "5px")
				cursorborder: "none", // css definition for cursor border
				cursorborderradius: "3px", // border radius in pixel for cursor	
				background: "rgba(0,0,0,0.15)",
				autohidemode: false, // how hide the scrollbar works, possible values: 
			});
			
			var portfolioSlider = $('.fn_cs_portfolio_slider');
			
			if(portfolioSlider.length){
				var list	= $('.fn_cs_portfolio_slider .titlepart td');
				list.on('mouseenter',function(){
					var element = $(this);
					var slider	= element.closest('.fn_cs_portfolio_slider');
					var go		= slider.find('.gowithme');
					var elIndex = element.index()+1;
					if(!element.hasClass('active')){
						list.removeClass('active');
						element.addClass('active');
						slider.find('.mainpart_inner ul li').removeClass('active');
						slider.find('.mainpart_inner ul li:nth-child('+elIndex+')').addClass('active');
						go.css({transform: 'translateX('+(element.index()*410)+'px)'});
					}
				});
				
			}
			
		},
		
		personalVideo: function(){
			Frel.magnific_popup();
			Frel.verticalVideoFixer();
		},
		verticalVideoFixer: function(){
			var betaVideo = $('.fn_cs_personal_video[data-layout="beta"]');
			if(betaVideo.length){
				betaVideo.each(function(){
					var element 	= $(this);
					var bbH			= element.find('.abb').outerWidth()+105;
					var content		= element.find('.content');
					content.css({minHeight:bbH+'px'});
				});
			}	
		},
		
		personalNews: function(){
			Frel.BgImg();
			Frel.ImgToSVG();
		},
		
		personalHeroFunctions: function(){
			Frel.BgImg();
			Frel.ImgToSVG();
			$('#scene').parallax();
			
			
			// for delta type
			// 01-Jule-2020
			$('.fn_cs_personal_hero_header_delta .arrow').off().on('click',function(){
				var btn			= $(this);
				var href		= btn.attr('href');
				var scrollTop;
				if($(href).length){
					scrollTop 		= $(href).offset().top;
				}else{
					var hero		= btn.closest('.fn_cs_personal_hero_header_delta');
					var topOffset	= hero.offset().top;
					var height		= hero.height();
					scrollTop 		= topOffset+height-Frel.adminBarH;
				}
				$("html, body").animate({ scrollTop: scrollTop }, 1000);
				return false;
			});
		},
				
		/*---------------------------------------------------------------------------------------------*/
		
		recalcPartnerHeight: function(){
			var partners	= $('.fn_cs_partners_second');
			if(partners.length){
				partners.each(function(){
					var element 		= $(this);
					var listChildren 	= element.find('.left ul li');
					var heights			= [];
					var inner			= element.find('.left_inner');
					listChildren.each(function(){
						heights.push($(this).outerHeight());
					});
					var maxH			= Math.max.apply(null, heights);
					inner.css({minHeight: maxH+'px'});
				});
			}
		},
		
		partnersSecondFunction: function(){
			Frel.ImgToSVG();
			var partners	= $('.fn_cs_partners_second');
			if(partners.length){
				Frel.recalcPartnerHeight();
				var list	= $('.fn_cs_partners_second .right ul li');
				
				list.on('mouseenter',function(){
				var element 	= $(this);
					var elIndex	= element.index()+1;
					if(!element.hasClass('active')){
						list.removeClass('active');
						element.addClass('active');
						element.closest('.fn_cs_partners_second').find('.left ul li').removeClass('active');
						element.closest('.fn_cs_partners_second').find('.left ul li:nth-child('+elIndex+')').addClass('active');
					}
				});
			}
		},
		
		
		aboutWithVideoFunctions: function(){
			Frel.BgImg();
			Frel.magnific_popup();
		},
		
		interactive6: function(){
			
			var section					= $('.fn_cs_interactive_service');
			
			if(section.length){
				
				section.each(function(){
					var thisSection		= $(this);
					var listChildren	= thisSection.find('li');
					var newList			= '<div class="fn_cs_service_box"><div class="service_inner">';
					
					listChildren.each(function(i,e){
						var src,video;
						if($(e).hasClass('video')){
							video 		= $(e).find('.bg_video_wrapper').html();
							newList 	+= '<div class="abs_img">'+String(video)+'</div>';
						}else{
							src	 		= $(e).find('img').attr('src');
							newList 	+= '<div class="abs_img" data-bg-img="'+src+'"></div>';
						}
					});
					newList+='</div></div>';
//					$('.fn_cs_service_box').remove();
					$('body').append(newList);
					Frel.BgImg();
					var movingBox		= $('.fn_cs_service_box');
					var boxWidth		= movingBox.width();
					var boxHeight		= movingBox.height();
					var listWrap		= thisSection.find('.list_wrap');
					var wrapperWidth	= listWrap.width();
					var wrapperOffset	= listWrap.offset().left;
					var leftPosition	= wrapperWidth+wrapperOffset+135;
					var WW				= $(window).width();
					if((leftPosition+boxWidth) > WW){
						leftPosition	= WW - boxWidth - 50;
					}
					movingBox.css({left:leftPosition+'px'});
					
					listChildren.on('mouseenter',function(){
						var element		= $(this);
						var index		= element.index()+1;
						if(!element.hasClass('opened')){
							listChildren.removeClass('opened');
							element.addClass('opened');
							movingBox.addClass('opened');
							movingBox.find('.abs_img').removeClass('welcome');
							movingBox.find('.abs_img:nth-child('+index+')').addClass('welcome');
							if(movingBox.find('video').length){
								movingBox.find('video').get(0).pause();
							}
							if(element.hasClass('video')){
								movingBox.find('.abs_img:nth-child('+index+')').find('video').get(0).play();
								movingBox.find('.abs_img:nth-child('+index+')').find('video').one("play", function() {
									this.currentTime = 0;
								});
							}
						}
					}).on('mouseleave',function(){
						listChildren.removeClass('opened');
						movingBox.removeClass('opened');
						movingBox.find('.abs_img').removeClass('welcome');
					}).on('mousemove',function(event){
						var ymove		= event.clientY;
						movingBox.css({top:(ymove-boxHeight/2)+'px'});
					});
					
				});
				
			}
			
		},
		
		
		
		
		
		
		
		
		
		/*---------------------------------------------------------------------------------------------*/
		
		
		
		filterj: function(){

			var items 			= $('.fn_cs__ul__filter_masonry');
			items.each(function(){
				var thisItem 	= $(this);
				var list 		= thisItem.find('.posts_list');
				var filter 		= thisItem.find('.posts_filter');

				list.isotope({
					itemSelector: 'li',
  					percentPosition: true,
					columnwidth: 50
				});

				// Isotope Filter 
				filter.find('a').off().on('click', function(){
					var selector 	= $(this).attr('data-filter');
					list 			= thisItem.find('.posts_list');
					filter.find('a').removeClass('current');
					$(this).addClass('current');
					list.isotope({ 
						filter				: selector,
						animationOptions	: {
							duration			: 550,
							easing				: 'ease',
							queue				: false
						}
					});
					return false;
				});
			});

		},
		
		frel_all_functions: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
			Frel.lightGallery();
		},
		
		portfolio_all_functions: function(){
			Frel.BgImg();
			Frel.portfolio_swiper();
			Frel.portfolio_hover_3d();
		},
		
		interactiveListVertical: function(){
			Frel.BgImg();
			Frel.interactiveListVerticalAnimation();
			Frel.interactiveListVerticalScrollable();
		},
		
		interactiveListVerticalHalf: function(){
			Frel.BgImg();
			Frel.interactiveListVerticalHalfAnimation();
			Frel.interactiveListVerticalHalfScrollable();
		},
		
		interactiveListHorizontalHalf: function(){
			Frel.BgImg();
			Frel.interactiveListVHorizontalHalfAnimation();
		},
		
		interactiveFlickityFunctions: function(){
			Frel.BgImg();
			Frel.flickitySlider();
		},
		
		splitScreenFunctions: function(){
			Frel.BgImg();
			var WH		 	= $(window).height();
			var type		= $('.arlo_fn_wrapper_all').data('nav-type');
			var navHeight	= 0;
			if(type === 'one_line'){
				if($('.arlo_fn_one_line').data('position') === 'relative'){
					navHeight 	= $('.arlo_fn_one_line').height();
					$('.fn_cs_split_screen').css({height:WH-navHeight});
				}
			}else if(type === 'two_lines'){
				if($('.arlo_fn_two_lines').data('position') === 'relative'){
					navHeight 	= $('.arlo_fn_two_lines').height();
					$('.fn_cs_split_screen').css({height:WH-navHeight});
				}
			}else if(type === 'three_lines'){
				if($('.arlo_fn_three_lines').data('position') === 'relative'){
					navHeight	= $('.arlo_fn_three_lines').height();
					$('.fn_cs_split_screen').css({height:WH-navHeight});
				}
			}
			var section = $('.fn_cs_split_screen .section_wrap');
			if($('#fullpage').length){
				$('#fullpage').fullpage({
					autoScrolling: true,
					scrollHorizontally: true,
					navigation: true,
					navigationPosition: 'right',
					afterLoad: function(){
						var itemData		= $('.fn_cs_split_screen').data('dots-color');
						var activeSection	= $('.fn_cs_split_screen .section_wrap.active');
						if(itemData === 'mixed'){
							var activeIndex = activeSection.index();
							if(activeIndex%2 === 1){
								$('#fp-nav').addClass('fn_light');
							}else{
								$('#fp-nav').removeClass('fn_light');
							}
						}
						if(section.find('video').length){
							section.find('video').get(0).pause();
						}
						if(activeSection.find('.leftpart').hasClass('video')){
							activeSection.find('video').get(0).play();
							activeSection.find('video').one("play", function() {
								this.currentTime = 0;
							});
						}
					},
					responsiveWidth: 1040,
				});
			}
				
		},
		
		flickitySlider: function(){
			var interactiveFlickity		= $('.fn_cs_flickity_slider');
			interactiveFlickity.each(function(){
				var element		= $(this);
				element.on( 'ready.flickity', function() {
					Frel.flickityCallBack(element);
				});
				var $carousel	= element.find('.slider_wrap ul').flickity({
					cellAlign: 'center',
					draggable: true,
					pageDots: false,
					prevNextButtons: '',
				});
				$carousel.on( 'dragEnd.flickity', function() {
					Frel.flickityCallBack(element);
				});
			});
			
		},
		flickityCallBack: function(element){
			var index 	= element.find('.slider_wrap ul li.is-selected').index();
			var allLi	= element.closest('.fn_cs_flickity_slider').find('.main_bg_image ul li');
			var sameLi	= element.closest('.fn_cs_flickity_slider').find('.main_bg_image ul li:nth-child('+(index+1)+')');
			allLi.removeClass('active');
			sameLi.addClass('active');
			if(allLi.find('video').length){
				allLi.find('video').get(0).pause();
			}
			if(sameLi.hasClass('video')){
				if(sameLi.find('video').length){
					sameLi.find('video').get(0).play();
				}
			}
		},
		
		interactiveListVHorizontalHalfAnimation: function(){
			
			var horizontalHalf		= $('.fn_cs_interactive_list_horizontal_half');
			if(horizontalHalf.length){
				if(!$('.fn_cs_horizontal_box').length){
					$('body').append('<div class="fn_cs_horizontal_box">');
				}
				var movingBox		= $('.fn_cs_horizontal_box');
				var boxHeight		= movingBox.height();
				var list			= $('.fn_cs_interactive_list_horizontal_half .project_list_wrap ul li');	
				list.on('mouseenter',function(){
					var element			= $(this);
					if(!element.hasClass('active')){
						list.removeClass('active');
						element.addClass('active');
						movingBox.addClass('active');
						var liOffset	= element.offset().top;
						var imgURL		= element.find('img').attr('src');
						movingBox.css({backgroundImage: 'url('+imgURL+')'});
						movingBox.css({top:(liOffset-boxHeight)+'px'});
					}
				}).on('mouseleave',function(){
					list.removeClass('active');
					movingBox.removeClass('active');
				}).on('mousemove',function(event){
					var xmove		= event.clientX;
					movingBox.css({left:(xmove-movingBox.width()/2)+'px'});
				});
			}
		},
		
		interactiveListVerticalHalfAnimation: function(){
			var verticalHalf = $('.fn_cs_interactive_list_vertical_half');
			if(verticalHalf.length){
				if(!$('.fn_cs_vertical_box').length){
					$('body').append('<div class="fn_cs_vertical_box"></div>');
				}
				var movingBox		= $('.fn_cs_vertical_box');
				var movingH			= movingBox.height();
				var movingW			= movingBox.width();
				var innerOffsetleft = verticalHalf.find('.inner_wrap').offset().left;
				var list		= $('.fn_cs_interactive_list_vertical_half .project_list_wrap ul li');
				movingBox.css({left:innerOffsetleft-movingW});
				
				list.on('mouseenter',function(){
					var element			= $(this);
					if(!element.hasClass('active')){
						list.removeClass('active');
						element.addClass('active');
						movingBox.addClass('active');
						var imgURL		= element.find('img').attr('src');
						movingBox.css({backgroundImage: 'url('+imgURL+')'});
					}
				}).on('mouseleave',function(){
					list.removeClass('active');
					movingBox.removeClass('active');
				}).on('mousemove',function(event){
					var ymove		= event.clientY;
					movingBox.css({top:(ymove - movingH/2)+'px'});
				});
			}
			
		},
		
		interactiveListVerticalHalfScrollable: function(){
							
		var H				= $(window).height();
		var scrollable		= $('.fn_cs_interactive_list_vertical_half .scrollable');
		var inner			= $('.fn_cs_interactive_list_vertical_half .project_list_wrap .inner_wrap');

		inner.css({height:H-160});

		scrollable.each(function(){
			var element		= $(this);

			element.css({height: H-160}).niceScroll({
				touchbehavior:false,
				cursorwidth:0,
				autohidemode:true,
				cursorborder:"0px solid #eee"
			});
		});
				
		},

		
		interactiveListVerticalAnimation: function(){
			var list			= $('.fn_cs_interactive_list_vertical .project_list_wrap ul li');
			
			list.on('mouseenter',function(){
				var element 		= $(this);
				var index 			= element.index(); 	// index starts from 0 (not 1)
				var parent			= element.closest('.fn_cs_interactive_list_vertical');
				var galleryList		= parent.find('.gallery_list_wrap ul li');
				var childNumber		= index+1;			// get same child number from second list
				if(!element.hasClass('active')){
					list.removeClass('active');
					element.addClass('active');
					galleryList.removeClass('active');
					parent.find('.gallery_list_wrap ul li:nth-child('+childNumber+')').addClass('active');
				}
			});
		},
		
		interactiveListVerticalScrollable: function(){

			var H				= $(window).height();
			var scrollable		= $('.fn_cs_interactive_list_vertical .scrollable');
			var leftPart		= $('.fn_cs_interactive_list_vertical .project_list_wrap .inner_wrap');

			leftPart.css({height:H-180});

			scrollable.each(function(){
				var element		= $(this);

				element.css({height: H-180}).niceScroll({
					touchbehavior:false,
					cursorwidth:0,
					autohidemode:true,
					cursorborder:"0px solid #eee"
				});
			});

		},
		
		portfolioDemoSecond: function(){
			Frel.portfolioMenuAnimation();
			Frel.BgImg();
			Frel.portfolioSecondHover_3d();
			Frel.portfolioSecondListScroll();
		},

		portfolioMenuAnimation: function(){
			var dataHover		= $('.fn_cs_portfolio_demo_second').data('hover-animation');
			var list			= $('.fn_cs_portfolio_demo_second .leftpart ul li');
			var totalNumber		= list.length;
			if(totalNumber < 10){
				totalNumber = '0'+totalNumber;
			}
			$('.fn_cs_portfolio_demo_second .pagination .total').html(totalNumber);
			
			
			list.on('mouseenter',function(){
				var element 	= $(this);
				var rightList	= element.closest('.fn_cs_portfolio_demo_second').find('.rightpart ul li');
				var liHeight	= element.closest('.fn_cs_portfolio_demo_second').find('.rightpart ul li').height();
				var index		= element.index();
				
				var liNthChild		= index+1;
				var lastDigit		= parseInt(liNthChild % 10);
				var transformOne 	= -(lastDigit*32);
				var transformZero 	= -((liNthChild-lastDigit) / 10)*32;
				
				$('.fn_cs_portfolio_demo_second .pagination .one .moving_spans').css({transform:'translateY('+transformOne+'px)'});
				$('.fn_cs_portfolio_demo_second .pagination .zero .moving_spans').css({transform:'translateY('+transformZero+'px)'});
				
				if(dataHover === 'slider'){
					if(!element.hasClass('active')){
						list.removeClass('active');
						element.addClass('active');
						var H	= index*liHeight;
						element.closest('.fn_cs_portfolio_demo_second').find('.rightpart ul').css({transform:'translateY(-'+H+'px)'});
					}
				}else{
					if(!element.hasClass('active')){
						list.removeClass('active');
						element.addClass('active');
						rightList.removeClass('active');
						element.closest('.fn_cs_portfolio_demo_second').find('.rightpart ul li:nth-child('+liNthChild+')').addClass('active');
					}
				}
				
			});
			
		},
		
		
		portfolioSecondHover_3d: function(){
			
			var section		= $('.fn_cs_portfolio_demo_second');
				section.each(function(){
					var element			= $(this);
					var sensitivity		= parseInt(element.data('sensitivity'));
					var shine			= element.data('shine-mode');
					
					if(shine === 'yes'){
						shine = true;
					}else if(shine === 'no'){
						shine = false;
					}
					
					element.find(".rightpart_inner").hover3d({
						selector: "ul li",
						sensitivity: sensitivity,
						perspective: 3000,
						shine: shine
					});
				});
				
		},
		
		portfolioSecondListScroll: function(){
							
			var H				= $(window).height();
			var scrollable		= $('.fn_cs_portfolio_demo_second .scrollable');
			var leftPart		= $('.fn_cs_portfolio_demo_second .leftpart');

			leftPart.css({height:H-230});

			scrollable.each(function(){
				var element		= $(this);

				element.css({height: H-230}).niceScroll({
					touchbehavior:false,
					cursorwidth:0,
					autohidemode:true,
					cursorborder:"0px solid #eee"
				});
			});
				
		},
		
		
		portfolio_swiper: function(){
			var section		= $('.fn_cs_portfolio_demo_one');
			section.each(function(){
				var element			= $(this);
				var gutter			= parseInt(element.data('gutter'));
				var speed			= parseInt(element.data('speed'));
				var delay			= parseInt(element.data('delay'));
				var perView			= parseInt(element.data('item_view'));
				var swiperContainer	= element.find('.swiper-container');
				new Swiper(swiperContainer, {
					speed: speed,
					spaceBetween: gutter,
					slidesPerView: perView,
					autoplay: {	delay: delay, disableOnInteraction: false},
					loop: true,
					breakpoints: {
						0: {slidesPerView: 1},
						768: {slidesPerView: 2},
						1200: {slidesPerView: perView}
					}
				});
			});
				
		},
		
		portfolio_hover_3d: function(){
			
			var section		= $('.fn_cs_portfolio_demo_one');
				section.each(function(){
					var element			= $(this);
					var sensitivity		= parseInt(element.data('sensitivity'));
					var shine			= element.data('shine-mode');
					
					if(shine === 'yes'){
						shine = true;
					}else if(shine === 'no'){
						shine = false;
					}
					
					element.find(".swiper-slide").hover3d({
						selector: ".images_wrap",
						sensitivity: sensitivity,
						perspective: 3000,
						shine: shine
					});
				});
				
		},
		
		magnific_popup: function(){
			$('.gallery_zoom').each(function() { // the containers for all your galleries
				$(this).magnificPopup({
					delegate: 'a.zoom', // the selector for gallery item
					type: 'image',
					gallery: {
					  enabled:true
					},
					removalDelay: 300,
					mainClass: 'mfp-fade'
				});

			});
			$('.popup-youtube').each(function() { // the containers for all your galleries
				$(this).magnificPopup({
					disableOn: 700,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false
				});
			});	
		},
		
		businessSlider: function(){
			var carousel 	= $('.fn_cs_business_slider .owl-carousel');
			var rtlMode		= false;
			if($('body').hasClass('rtl')){
				rtlMode		= true;
			}
			carousel.each(function(){
				$(this).owlCarousel({
					loop: true,
					rtl: rtlMode,
					items: 1,
					lazyLoad: true,
					margin: 0,
					autoplay: true,
					autoplayTimeout: 4000,
					smartSpeed: 2000,
					dots: false,
					nav: false,
					navSpeed: true,
				});	
			});
			
		},
		
		
		partners: function(){
			var carousel 	= $('.fn_cs_partners .owl-carousel');
			var rtlMode		= false;
			if($('body').hasClass('rtl')){
				rtlMode		= true;
			}
			carousel.each(function(){
				$(this).owlCarousel({
					loop: true,
					rtl: rtlMode,
					items: 4,
					lazyLoad: true,
					margin: 40,
					autoplay: true,
					autoplayTimeout: 4000,
					smartSpeed: 2000,
					dots: false,
					nav: false,
					navSpeed: true,
					responsive:{
						0:{items:1},
						480:{items:2},
						768:{items:3},
						1040:{items:3},
						1200:{items:4},
					}
				});	
			});
			
		},
		singleTestimonialParallax: function(){
			Frel.jarallaxEffect();
			Frel.BgImg();
			Frel.ImgToSVG();
		},
		whyChooseUs: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		menuOpenerForChildTheme: function(){
			var switcherOpener				= $('.arlo_fn_header .header_closer');
			switcherOpener.on('click',function(){
				setTimeout(function(){
					Frel.projectCategoryFitler();
				},300);
			});
		},
		projectCategoryFilter: function(){
			Frel.projectCategoryFitler();
			Frel.menuOpenerForChildTheme();
		},
		projectCategoryFitler: function(){
			if($().isotope){
				var items = $('.fn_cs_project_category');
				items.each(function() {
					var thisItem = $(this);
					var list = thisItem.find('.posts_list');
					var filter = thisItem.find('.posts_filter');


					// Isotope Filter 
					filter.find('a').off().on('click', function() {
						var selector = $(this).attr('data-filter');
						list = thisItem.find('.posts_list');
						filter.find('a').removeClass('current');
						$(this).addClass('current');
						list.isotope({
							filter: selector,
							animationOptions: {
								duration: 750,
								easing: 'linear',
								queue: false
							}
						});
						return false;
					});

				});
			}
			Frel.BgImg();
			var check = false;
			$('.fn_cs_project_category ul.posts_list li .item').on('mouseenter', function() {
				var thisItem = $(this);
				if (!$('.fn_cs_project_moving_title').length) {
					$('body').append('<div class="fn_cs_project_moving_title"></div>');
				}
				var movingDiv = $('.fn_cs_project_moving_title');
				var title = thisItem.data('title');
				var category = thisItem.data('category');
				check = true;
				if (category !== '') {
					category = '<span>' + category + '</span>';
				}
				if (title) {
					movingDiv.html('<h3>' + title + '</h3>' + category);
					movingDiv.addClass('visible');
				}
			}).on('mouseleave', function() {
				$('.fn_cs_project_moving_title').removeClass('visible');
				check = false;
			});


			$(document).on('mousemove', function(e) {
				if (check) {
					$('.fn_cs_project_moving_title').css({
						left: e.clientX - 10,
						top: e.clientY + 25
					});
				}
			});
		},
		progress: function(){
			$('.fn_cs_progress_wrap').each(function() {
				var pWrap 	= $(this);
				pWrap.waypoint({handler: function(){Frel.progressF(pWrap);},offset:'90%'});
			});	
		},
		
		progressF: function(container){
			container.find('.fn_cs_progress').each(function(i) {
				var progress 	= $(this);
				var pValue 		= parseInt(progress.data('value'));
				var pBarWrap 	= progress.find('.fn_cs_bar_wrap');
				var pBar 		= progress.find('.fn_cs_bar');
				pBar.css({width:pValue+'%'});
				setTimeout(function(){pBarWrap.addClass('open');},(i*500));
			});	
		},
		aboutTextSlider: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
			if($('.parallax').length > 0){ 
			  	var scene = $('.parallax');
				scene.parallax();
			}
			var animateSpan			= $('span.arlo_fn_animation_text');
			animateSpan.each(function(){
				var span		= $(this);
				var items		= span.data('items');
				if(items !== ''){
					items		= items.split(':::');
					span.typed({
						strings: items,
						loop: true,
						startDelay: 1e3,
						backDelay: 2e3
					});	
				}
			});
		},
		heroHeaderAllInOne: function(){
			Frel.BgImg();
			Frel.ImgToSVG();
			var animateSpan			= $('span.arlo_fn_animation_text');
			animateSpan.each(function(){
				var span		= $(this);
				var items		= span.data('items');
				if(items !== ''){
					items		= items.split(':::');
					span.typed({
						strings: items,
						loop: true,
						startDelay: 1e3,
						backDelay: 2e3
					});	
				}
			});
			
			$('.cons_w_wrapper .fn_cs_hero_header_exclusive > a').off().on('click',function(){
				if($.attr(this, 'href') !== '#'){
					$('html, body').animate({
						scrollTop: $($.attr(this, 'href')).offset().top
					}, 1000);
				}
				return false;
			});
			Frel.jarallaxEffect();
			Frel.kenburnsyShortcode();
			if($(".cons_w_wrapper .fn_glitch").length){
				$(".cons_w_wrapper .fn_glitch").mgGlitch({
					destroy: false,
					glitch: true,
					scale: true,
					blend: true,
					blendModeType: "hue",
					glitch1TimeMin: 200,
					glitch1TimeMax: 400,
					glitch2TimeMin: 10,
					glitch2TimeMax: 100
				});
			}
			if($(".cons_w_wrapper .fn_ripple").length){
				$(".cons_w_wrapper .fn_ripple").ripples({
					resolution: 500,
					perturbance: 0.04
				});
			}
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
		alphaSliderFunction: function(){
			Frel.BgImg();
			$('.arlo_slider_alpha').each(function(){
				var images 			= $(this);
				var autoplaySwitch 	= images.data('autoplay-switch');
				var effect		 	= images.data('effect');
				var autoplayTime;
				if(autoplaySwitch === 'enabled'){
					autoplayTime = images.data('autoplay-time');
				}else{
					autoplayTime = 80000;
				}
				var imagesSlider 	= new Swiper(images, {
					centeredSlides: false,
					slideToClickedSlide: false,
					slidesPerView: 1,
					spaceBetween: 0,
					preloadImages: false,
					lazyLoading: false,
					autoplay: {
						delay: autoplayTime,
						disableOnInteraction: false
					},
					initialSlide:0,
					navigation: {
						nextEl: images.find('.fn_next'),
						prevEl: images.find('.fn_prev'),
					  },
					effect: effect,
					coverflowEffect: {
						rotate: 30,
						slideShadows: false,
					},
					flipEffect: {
						rotate: 30,
						slideShadows: false,
					},
					cubeEffect: {
						slideShadows: false,
					},
					loop: true,
					pagination: {
						el: images.find('.swiper-pagination'),
						type: 'progressbar',
					},
					speed: 1000
				});
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
		parallaxMaster: function(){
			var scene = $('#scene');
			scene.parallax();
			Frel.BgImg();
		},
		infoRatingCarousel: function(){
			var owl 		= $('.fn_cs_info_rating .owl-carousel');
			var rtlReady 	= false;
			if($('body').hasClass('rtl')){
				rtlReady 	= true;
			}
			owl.each(function(){
				var el 		= $(this);
				el.owlCarousel({
					loop:false,
					margin:10,
					nav:true,
				 	autoWidth:true,
				 	rtl:rtlReady,
					dots: false
				});
			});
			Frel.ImgToSVG();
			Frel.BgImg();
			Frel.lightGallery();
			Frel.infoRatingCalc();
		},
		infoRatingCalc: function(){
			var rating = $('.fn_cs_info_rating');
			rating.each(function(){
				var el 				= $(this);
				var tagline			= el.find('.tagline_holder');
				var spanHeight	 	= el.find('.tagline_holder span').outerWidth() + 15;
				tagline.css({height: spanHeight + 'px'});
			});
			
		},
		miniBoxesForShortcodes: function(){

			var el 		= $('.fn_cs_miniboxes');

			if(el.length){
				el.each(function(index, element) {
					var child	= $(element).find('.fn_cs_minibox');
					child.css({height:'auto'});
					var W 		= $(window).width();
					if(W > 460){
						var elementHeights = child.map(function() {return $(this).outerHeight();}).get();
						var maxHeight 		= Math.max.apply(null, elementHeights);
						child.css({height:maxHeight+'px'}); 
					}
				});  
			}

		},
		miniSBoxesForShortcodes: function(){

			var el 		= $('.fn_cs_sminiboxes');

			if(el.length){
				el.each(function(index, element) {
					var child	= $(element).find('.fn_cs_sminibox');
					child.css({height:'auto'});
					var W 		= $(window).width();
					if(W > 1200){
						var elementHeights = child.map(function() {return $(this).outerHeight();}).get();
						var maxHeight 		= Math.max.apply(null, elementHeights);
						child.css({height:maxHeight+'px'}); 
					}
				});  
			}

		},
		serviceShortcode: function(){
			Frel.ImgToSVG();
			Frel.miniBoxesForShortcodes();
		},
		experienceShortcode: function(){
			Frel.BgImg();
		},
		projectStickyShortcode: function(){
			Frel.miniSBoxesForShortcodes();
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		supportBlockShortcode: function(){
			Frel.ImgToSVG();
			Frel.supportBlockBgCalc();
		},
		supportBlockBgCalc: function(){
			var sBlock = $('.fn_cs_support_block .support_block');
			sBlock.each(function(){
				var el = $(this);
				var height = el.outerHeight() - 30;
				el.find('.img_wrap span').css({borderTopWidth: height + 'px'});
			});
		},
		tripleBlogShortcode: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		accordionFunction: function(){
			if($().fn_cs_accordion){
				var acc = $('.fn_cs_accordion');
				acc.each(function(){
					$(this).fn_cs_accordion({
						showIcon: false, //boolean	
						animation: true, //boolean
						closeAble: true, //boolean
						slideSpeed: 500 //integer, miliseconds
					});
				});
			}
			Frel.ImgToSVG();
		},
		locationListFunction: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		mainSliderWithContnetFunction: function(){
			$('.fn_cs_main_slider_with_content').each(function(){
				var images			= $(this).find('.inner');
				var autoDelay		= $(this).data('autoplay-delay');
				var imagesSlider 	= new Swiper(images, {
					centeredSlides: false,
					slideToClickedSlide: false,
					slidesPerView: 1,
					spaceBetween: 0,
					navigation: {
						nextEl: images.find('.fn_next'),
						prevEl: images.find('.fn_prev'),
					 },
					effect: 'slide',
					loop: true,
					fadeEffect: {
						crossFade: true
					  },
					pagination: {
						el: images.find('.swiper_pagination'),
						type: 'custom',
						renderCustom: function (swiper, current, total) {
							if(current<10){current = '0' + current;}
							if(total<10){total = '0' + total;}
						  return '<span><span class="current">' + current + '</span> / <span class="total">' + total + '</span></span>';
						},
				  	},
					autoplay: {
						delay: autoDelay,
						disableOnInteraction: false,
					},
				});
			});
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		introduceFunction: function(){
			Frel.lightGallery();
			Frel.introduceCalcFunction();
		},
		introduceCalcFunction: function(){
			$('.fn_cs_introduce_wrap').each(function(){
				var el 		= $(this);
				var introW	= el.find('.fn_cs_introduce').outerWidth();
				var wings	= el.find('span.wing12, span.wing22');
				if(wings.length){
					wings.css({borderRightWidth:( Math.floor((introW * 0.7)) - 40) + 'px'});
				}				
			});
		},
		isotopeFunction: function(){
			var masonry = $('.fn_cs_masonry');
			if($().isotope){
				masonry.each(function(){
					$(this).isotope({
						itemSelector: '.fn_cs_masonry_in',
						masonry: {}
					});
				});
			}
		},
		principlesFunction: function(){
			Frel.isotopeFunction();
		},
		counterWithContentFunction: function(){
			var element = $('.fn_cs_counter');
			element.each(function() {
				var el = $(this);
				el.waypoint({
					handler: function(){
						if(!el.hasClass('stop')){
							el.addClass('stop').countTo({
								refreshInterval: 50,
								formatter: function (value, options) {
									return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
								},	
							});
						}
					},
					offset:'90%'	
				});
			});	
			Frel.BgImg();
			Frel.lightGallery();
			Frel.ImgToSVG();
		},
		principlesModernFunction: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
			Frel.miniBoxesForShortcodes();
			Frel.principleModernShapeCalc();
		},
		principleModernShapeCalc: function(){
			var inner = $('.fn_cs_principles_modern .inner');
			inner.each(function(){
				var el = $(this);
				var shape = el.find('.shape2');
				shape.css({borderLeftWidth:Math.floor(el.outerWidth()-30) + 'px'});
			});
		},
		serviceQueryFunction: function(){
			var owl			 	= $('.fn_cs_service_query .owl-carousel');
			var rtlReady 		= false;
			if($('body').hasClass('rtl')){
				rtlReady		= true;
			}
			owl.each(function(){
				var el 			= $(this);
				var columnCount = el.closest('.fn_cs_service_query').data('column-count');
				var count 		= 4;
				if($.isNumeric(columnCount)){count = columnCount;}
				var count14,count12,count48;
				switch(count){
					case 5: count14 = 5; count12 = 4; count48 = 2; break;
					case 4: count14 = 4; count12 = 3; count48 = 2; break;
					case 3: count14 = 3; count12 = 3; count48 = 2; break;
					case 2: count14 = 2; count12 = 2; count48 = 2; break;
					case 1: count14 = 1; count12 = 1; count48 = 1; break;
				}
				el.owlCarousel({
					loop:true,
					margin:0,
					nav:false,
				 	items:4,
				 	rtl:rtlReady,
					dots: false,
					responsive : {
						0 : {items : 1},
						480 : {items : count48},
						1200 : {items : count12},
						1400 : {items : count14}
					}
				});
				var prev = el.parent().parent().find('.owl_control .fn_prev');
				var next = el.parent().parent().find('.owl_control .fn_next');
				prev.on('click',function(){
					el.trigger('prev.owl');
					return false;
				});
				next.on('click',function(){
					el.trigger('next.owl');
					return false;
				});
				Frel.ImgToSVG();
			});
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		kenburnsyShortcode: function(){
			var kenburns = $('.fn_cs_kenburnsy');
			kenburns.each(function(){
				var element = $(this);
				var duration = element.data('interval');
				element.kenburnsy({
					fullscreen: true,
					duration: duration,
				});
			});
		},
		
		
		// made by karinbay
		
		introAllFunctions: function(){
			Frel.BgImg();
			Frel.introFilter();
		},
		
		introTestimonialsFunctions: function(){
			Frel.BgImg();
			Frel.ImgToSVG();
			Frel.testiCarousel();
		},
		
		testiCarousel: function(){
			var carousel 	= $('.fn_cs_intro_testimonials .owl-carousel');
			var rtlMode		= false;
			if($('body').hasClass('rtl')){
				rtlMode		= true;
			}
			
			carousel.each(function(){
				var e		= $(this);
				var myNav	= false;
				var p 		= e.closest('.fn_cs_intro_testimonials');
				if(p.attr('data-navigation') === 'yes'){
					myNav 	= true;
				}
				
				e.owlCarousel({
					loop: true,
					rtl: rtlMode,
					animateOut: 'fadeOut',
					animateIn: 'fadeIn',
					items: 1,
					lazyLoad: true,
					autoplay: true,
					autoplayTimeout: 70000,
					smartSpeed: 2000,
					margin: 100,
					dots: true,
					nav: myNav,
					navText: [p.find('.fn_nav .prev'),p.find('.fn_nav .next')],
					navSpeed: true,
					responsive : {
						0 : {
							mouseDrag: false,
							touchDrag: true,
						},
						1100 : {
							mouseDrag: true,
							touchDrag: true,
						}
					}
				});	
			});
			
		},
		
		
		
		introFilter: function(){
			// Needed variables
			var filter		 = $('.fn_cs_demo_list .filter_wrap ul');

			if(filter.length){
				filter.find('a').on('click', function(){
					
					// Isotope Filter 
					var element		= $(this);
					var demoList	= element.closest('.fn_cs_demo_list');
					var thisFilter	= demoList.find('.filter_wrap ul');
					var thisList	= demoList.find('.demo_wrap ul');
					var selector 	= element.attr('data-filter');
					thisList.isotope({ 
						filter				: selector,
						animationOptions	: {
							duration			: 750,
							easing				: 'linear',
							queue				: false
						}
					});
					
					// Change active element class
					thisFilter.find('a').removeClass('current');
					$(this).addClass('current');
					
					return false;
				});
			}	
		},
		
		/*************************************************/
		
		halfSliderScroll: function(){
			$('.fn_cs_half_slider ul').each(function(){
				
				// variables
				var element 	= $(this);
				var dataSpeed   = $('.fn_cs_half_slider').data('mouse-speed');
				var child		= element.children('li');
				var ww			= $(window).width();
				var w			= 0;
				var myWay		= 0;
				var speed 		= 0;
				var mouseSpeed	= dataSpeed;
				
				child.each(function(){
					w+= $(this).outerWidth(true,true);
				});
								
				var stopMachine = parseInt((w-ww)/mouseSpeed)+1;
				
				
				element.css({width:w+'px'});
				
				element.on('touchmove', function() {
				  	element.trigger('mousewheel');
				});
				
				element.bind('mousewheel', function(e){
					var element = $(this);
					
					// get scroll direction
					if(e.originalEvent.wheelDelta /120 > 0) {
						speed--;
					}else{
						if(speed < stopMachine){
							speed++;
						}
					}
					
					
					// stop if element has no place
					if(speed<0){speed = 0;}
					// get my way
					myWay = speed*mouseSpeed;
					
					
					// stop if my way longer than element's width
					if(speed > stopMachine){return false;}
					if((myWay+ww) > w){myWay = w-ww;}
					
					
					// scroll me function
					element.css({transform:'translate3d(-'+myWay+'px,0px,0px)'});
				});
				
				element.bind('mousewheel DOMMouseScroll', function(e) {
					var scrollTo = null;

					if (e.type == 'mousewheel') {
						scrollTo = (e.originalEvent.wheelDelta * -1);
					}
					else if (e.type == 'DOMMouseScroll') {
						scrollTo = 40 * e.originalEvent.detail;
					}

					if(scrollTo) {
						e.preventDefault();
						$(this).scrollTop(scrollTo + $(this).scrollTop());
					}
				});
				
			});

		},
				
		personalAllfunctions: function(){
			Frel.BgImg();
			
			var masonry = $('.personal_masonry');
			if($().isotope){
				masonry.each(function(){
					$(this).isotope({
					  	itemSelector: '.personal_masonry_in',
						percentPosition: true,
					  	masonry: {
							columnWidth: '.grid-sizer'
						}
					});
				});
			}
			
		},
		
		personalPgrogressFunctions: function(){
			Frel.personalProgress();
			Frel.BgImg();
		},
		
		personalProgress: function(){
			$('.fn_cs_personal_progress_wrap').each(function() {
				var pWrap 	= $(this);
				pWrap.waypoint({handler: function(){Frel.personalProgressInner(pWrap);},offset:'90%'});
			});	
		},
		
		personalProgressInner: function(container){
			container.find('.personal_progress_inner').each(function() {
				var progress 				= $(this);
				var pValue 					= parseInt(progress.data('value'));
				var pBarWrap 				= progress.find('.fn_cs_bar_wrap');
				var pBar 					= progress.find('.fn_cs_bar');
				var number 					= progress.find('.number');
				var numberW 				= number.outerWidth();
				var progressW				= progress.width();
				var numberWidthInPercent 	= (numberW/progressW)*100;
				var leftPos					= pValue-numberWidthInPercent/2;
				var label 					= progress.find('.label');
				if(leftPos + numberWidthInPercent > 100 ){
					leftPos = 100-numberWidthInPercent;
				}
				setTimeout(function(){
					pBarWrap.addClass('open');
					label.addClass('open');
					pBar.css({width:pValue+'%'});
					number.addClass('opened').css({left:leftPos+'%'});
				});
			});	
		},
		
		portfolio_slider: function(){
			Frel.BgImg();
			var section		= $('.fn_cs_personal_slider');
			section.each(function(){
				var element				= $(this);
				var mainSliderSelector	= element.find('.swiper-container');
				var transform 			= 'Y';
				var direction 			= 'horizontal';
				var	interleaveOffset 	= 0.5;
				if(direction === 'horizontal'){
					transform 			= 'X';
				}
				// Main Slider
				var mainSliderOptions 	= {
					loop: true,
					speed: 1500,
					autoplay:{
						delay:6000
					},
					slidesPerView: 1,
					direction: direction,
					loopAdditionalSlides: 10,
					watchSlidesProgress: true,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					on: {
						init: function(){
							this.autoplay.stop();
						},
						imagesReady: function(){
							this.autoplay.start();
						},
						progress: function(){
							var swiper = this;
							for (var i = 0; i < swiper.slides.length; i++) {
								var slideProgress 	= swiper.slides[i].progress,
								innerOffset 		= swiper.width * interleaveOffset,
								innerTranslate 		= slideProgress * innerOffset;
								$(swiper.slides[i]).find(".main_image").css({transform: "translate"+transform+"(" + innerTranslate + "px)"});
							}
						},
						touchStart: function() {
							var swiper = this;
							for (var i = 0; i < swiper.slides.length; i++) {
								swiper.slides[i].style.transition = "";
							}
						},
						setTransition: function(speed) {
							var swiper = this;
							for (var i = 0; i < swiper.slides.length; i++) {
								swiper.slides[i].style.transition = speed + "ms";
								swiper.slides[i].querySelector(".main_image").style.transition =
								speed + "ms";
							}
						}
					}
				};
				new Swiper(mainSliderSelector, mainSliderOptions);
			});
			
			Frel.personalMagic();
		},
		
		personalMagic:function(){
			var slider  			= $('.fn_cs_personal_slider');
			var before				= slider.find('.swiper-button-prev');
			var after				= slider.find('.swiper-button-next');

			slider.each(function(){
				var element  		= $(this);
				var magic	 		= element.find('.fn_cs_magic');
				var mySwiper 		= element.find('.swiper-container');
				
				
				var clicking = false;

				mySwiper.mousedown(function(){
					clicking = true;
				});

				mySwiper.mouseup(function() {
				  i = 0;
				});

				$(document).mouseup(function(){
					clicking = false;
				});
				var i = 0;
				mySwiper.mousemove(function(){
					if(clicking === false){
						return;
					}
				  	i++;
				});
				
				
				
				
				
				mySwiper.on('mousemove',function(event){
					var winScroll	= $(window).scrollTop();
					var topOffset	= mySwiper.offset().top;
					var leftOffset	= mySwiper.offset().left;
					var xmove		= event.clientX;
					var ymove		= event.clientY;
					magic.addClass('opened').css({left:(xmove-leftOffset+5)+'px',top:(-topOffset+winScroll+ymove)+'px'});
				}).on('mouseleave',function(){
					magic.removeClass('opened');
				});
		
				var isDragging = false;
				mySwiper.mousedown(function(){
					isDragging = false;
				}).mousemove(function() {
					isDragging = true;
				}).mouseup(function(){
					var wasDragging = isDragging;
					isDragging = false;
					if (!wasDragging) {
						$("#throbble").toggle();
					}
				});
				
				
				
			});	
			
			before.on('mouseenter',function(){
				slider.find('.fn_cs_magic').addClass('activited');
			});
			after.on('mouseenter',function(){
				slider.find('.fn_cs_magic').removeClass('activited');
			});
			
		},
		
		personalReviewsFunctions: function(){
		  Frel.BgImg();
		  Frel.reviewSlider();
		  Frel.isotopeFunction();
		},
		
		reviewSlider: function(){
			$('.fn_cs_testimonials .r_list, .fn_cs_personal_partners_in .p_list').each(function(){
				var element 	= $(this);
				var container 	= element.find('.swiper-container');
				var mySwiper 	= new Swiper (container, {
					loop: true,
					slidesPerView: 3,
					spaceBetween: 70,
					speed: 1000,
					loopAdditionalSlides: 10,
					autoplay: {
						delay: 7000,
					},
					on: {
						init: function(){
							if(element.hasClass('r_list')){
								element.closest('.fn_cs_testimonials').addClass('ready');
							}else if(element.hasClass('p_list')){
								element.closest('.fn_cs_personal_partners_in').addClass('ready');
							}
						},
						autoplayStop: function(){
							mySwiper.autoplay.start();
						},
						slideChange: function () {
							Frel.ImgToSVG();
						},
					},
					pagination: {
						el: '.fn_cs_swiper__progress',
						type: 'custom', // progressbar
						renderCustom: function (swiper,current,total) {

							// opacity 
							var index 		= current - 1;
							var activeSlide = container.find('.swiper-slide[data-swiper-slide-index="'+index+'"]');
							container.find('.r_item').removeClass('fn_vision');
							activeSlide.find('.r_item').addClass('fn_vision');
							activeSlide.next().find('.r_item').addClass('fn_vision');
							activeSlide.next().next().find('.r_item').addClass('fn_vision');



							// progress animation
							var scale,translateX;
							var progressDOM	= container.find('.fn_cs_swiper__progress');
							if(progressDOM.hasClass('fill')){
								translateX 	= '0px';
								scale		= parseInt((current/total)*100)/100;
							}else{
								scale 		= parseInt((1/total)*100)/100;
								translateX 	= (current-1) * parseInt((100/total)*100)/100 + 'px';
							}


							progressDOM.find('.all span').css({transform:'translate3d('+translateX+',0px,0px) scaleX('+scale+') scaleY(1)'});
							if(current<10){current = '0' + current;}
							if(total<10){total = '0' + total;}
							progressDOM.find('.current').html(current);
							progressDOM.find('.total').html(total);
						}
					},
					breakpoints: {
						0: {
							slidesPerView: 1,
							spaceBetween: 0,
						},
						700: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 70
						}
					}
				});
			});
			Frel.ImgToSVG();
		},
		
	
		contactShortcode: function(){
			if($('.fn_cs_contact_shortcode input[type=submit]').length){
				$('.fn_cs_contact_shortcode input[type=submit]').each(function(){
					$(this).wrap('<span class="my_button"></span>');
				});
			}
		},
		
		
		allPostsFunctions: function(){
			Frel.isotopeFunction();
			Frel.modernCols();
			Frel.sliderCols();
			Frel.zigzagPosts();
			Frel.ajaxGridPosts();
		},
		
		ajaxGridPosts__function: function(parent, button, element){
			var category_id				= '*';
			if(parent.hasClass('loading')){
				return false;
			}
			if(button === 'filter'){
				if(element.parent().hasClass('active')){
					return false;
				}
			}
			parent.addClass('loading');
			parent.find('.fn_posts ul li').removeClass();

			var hidden_info				= parent.find('.fn_hidden_info');
			var page 					= hidden_info.find('.fn_h_page').val();
			var ratio 					= hidden_info.find('.fn_h_ratio').val();
			var format 					= hidden_info.find('.fn_h_format').val();
			var post_type 				= hidden_info.find('.fn_h_post_type').val();
			var post_number 			= hidden_info.find('.fn_h_post_number').val();
			var post_offset 			= hidden_info.find('.fn_h_post_offset').val();
			var post_order 				= hidden_info.find('.fn_h_post_order').val();
			var post_orderby 			= hidden_info.find('.fn_h_post_orderby').val();

			if(button === 'filter'){
				category_id 			= element.data('id');
				page					= 0;
			}else{
				if(parent.find('.fn_filter li.active a').length){
					category_id				= parent.find('.fn_filter li.active a').data('id');
				}
			}

			var requestData = {
				action: 'arlo_fn_cs_ajax_grid_filter_posts',
				post_type: post_type,
				post_number: post_number,
				post_offset: post_offset,
				post_order: post_order,
				post_orderby: post_orderby,
				ratio: ratio,
				format: format,
				page: page,
				category_id: category_id,
			};

			if(post_type === 'portfolio'){
				requestData.post_included_items 		= hidden_info.find('.fn_h_post_included_items').val();
				requestData.post_excluded_items 		= hidden_info.find('.fn_h_post_excluded_items').val();
				requestData.post_included_categories 	= hidden_info.find('.fn_h_post_included_categories').val();
				requestData.post_excluded_categories 	= hidden_info.find('.fn_h_post_excluded_categories').val();
			}

			$.ajax({
				type: 'POST',
				url: fn_ajax_object.fn_ajax_url,
				cache: false,
				data: requestData,
				success: function(data) {
					var fnQueriedObj 	= $.parseJSON(data);
					var length			= parent.find('.fn_posts ul li').length;
					if(button === 'filter'){
						parent.find('.fn_filter li').removeClass('active');
						element.parent().addClass('active');
						parent.find('.fn_posts ul').html(fnQueriedObj.becipe_fn_data);
					}else{
						parent.find('.fn_posts ul').append(fnQueriedObj.becipe_fn_data);
					}
					
					hidden_info.find('.fn_h_page').val(fnQueriedObj.page);
					if(fnQueriedObj.disabled === 'disabled'){
						parent.find('.fn_ajax_more').slideUp(500);
					}else{
						parent.find('.fn_ajax_more').slideDown(500);
					}
					Frel.BgImg();
					Frel.ImgToSVG();
					parent.removeClass('loading');
					var speed			= 1000;
					var listItem 		= parent.find('.fn_posts ul > li.fn_animated');
					if(listItem.length){
						setTimeout(function(){
							listItem.each(function(i, e){
								setTimeout(function(){
									$(e).addClass('fadeInTop done');
								}, (i*100));
							});
						}, 100);
					}else{
						parent.find('.fn_animated').addClass('fadeInTop done');
					}
					length += 1;
					if(button === 'filter'){length = 1;}
					$([document.documentElement, document.body]).animate({
						scrollTop: parent.find('.fn_posts ul li:nth-child('+(length)+')').offset().top - Frel.adminBarH
					}, speed);

//							FrenifyArlo.paginationFilter();
				},
				error: function(xhr, textStatus, errorThrown){
					console.log(errorThrown);
					console.log(textStatus);
					console.log(xhr);
				}
			});
		},
		
		ajaxGridPosts: function(){
			var ajax_more = $('.fn_cs_posts_ajax_grid .fn_ajax_more a');
			if(ajax_more.length){
				ajax_more.on('click',function(){
					var element = $(this);
					var parent 	= element.closest('.fn_cs_posts_ajax_grid');
					Frel.ajaxGridPosts__function(parent,'more',element);
					return false;
				});
			}
			var filter = $('.fn_cs_posts_ajax_grid .fn_filter a');
			if(filter.length){
				filter.on('click',function(){
					var element = $(this);
					var parent 	= element.closest('.fn_cs_posts_ajax_grid');
					Frel.ajaxGridPosts__function(parent,'filter',element);
					return false;
				});
			}
		},
		
		zigzagPosts: function(){
			Frel.BgImg();
			$('.fn_cs_post_zigzag .img_holder').on('mouseenter',function(){
				$(this).parent().addClass('hovered');
			}).on('mouseleave',function(){
				$(this).parent().removeClass('hovered');
			});
		},
		
		sliderCols: function(){
			$('.fn_cs_post_silder_cols .inner').each(function(){
				var element 	= $(this);
				var container 	= element.find('.swiper-container');
				var mySwiper 	= new Swiper (container, {
					loop: true,
					slidesPerView: 4,
					spaceBetween: 40,
					speed: 1000,
					loopAdditionalSlides: 20,
					autoplay: {
						delay: 7000,
					},
					on: {
						autoplayStop: function(){
							mySwiper.autoplay.start();
						},
						slideChange: function () {
							Frel.ImgToSVG();
						},
					},
					pagination: {
						el: '.fn_cs_swiper__progress',
						type: 'custom', // progressbar
						renderCustom: function (swiper,current,total) {

							// progress animation
							var scale,translateX;
							var progressDOM	= container.find('.fn_cs_swiper__progress');
							if(progressDOM.hasClass('fill')){
								translateX 	= '0px';
								scale		= parseInt((current/total)*100)/100;
							}else{
								scale 		= parseInt((1/total)*100)/100;
								translateX 	= (current-1) * parseInt((100/total)*100)/100 + 'px';
							}


							progressDOM.find('.all span').css({transform:'translate3d('+translateX+',0px,0px) scaleX('+scale+') scaleY(1)'});
							if(current<10){current = '0' + current;}
							if(total<10){total = '0' + total;}
							progressDOM.find('.current').html(current);
							progressDOM.find('.total').html(total);
						}
					},
					breakpoints: {
						0: {
							slidesPerView: 1,
							spaceBetween: 0,
						},
						700: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 40
						},
						1300: {
							slidesPerView: 4,
							spaceBetween: 40
						}
					}
				});
			});
			Frel.ImgToSVG();
		},
		
		interactiveAll: function(){
			Frel.interactive1();
			Frel.interactive2();
			Frel.interactive3();
			Frel.interactive4();
			Frel.interactive5();
			Frel.interactive6();
			Frel.interactiveAnimation1();
			Frel.interactiveAnimation2();
			Frel.interactiveAnimation3();
		},
		
		interactiveAnimation1: function(){
			var list	= $('.fn_cs_interactive_list_vertical .project_list_wrap ul li');
			
			if($('body').hasClass('elementor-editor-active')){
				setTimeout(function(){
					list.each(function(i){
						var element = $(this);
						setTimeout(function(){element.addClass('opened');},i*100);
					});
				},100);
			}else{
				$(window).on('load',function(){
					setTimeout(function(){
						list.each(function(i){
							var element = $(this);
							setTimeout(function(){element.addClass('opened');},i*100);
						});
					},1800);
				});
			}
		},
		
		interactiveAnimation2: function(){
			var list	= $('.fn_cs_interactive_list_vertical_half .project_list_wrap ul li');

			if($('body').hasClass('elementor-editor-active')){
				setTimeout(function(){
					list.each(function(i){
						var element = $(this);
						setTimeout(function(){element.addClass('opened');},i*100);
					});
				},100);
			}else{
				$(window).on('load',function(){
					setTimeout(function(){
						list.each(function(i){
							var element = $(this);
							setTimeout(function(){element.addClass('opened');},i*100);
						});
					},1800);
				});
			}
		},

		interactiveAnimation3: function(){
			var list	= $('.fn_cs_interactive_list_horizontal_half .project_list_wrap ul li');

			if($('body').hasClass('elementor-editor-active')){
				setTimeout(function(){
					list.each(function(i){
						var element = $(this);
						setTimeout(function(){element.addClass('opened');},i*100);
					});
				},100);
			}else{
				$(window).on('load',function(){
					setTimeout(function(){
						list.each(function(i){
							var element = $(this);
							setTimeout(function(){element.addClass('opened');},i*100);
						});
					},1800);
				});
			}
		},
		
		modernCols: function(){
			if($('.fn_cs_post_modern_rows').length){
				Frel.BgImg();
			}
		},
		
		interactive2: function(){
			if($('.fn_cs_interactive_list_vertical').length){
				Frel.BgImg();
				Frel.interactive2Animation();
				Frel.interactive2Scroll();
			}
		},
		
		interactive3: function(){
			if($('.fn_cs_interactive_list_vertical_half').length){
				Frel.BgImg();
				Frel.interactive3Animation();
				Frel.interactive3Scroll();
			}
		},
		
		interactive4: function(){
			if($('.fn_cs_interactive_list_horizontal_half').length){
				Frel.BgImg();
				Frel.interactive4Animation();
			}
		},
		
		interactive5: function(){
			if($('.fn_cs_portfolio_demo_second').length){
				Frel.interactive5Animation();
				Frel.BgImg();
				Frel.interactive5Hover3D();
				Frel.interactive5Scroll();
			}
		},
		
		interactive5Animation: function(){
			var dataHover		= $('.fn_cs_portfolio_demo_second').data('hover-animation');
			var list			= $('.fn_cs_portfolio_demo_second .leftpart ul li');
			var totalNumber		= list.length;
			if(totalNumber < 10){
				totalNumber = '0'+totalNumber;
			}
			$('.fn_cs_portfolio_demo_second .pagination .total').html(totalNumber);
			
			
			list.on('mouseenter',function(){
				var element 	= $(this);
				var parent		= element.closest('.fn_cs_portfolio_demo_second');
				var rightList	= parent.find('.rightpart ul li');
				var liHeight	= parent.find('.rightpart ul li').height();
				var index		= element.index();
				
				var liNthChild		= index+1;
				var lastDigit		= parseInt(liNthChild % 10);
				var transformOne 	= -(lastDigit*32);
				var transformZero 	= -((liNthChild-lastDigit) / 10)*32;
				
				$('.fn_cs_portfolio_demo_second .pagination .one .moving_spans').css({transform:'translateY('+transformOne+'px)'});
				$('.fn_cs_portfolio_demo_second .pagination .zero .moving_spans').css({transform:'translateY('+transformZero+'px)'});
				
				if(dataHover === 'slider'){
					if(!element.hasClass('active')){
						list.removeClass('active');
						element.addClass('active');
						var H	= index*liHeight;
						parent.find('.rightpart ul').css({transform:'translateY(-'+H+'px)'});
					}
				}else{
					if(!element.hasClass('active')){
						list.removeClass('active');
						element.addClass('active');
						rightList.removeClass('active');
						parent.find('.rightpart ul li:nth-child('+liNthChild+')').addClass('active');
					}
				}
				if(parent.find('video').length){
					parent.find('video').get(0).pause();
				}
				if(element.hasClass('video')){
					parent.find('.rightpart ul li:nth-child('+liNthChild+')').find('video').get(0).play();
					parent.find('.rightpart ul li:nth-child('+liNthChild+')').find('video').one("play", function() {
						this.currentTime = 0;
					});
				}
				
			});
			
		},
		
		interactive5Hover3D: function(){
			
			var section		= $('.fn_cs_portfolio_demo_second');
				section.each(function(){
					var element			= $(this);
					var sensitivity		= parseInt(element.data('sensitivity'));
					var shine			= element.data('shine-mode');
					
					if(shine === 'yes'){
						shine = true;
					}else if(shine === 'no'){
						shine = false;
					}
					
					element.find(".rightpart_inner").hover3d({
						selector: "ul li",
						sensitivity: sensitivity,
						perspective: 3000,
						shine: shine
					});
				});
				
		},
		
		interactive5Scroll: function(){
							
			var H				= $(window).height();
			var scrollable		= $('.fn_cs_portfolio_demo_second .scrollable');
			var leftPart		= $('.fn_cs_portfolio_demo_second .leftpart');

			leftPart.css({height:H-230});

			scrollable.each(function(){
				var element		= $(this);

				element.css({height: H-230}).niceScroll({
					touchbehavior:false,
					cursorwidth:0,
					autohidemode:true,
					cursorborder:"0px solid #eee"
				});
			});
				
		},
		
		interactive4Animation: function(){
			
			var horizontalHalf		= $('.fn_cs_interactive_list_horizontal_half');
			if(horizontalHalf.length){
				if(!$('.fn_cs_horizontal_box').length){
					$('body').append('<div class="fn_cs_horizontal_box">');
				}
				var movingBox		= $('.fn_cs_horizontal_box');
				var boxHeight		= movingBox.height();
				var list			= $('.fn_cs_interactive_list_horizontal_half .project_list_wrap ul li');	
				list.on('mouseenter',function(){
					var element			= $(this);
					if(!element.hasClass('active')){
						list.removeClass('active');
						element.addClass('active');
						movingBox.addClass('active');
						var liOffset	= element.offset().top;
						var imgURL		= element.find('img').attr('src');
						movingBox.css({backgroundImage: 'url('+imgURL+')'});
						movingBox.css({top:(liOffset-boxHeight)+'px'});
					}
					if(element.hasClass('video')){
						var video 		= element.find('.bg_video_wrapper').html();
						movingBox.html(video);
					}else{
						movingBox.html('');
					}
				}).on('mouseleave',function(){
					list.removeClass('active');
					movingBox.removeClass('active');
				}).on('mousemove',function(event){
					var xmove		= event.clientX;
					movingBox.css({left:(xmove-movingBox.width()/2)+'px'});
				});
			}
		},
		
		interactive3Animation: function(){
			var verticalHalf = $('.fn_cs_interactive_list_vertical_half');
			if(verticalHalf.length){
				if(!$('.fn_cs_vertical_box').length){
					$('body').append('<div class="fn_cs_vertical_box"></div>');
				}
				var movingBox		= $('.fn_cs_vertical_box');
				var movingH			= movingBox.height();
				var movingW			= movingBox.width();
				var innerOffsetleft = verticalHalf.find('.inner_wrap').offset().left;
				var list		= $('.fn_cs_interactive_list_vertical_half .project_list_wrap ul li');
				movingBox.css({left:innerOffsetleft-movingW});
				
				list.on('mouseenter',function(){
					var element			= $(this);
					if(!element.hasClass('active')){
						list.removeClass('active');
						element.addClass('active');
						movingBox.addClass('active');
						var imgURL		= element.find('img').attr('src');
						movingBox.css({backgroundImage: 'url('+imgURL+')'});
					}
					
					
					if(element.hasClass('video')){
						var video 		= element.find('.bg_video_wrapper').html();
						movingBox.html(video);
					}else{
						movingBox.html('');
					}
				}).on('mouseleave',function(){
					list.removeClass('active');
					movingBox.removeClass('active');
				}).on('mousemove',function(event){
					var ymove		= event.clientY;
					movingBox.css({top:(ymove - movingH/2)+'px'});
				});
			}
			
		},
		
		interactive3Scroll: function(){
			var H				= $(window).height();
			var scrollable		= $('.fn_cs_interactive_list_vertical_half .scrollable');
			var inner			= $('.fn_cs_interactive_list_vertical_half .project_list_wrap .inner_wrap');

			inner.css({height:H-160});

			scrollable.each(function(){
				var element		= $(this);

				element.css({height: H-160}).niceScroll({
					touchbehavior:false,
					cursorwidth:0,
					autohidemode:true,
					cursorborder:"0px solid #eee"
				});
			});
		},
		
		interactive2Animation: function(){
			var list			= $('.fn_cs_interactive_list_vertical .project_list_wrap ul li');
			
			list.on('mouseenter',function(){
				var element 		= $(this);
				var index 			= element.index(); 	// index starts from 0 (not 1)
				var parent			= element.closest('.fn_cs_interactive_list_vertical');
				var galleryList		= parent.find('.gallery_list_wrap ul li');
				var childNumber		= index+1;			// get same child number from second list
				if(!element.hasClass('active')){
					list.removeClass('active');
					element.addClass('active');
					galleryList.removeClass('active');
					parent.find('.gallery_list_wrap ul li:nth-child('+childNumber+')').addClass('active');
					if(galleryList.find('video').length){
						galleryList.find('video').get(0).pause();
					}
					if(element.hasClass('video')){
						parent.find('.gallery_list_wrap ul li:nth-child('+childNumber+')').find('video').get(0).play();
						parent.find('.gallery_list_wrap ul li:nth-child('+childNumber+')').find('video').one("play", function() {
							this.currentTime = 0;
						});
					}
				}
			});
		},
		
		interactive2Scroll: function(){

			var H				= $(window).height();
			var scrollable		= $('.fn_cs_interactive_list_vertical .scrollable');
			var leftPart		= $('.fn_cs_interactive_list_vertical .project_list_wrap .inner_wrap');

			leftPart.css({height:H-180});

			scrollable.each(function(){
				var element		= $(this);

				element.css({height: H-180}).niceScroll({
					touchbehavior:false,
					cursorwidth:0,
					autohidemode:true,
					cursorborder:"0px solid #eee"
				});
			});

		},
		
		interactive1: function(){
			if($('.fn_cs_flickity_slider').length){
				Frel.BgImg();
				Frel.interactive1Animation();
			}
		},
		
		interactive1Animation: function(){
			var interactiveFlickity		= $('.fn_cs_flickity_slider');
			interactiveFlickity.each(function(){
				var element		= $(this);
				element.on( 'ready.flickity', function() {
					Frel.postsInteractive1Callback(element);
				});
				var $carousel	= element.find('.slider_wrap ul').flickity({
					cellAlign: 'center',
					draggable: true,
					pageDots: false,
					prevNextButtons: '',
				});
				$carousel.on( 'dragEnd.flickity', function() {
					Frel.postsInteractive1Callback(element);
				});
			});
		},
		
		postsInteractive1Callback: function(element){
			var index 	= element.find('.slider_wrap ul li.is-selected').index();
			var allLi	= element.closest('.fn_cs_flickity_slider').find('.main_bg_image ul li');
			var sameLi	= element.closest('.fn_cs_flickity_slider').find('.main_bg_image ul li:nth-child('+(index+1)+')');
			allLi.removeClass('active');
			sameLi.addClass('active');
			if(allLi.find('video').length){
				allLi.find('video').get(0).pause();
			}
			if(sameLi.hasClass('video')){
				if(sameLi.find('video').length){
					sameLi.find('video').get(0).play();
					sameLi.find('video').one("play", function() {
						this.currentTime = 0;
					});
				}
			}
		},
		
		allGalleryFunctions: function(){
			Frel.justifiedGallery();
			Frel.galleryMasonry();
			Frel.BgImg();
			Frel.gallerySlider();
		},
		
		justifiedGallery: function(){
			Frel.lightGallery();
			var justified = $(".fn_cs_gallery_justified");
			justified.each(function(){
				var element 	= $(this);
				var height		= parseInt(element.attr('data-height'));
				var gutter		= parseInt(element.attr('data-gutter'));
				if(!height || height === 0){height = 400;}
				if(!gutter || gutter === 0){gutter = 10;}
				if($().justifiedGallery){
					element.justifiedGallery({
						rowHeight : height,
						lastRow : 'nojustify',
						margins : gutter,
						refreshTime: 500,
						refreshSensitivity: 0,
						maxRowHeight: null,
						border: 0,
						captions: false,
						randomize: false
					});
				}
			});
		},
		
		halfImageText: function(){
			Frel.BgImg();
			Frel.jarallaxEffect();
		},
		
		galleryMasonry: function(){
			Frel.lightGallery();
			Frel.isotopeFunction();
		},
		
		magnificPopup: function(){
			Frel.BgImg();
			$('.popup-youtube').each(function() { // the containers for all your galleries
				$(this).magnificPopup({
					disableOn: 700,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false
				});
			});	
		},
		
		toTopJumper: function(){
			var totop		= $('a.fn_cs_w_totop');
			if(totop.length){
				totop.on('click', function(e) {
					e.preventDefault();		
					$("html, body").animate(
						{ scrollTop: 0 }, 'slow');
					return false;
				});
			}
		},
		
		gallerySlider: function(){
			$('.fn_cs_gallery_slider .inner').each(function(){
				var element 	= $(this);
				var container 	= element.find('.swiper-container');
				var mySwiper 	= new Swiper (container, {
					loop: true,
					slidesPerView: 1,
					spaceBetween: 100,
					speed: 800,
					loopAdditionalSlides: 50,
					autoplay: {
						delay: 8000,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
				  	},
					on: {
						init: function(){
							element.closest('.fn_cs_gallery_slider').addClass('ready');
						},
						autoplayStop: function(){
							mySwiper.autoplay.start();
						},
				  	},
					pagination: {
						el: '.fn_cs_swiper_progress',
						type: 'custom', // progressbar
						renderCustom: function (swiper,current,total) {
							
							// progress animation
							var scale,translateX;
							var progressDOM	= container.find('.fn_cs_swiper_progress');
							if(progressDOM.hasClass('fill')){
								translateX 	= '0px';
								scale		= parseInt((current/total)*100)/100;
							}else{
								scale 		= parseInt((1/total)*100)/100;
								translateX 	= (current-1) * parseInt((100/total)*100)/100 + 'px';
							}
							
							
							progressDOM.find('.all span').css({transform:'translate3d('+translateX+',0px,0px) scaleX('+scale+') scaleY(1)'});
							if(current<10){current = '0' + current;}
							if(total<10){total = '0' + total;}
							progressDOM.find('.current').html(current);
							progressDOM.find('.total').html(total);
						}
				  	}
			  	});
			});
			Frel.BgImg();
		},
		
		counter: function(){
			var element = $('.fn_cs_counter');
			element.each(function() {
				var el 	= $(this);
				el.waypoint({
					handler: function(){
						if(!el.hasClass('stop')){
							el.addClass('stop').countTo({
								refreshInterval: 50,
								formatter: function (value, options) {
									return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
								},	
							});
						}
					},
					offset:'90%'	
				});
			});		
		},
		
		shareFunction: function(){
			Frel.ImgToSVG();
			if($('.fn_cs_share_like').length){
				$('.fn_cs_share_like').each(function(){
					var shareBox		= $(this);
					var share	 		= shareBox.find('.arlo_fn_sharebox');
					if(share.length){
						var ulWidth		= share.find('ul').outerWidth(true);
						var ownWidth	= share.outerWidth(true);
						share.find('.share_after').css({width: (ulWidth + ownWidth) + 'px'});
					}
				});
				$('.arlo_fn_sharebox .hover_wrapper').on('mouseenter',function(){
					$(this).parent().addClass('opened').parent().addClass('opened').siblings().addClass('opened');
				});
				$('.arlo_fn_sharebox ul').on('mouseleave',function(){
					$(this).parent().removeClass('opened').parent().removeClass('opened').siblings().removeClass('opened');
				});
				$('.arlo_fn_sharebox').on('mouseleave',function(){
					$(this).removeClass('opened').parent().removeClass('opened').siblings().removeClass('opened');
				});
			}	
		},
		
		checkItForImageAfterBefore: function(count,wrapper){
			if(count === 2){
				wrapper.find('[data-orientation!="vertical"]').each(function(){
					$(this).twentytwenty({default_offset_pct: 0.5});
				});
				wrapper.find('[data-orientation="vertical"]').each(function(){
					$(this).twentytwenty({default_offset_pct: 0.5, orientation: 'vertical'});
				});	
			}
		},
		
		imageAfterBefore: function(){
			$('.fn_cs_after_before').each(function(){
				var count 		= 0;
				var wrapper		= $(this);
				var container	= wrapper.find('.twentytwenty-container');
				var firstImage	= container.find('img:nth-child(1)');
				var firstURL	= firstImage.attr('src');
				var secondImage	= container.find('img:nth-child(1)');
				var secondURL	= secondImage.attr('src');
				firstImage.attr('src', firstURL).load(function() {
					count++;
					Frel.checkItForImageAfterBefore(count,wrapper);
				});
				secondImage.attr('src', secondURL).load(function() {
					count++;
					Frel.checkItForImageAfterBefore(count,wrapper);
				});
			});
			
			
		},
		
		pSingleTitleHero: function(){
			Frel.scrollToNextSection();
			Frel.BgImg();
			Frel.jarallaxEffect();
		},
		
		scrollToNextSection: function(){
			$('.fn_cs_psingle_hero_title a.bottom_btn').off().on('click',function(){
				var btn			= $(this);
				var hero		= btn.closest('.fn_cs_psingle_hero_title');
				var topOffset	= hero.offset().top;
				var height		= hero.height();
				$("html, body").animate({ scrollTop: topOffset+height-Frel.adminBarH }, 1000);
				return false;
			});
		},
		
		portfolioSinglePrevnext: function(){
			Frel.BgImg();
			Frel.ImgToSVG();
			if($('.fn_cs_psingle_prevnext').length){
				if($('.fn_cs_psingle_prevnext').data('hotkey') === 'enabled'){
					$(document).keyup(function(e) {
						if(e.key.toLowerCase() === 'p') {
							var a = $('.fn_cs_psingle_prevnext').find('a.previous_project_link');
							if(a.length){
								window.location.href = a.attr('href');
								return false;
							}
						}
						if(e.key.toLowerCase() === 'n') {
							var b = $('.fn_cs_psingle_prevnext').find('a.next_project_link');
							if(b.length){
								window.location.href = b.attr('href');
								return false;
							}
						}
					});
				}
			}
		},
		
			
		
		
	};
	
	$( window ).on( 'elementor/frontend/init', Frel.init );
	
	
	$( window ).on( 'elementor/frontend/init', Frel.miniBoxesForShortcodes );
	$( window ).on('resize',function(){
		Frel.halfSliderScroll();
		Frel.agencyBlogListHeight();
		Frel.recalcPartnerHeight();
		Frel.interactive5();
		Frel.interactive4();
		Frel.interactive3();
		Frel.interactive2();
		Frel.shareFunction();
		Frel.portfolioDemoSecond();
		Frel.projectCategoryFilter();
		Frel.personalAllfunctions();
		Frel.interactiveListVertical();
		Frel.interactiveListVerticalHalf();
		Frel.interactiveListHorizontalHalf();
		Frel.miniBoxesForShortcodes();
		Frel.miniSBoxesForShortcodes();
		Frel.supportBlockBgCalc();
		Frel.introduceCalcFunction();
		Frel.filterj();
		Frel.isotopeFunction();
		Frel.principleModernShapeCalc();
		setTimeout(function(){
			Frel.miniBoxesForShortcodes();
			Frel.miniSBoxesForShortcodes();
			Frel.supportBlockBgCalc();
			Frel.introduceCalcFunction();
			Frel.isotopeFunction();
			Frel.personalAllfunctions();
			Frel.filterj();
			Frel.principleModernShapeCalc();
		},700);
	});
	$( window ).on('load',function(){
		Frel.miniBoxesForShortcodes();
		Frel.miniSBoxesForShortcodes();
		Frel.supportBlockBgCalc();
		Frel.introduceCalcFunction();
		Frel.isotopeFunction();
		Frel.personalAllfunctions();
		Frel.filterj();
		Frel.principleModernShapeCalc();
	});
	
})(jQuery, window.elementorFrontend);

(function($){
  "use strict";
  
  
  var ArloReadyHook = {
    
    
    init: function(){
      this.contactWrapSpan();
    },
    
    contactWrapSpan: function(){
      if($('.arlo_fn_personal3_contact input[type=submit]').length){
        $('.arlo_fn_personal3_contact input[type=submit]').wrap('<span class="my_button"></span>');
      }
    }
    
    
  };
  
  $(document).ready(function(){ArloReadyHook.init();});
  
})(jQuery);