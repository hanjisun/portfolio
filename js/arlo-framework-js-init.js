/*
 * Copyright (c) 2021 Frenify
 * Author: Frenify
 * This file is made for CURRENT THEME
*/


/*

	@Author: Frenify
	@URL: http://themeforest.net/user/frenify


	This file contains the jquery functions for the actual theme, this
	is the file you need to edit to change the structure of the
	theme.

	This files contents are outlined below.

*/


var siteurl 	= fn_ajax_object.siteurl;


(function ($){

	"use strict";
	
    var ArloInit 		= {
		
		myLocation: '^https://arlo.frenify.net/1/',
		
		megaMenuHovered: 0,
		
		pageNumber: 1,
		
        init: function () {
			
			this.ex_link_fixer();
			this.subscribe_form();
			this.smoothScrollTriggerMenu();
			this.portfolioPagination();
			this.portfolioFilter();
			this.hamburgerOpener__LinesNav();
			this.megamenu__LinesNav();
			this.calcLeftRight__LinesNav();
			this.searchbox__LinesNav();
			this.anchor();
			this.checkSidebarForEmptiest();
			this.languageboxOpener__LinesNav();
			this.calcMovingLanguagebox__LinesNav();
			this.imgToSVG();
			this.dataFnBgImg();
			this.hamburgerOpener__Mobile();
			this.submenu__Mobile();
			this.toTopJumper();
			this.fixedTotopScroll();
			this.blogPostSlider();
			this.lightBox();
			this.estimateWidgetHeight();
			this.justifiedImage();
			this.stickySidebar();
			this.allPagesMinHeight();
			this.isotopeMasonry();
			this.select2();
			this.taglineFocus();
			this.submenu__SidebarNav();
			this.submenu__TriggerNav();
			this.submenuRTL__SidebarNav();
			this.menuNiceScroll__SidebarNav();
			this.menuNiceScroll__TriggerNav();
			this.sidebarCloser__SidebarNav();
			this.triggerHookAddCount();
			this.stickyNav_LinesNav();
			this.like();
			this.portfolioPageBlock__imgHeight();
			this.porfolioPageBlock__paginationFilter();
			this.porfolioPageBlock__categoryFilter();
        },
		
		subscribe_form: function(){
			$('.arlo_fn_widget_subscribers a').on('click',function() {
				var e		= $(this);
				var p		= e.closest('.arlo_fn_widget_subscribers');
				var m		= p.find('.message');
				var i		= p.find('input');
				var email	= i.val();
				m.removeClass('error success');
				if(e.hasClass('loading')){
					m.addClass('error').html(m.data('loading')).slideDown(500).delay(2000).slideUp(500);
					return false;
				}
				e.addClass('loading');
				// conditions
				if(email === ''){
					m.addClass('error').html(m.data('no-email')).slideDown(500).delay(2000).slideUp(500);
					e.removeClass('loading');
					return false;
				}
				
				var emailRegex	= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(!emailRegex.test(email)){
					m.addClass('error').html(m.data('invalid-email')).slideDown(500).delay(2000).slideUp(500);
					e.removeClass('loading');
					return false;
				}
				
				var requestData = {
					action: 'arlo_fn_subsribe__add_email',
					email: email
				};
				
				$.ajax({
					type: 'POST',
					url: fn_ajax_object.fn_ajax_url,
					cache: false,
					data: requestData,
					success: function(data) {
						var fnQueriedObj 	= $.parseJSON(data);
						var status			= fnQueriedObj.status;
						if(status === 'old'){
							m.addClass('success').html(m.data('old-email')).slideDown(500).delay(2000).slideUp(500);
							i.val('');
							e.removeClass('loading');
						}else if(status === 'new'){
							m.addClass('success').html(m.data('success')).slideDown(500).delay(2000).slideUp(500);
							i.val('');
							e.removeClass('loading');
						}else if(status === 'invalid_email'){
							m.addClass('error').html(m.data('invalid-email')).slideDown(500).delay(2000).slideUp(500);
							e.removeClass('loading');
							return false;
						}
					},
					error: function() {
						
					}
				});
				return false;
			 });	
		},
		
		ex_link_fixer: function(){
			$('a[href*="fn_ex_link"]').each(function(){
				var oldUrl 	= $(this).attr('href');
				var array   = oldUrl.split('fn_ex_link/');
				var newUrl  = siteurl + "/" + array[1];
				$(this).attr('href', newUrl);
			});	
		},
		
		
		portfolioPageBlock__imgHeight: function(){
			var ww			= $(window).width();
			
			//420-300
			if(ww >= 1040){
				var wrapper		= $('.fn_cs_agency_filter');
				var ratio		= wrapper.attr('data-ratio');
				var leftImage	= wrapper.find('.first_row img');
				if(wrapper.find('.second_row .item:nth-child(1) img').length){
					var secondItem	= wrapper.find('.second_row .item');
					var imageHeight = secondItem.width()*ratio*2; 
					var titleHeight	= wrapper.find('.second_row .item:nth-child(1) .title_holder').outerHeight(true)+44;
					var rigtDetails	= imageHeight+titleHeight;
					leftImage.css({height:rigtDetails+'px'});
				}
			}
		},
		
		porfolioPageBlock__paginationFilter: function(){
			var self = this;
			$('.arlo_fn_portfolio_block .my_pagination ul li a').off().on('click',function(){
				var thisButton 			= $(this);
				var parent				= thisButton.parent();
				var abb					= thisButton.closest('.arlo_fn_portfolio_block');
				if(thisButton.hasClass('active')){
					return false;
				}
				if(!abb.hasClass('go')){
					abb.addClass('go');
					var filter_category		= abb.find('.posts_filter a.active').attr('data-filter-name');


					var requestData = {
						action: 'arlo_fn_portfolio_block_ajax',
						filter_category: filter_category,
						filter_page: parseInt(thisButton.html()),
					};


					$.ajax({
						type: 'POST',
						url: fn_ajax_object.fn_ajax_url,
						cache: false,
						data: requestData,
						success: function(data) {
							var fnQueriedObj 	= $.parseJSON(data);
							var html			= fnQueriedObj.data;
							abb.find('.fn_cs_agency_filter').html(html);
							self.dataFnBgImg();
							parent.addClass('current');
							parent.siblings().removeClass('current');
							abb.removeClass('go');
							self.portfolioPageBlock__imgHeight();
							self.porfolioPageBlock__paginationFilter();
//							Frel.gogogo(abb);
						},
						error: function(xhr, textStatus, errorThrown){
							abb.removeClass('go');
						}
					});
				}
					
				
				return false;
			});	
		},
		
		porfolioPageBlock__categoryFilter: function(){
			var self					= this;
			var filters					= $('.arlo_fn_portfolio_block_filter li a');
			filters.off().on('click',function(){
				var thisButton 			= $(this);
				var parent				= thisButton.parent();
				var abb					= thisButton.closest('.arlo_fn_portfolio_block');
				if(thisButton.hasClass('active')){
					return false;
				}
				if(!abb.hasClass('go')){
					abb.addClass('go');
					filters.removeClass('active')
					thisButton.addClass('active')
					var categoryNumber	= thisButton.attr('data-filter-name');


					var requestData = {
						action: 'arlo_fn_portfolio_block_ajax',
						filter_category: categoryNumber,
						filter_page: 1,
					};


					$.ajax({
						type: 'POST',
						url: fn_ajax_object.fn_ajax_url,
						cache: false,
						data: requestData,
						success: function(data) {
							console.log(data);
							var fnQueriedObj 	= $.parseJSON(data);
							var html			= fnQueriedObj.data;
							abb.find('.fn_cs_agency_filter').html(html);
							self.dataFnBgImg();
							parent.addClass('current');
							parent.siblings().removeClass('current');
							abb.removeClass('go');
							self.portfolioPageBlock__imgHeight();
							self.porfolioPageBlock__paginationFilter();
						},
						error: function(xhr, textStatus, errorThrown){
							abb.removeClass('go');
						}
					});
				}
					
				
				return false;
			});
			
			self.porfolioPageBlock__paginationFilter();
		},
		
		smoothScrollTriggerMenu: function(){
			$(document).ready(function() {
				$(window).bind("load", function() {
					$('.arlo_fn_triggermenu ul.nav__ver > li > a[href*="#"]:not([href="#"])').click(function() {
						if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') ||
							location.hostname === this.hostname) {
							var target = $(this.hash);
							target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
							if (target.length) {

								$("html, body").animate({
									scrollTop: target.offset().top - 10
								}, 1000);

								$('.arlo_fn_triggermenu').removeClass('opened');
								$('.arlo_fn_hamburger .hamburger').removeClass('is-active');
								$('.arlo_fn_hamburger .fn_hamburger').removeClass('is-active');
								return false;
							}
						}
					});
				});
			});
			$(window).load(function() {
				function goToByScroll(id) {
					if($("#" + id).length){
						$("html, body").animate({
							scrollTop: $("#" + id).offset().top - 10
						}, 1000);
					}
				}
				if (window.location.hash !== '') {
					goToByScroll(window.location.hash.substr(1));
				}
			});
		},
		
		portfolioFilter: function(){
			var self	= this;
			var filterB = $('.arlo_fn_portfolio_category_filter');
			var mainBtn = $('.arlo_fn_portfolio_category_filter > a');
			var filter	= $('.portfolio_list ul.fn_filter');
			var btns 	= $('.portfolio_list ul.fn_filter a');
			var spinner	= $('.arlo_fn_portfolio_category_filter span.spinner');
			var listIn	= $('.arlo_fn_portfolio_page .portfolio_list_in');

			if($().waitForImages){
				$(window).load(function(){
					$('.arlo_fn_portfolio_page .portfolio_list_in').waitForImages(function() {
						setTimeout(function(){
							listIn.css({height:$('.arlo_fn_portfolio_page .portfolio_list_in').height()});
						},1500);
					});
				});
			}

			$(window).on('click',function() {
				filter.removeClass('opened');
				filterB.removeClass('opened');
			});

			mainBtn.on('click',function(event){
				event.stopPropagation();
				if(filter.hasClass('opened')){
					filter.removeClass('opened');
					filterB.removeClass('opened');
				}else{
					filter.addClass('opened');
					filterB.addClass('opened');
				}
				return false;
			});
			btns.on('click',function(){
				var element = $(this);
				var ID 		= element.data('filter-value');
				var name 	= element.data('filter-name');
				listIn.addClass('active');
				spinner.addClass('active');
				btns.removeClass('active');
				element.addClass('active');
				self.ajaxPortfolioPagination(ID, 1);
				mainBtn.html(name);
				filter.removeClass('opened');
				filterB.removeClass('opened');
				self.pageNumber = 1;
				return false;
			});
			mainBtn.html($('.portfolio_list ul.fn_filter a.active').html());	
		},
		
		portfolioPagination: function(){
			var self = this;
			$('.arlo_fn_ajax_pagination ul.ajax_pagination li a.next').on('click', function(){
				if($(this).hasClass('inactive')) {return false;}
				self.pageNumber++;
				var currentCat = $('ul.fn_filter a.active').data('filter-value');
				if(currentCat === 'undefined'){currentCat = '';}
				self.ajaxPortfolioPagination(currentCat, self.pageNumber);
				return false;
			});
			$('.arlo_fn_ajax_pagination ul.ajax_pagination li a.prev').on('click', function(){
				if($(this).hasClass('inactive')) {return false;}
				self.pageNumber--;
				var currentCat = $('ul.fn_filter a.active').data('filter-value');
				if(currentCat === 'undefined'){currentCat = '';}
				self.ajaxPortfolioPagination(currentCat, self.pageNumber);
				return false;
			});
		},
		ajaxPortfolioPagination: function(currentCategory,page){
			var self		= this;
			var requestData = {
				action: 'arlo_fn_ajax_service_list',
				arlo_fn_cat: currentCategory,
				arlo_fn_page: page
			};
			
			$.ajax({
				type: 'POST',
				url: fn_ajax_object.fn_ajax_url,
				cache: true,
				data: requestData,
				success: function(data) {
					self.ajaxProcessPortfolioPagination(data);
				},
				error: function(MLHttpRequest, textStatus, errorThrown) {
					console.log(MLHttpRequest);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});	
		},
		
		ajaxProcessPortfolioPagination: function(data){
			var self			= this;
			var fnQueriedObj 	= $.parseJSON(data); //get the data object
			var ul 				= $('ul.arlo_fn_portfolio_list');
			var spinner			= $('.arlo_fn_portfolio_category_filter span.spinner');
			ul.html(fnQueriedObj.arlo_fn_data);

			//hide or show prev
			if ( true === fnQueriedObj.arlo_fn_hide_prev ) {
				$('.arlo_fn_ajax_pagination ul li a.prev').addClass('inactive');
			} else {
				$('.arlo_fn_ajax_pagination ul li a.prev').removeClass('inactive');
			}

			//hide or show next
			if ( true === fnQueriedObj.arlo_fn_hide_next ) {
				$('.arlo_fn_ajax_pagination ul li a.next').addClass('inactive');
			} else {
				$('.arlo_fn_ajax_pagination ul li a.next').removeClass('inactive');
			}

			self.portfolioHeightFixer();
			spinner.removeClass('active');
			self.dataFnBgImg();
			self.imgToSVG();
			$("html, body").animate({ scrollTop: 0 }, 'slow');
		},
		
		portfolioHeightFixer: function(){
			var listIn	= $('.arlo_fn_portfolio_page .portfolio_list_in');
			listIn.removeClass('active').css({height:'auto'});
		},
		
		like: function(){
			var svg;
			var self	= this;
			if($('.fn_cs_share_like').length){
				svg = $('.fn_cs_share_like').data('url');
			}
			var ajaxRunningForLike = false;
			$('.arlo_fn_like').off().on('click', function(e) {
				e.preventDefault();

				var likeLink 		= $(this);
				var ID 				= $(this).attr('id');

				if(likeLink.hasClass('liked') || ajaxRunningForLike === true) {return false;}
				
				ajaxRunningForLike 	= true;
				
				var requestData 	= {
					action: 'arlo_fn_like', 
					ID: ID 
				};
				
				$.post(
					fn_ajax_object.fn_ajax_url,
					requestData,
					function(data){
//						likeLink.addClass('liked').attr('title','You already liked this!');
						likeLink.removeClass('not-rated').addClass('liked');
						likeLink.find('.arlo_w_fn_svg').remove();
						likeLink.find('.arlo_fn_like_count').before('<img src="'+svg+'" class="arlo_w_fn_svg" alt="" />');
						self.imgToSVG();
						likeLink.find('.arlo_fn_like_count').html(data);
						ajaxRunningForLike = false;
					}
				);

				return false;
			});
		},
		
		hamburgerOpener__LinesNav: function(){
			var trigger			= $('.arlo_fn_hamburger');
			var triggerMenu		= $('.arlo_fn_triggermenu');
			var closer			= triggerMenu.find('.trigger_closer');
			if(trigger.length){
				trigger.on('click',function(){
					var i		= 0;
					var hamb	= $(this).find('.hamburger');
					var fnHamb	= $(this).find('.fn_hamburger');
					if(hamb.length){
						if(hamb.hasClass('is-active')){
							hamb.removeClass('is-active');
						}else{
							i 	= 1;
							hamb.addClass('is-active');
						}
					}
					if(fnHamb.length){
						if(fnHamb.hasClass('is-active')){
							fnHamb.removeClass('is-active');
						}else{
							i 	= 1;
							fnHamb.addClass('is-active');
						}
					}
					if(i===1){
						setTimeout(function(){
							triggerMenu.addClass('opened');
						},200);
					}
				});
			}
			closer.off().on('click',function(){
				triggerMenu.removeClass('opened');
				$('.arlo_fn_hamburger .hamburger').removeClass('is-active');
				$('.arlo_fn_hamburger .fn_hamburger').removeClass('is-active');
			});
		},
		
		megamenu__LinesNav: function(){
			var self			= this;
			var closableDOM	 	= $('.arlo_fn_two_lines .sb_left,.arlo_fn_two_lines .sb_right,.arlo_fn_three_lines .third_middle,.arlo_fn_three_lines .third_top');
			var eS				= $('ul.nav__hor:not(.sticky__menu) > li');
			var m				= $('.arlo_fn_megamenu');
			eS.on('mouseenter',function(){
				var e 			= $(this);
				eS.removeClass('opened');
				m.html('');
				m.removeClass('opened');
				m.attr('data-cols','');
				if(e.find('.arlo_fn_sub').length){
					$('.arlo_fn_searchpopup .search_closer').trigger('click');
					var s		= e.find('.arlo_fn_sub');
					if(s.hasClass('dropdown')){
						return false;
					}
					var col	 	= s.data('cols');
					var h		= s.html();
					e.addClass('opened');
					m.html(h);
					m.attr('data-cols',col);
					m.addClass('opened');
				}
			}).on('mouseleave',function(){
				setTimeout(function(){
					if(!m.hasClass('hovered') && self.megaMenuHovered === 0){
						m.removeClass('opened');
						eS.removeClass('opened');
					}
				},10);
			});

			m.on('mouseenter',function(){
				self.megaMenuHovered = 1;
				m.addClass('hovered');
			}).on('mouseleave',function(){
				m.removeClass('opened hovered');
				eS.removeClass('opened');
				self.megaMenuHovered = 0;
			});

			closableDOM.on('mouseenter',function(){
				m.removeClass('opened');
				eS.removeClass('opened');
			});
			
			
			// middle logo for one line navigation
			var middleLogo1		= $('.arlo_fn_one_line[data-middle-logo="1"]');
			var hiddenLogo1		= $('.arlo_fn_one_line .fn_logo');
			if(middleLogo1.length && hiddenLogo1.length){
				var length1		= middleLogo1.find('ul.nav__hor > li').length;
				hiddenLogo1		= hiddenLogo1.html();
				middleLogo1.find('.fn_logo').parent().remove();
				middleLogo1.find('ul.nav__hor > li:nth-child('+parseInt(length1/2)+')').after('<li class="middle_logo"><div class="fn_logo">'+hiddenLogo1+'</div></li>');
			}
			
			
			// middle logo for three lines navigation
			var middleLogo2		= $('.arlo_fn_three_lines[data-middle-logo="1"]');
			var hiddenLogo2		= $('.arlo_fn_three_lines .fn_logo');
			if(middleLogo2.length && hiddenLogo2.length){
				var length2		= middleLogo2.find('ul.nav__hor > li').length;
				hiddenLogo2		= hiddenLogo2.html();
				middleLogo2.find('.fn_logo').parent().remove();
				middleLogo2.find('ul.nav__hor > li:nth-child('+parseInt(length2/2)+')').after('<li class="middle_logo"><div class="fn_logo">'+hiddenLogo2+'</div></li>');
			}
			
			
			// middle logo for two lines navigation
			var middleLogo3		= $('.arlo_fn_two_lines[data-middle-logo="1"]');
			var hiddenLogo3		= $('.arlo_fn_two_lines .fn_logo');
			if(middleLogo3.length && hiddenLogo3.length){
				var length3		= middleLogo3.find('ul.nav__hor > li').length;
				hiddenLogo3		= hiddenLogo3.html();
				middleLogo3.find('.fn_logo').parent().remove();
				middleLogo3.find('ul.nav__hor > li:nth-child('+parseInt(length3/2)+')').after('<li class="middle_logo"><div class="fn_logo">'+hiddenLogo3+'</div></li>');
			}
		},
		
		calcLeftRight__LinesNav: function(){
			var self				= this;

			var oneLine				= $('.arlo_fn_one_line .one_line_in');
			var twoLinesTop			= $('.arlo_fn_two_lines .second_top_in');
			var twoLinesBottom		= $('.arlo_fn_two_lines .second_bottom_in');
			var threeLinesTop		= $('.arlo_fn_three_lines .third_top_in');
			var threeLinesMiddle	= $('.arlo_fn_three_lines .third_middle_in');
			var threeLinesBottom	= $('.arlo_fn_three_lines .third_bottom_in');
			self.calcLeftRightForThreeLines(oneLine);
			self.calcLeftRightForThreeLines(twoLinesTop);
			self.calcLeftRightForThreeLines(twoLinesBottom);
			self.calcLeftRightForThreeLines(threeLinesTop);
			self.calcLeftRightForThreeLines(threeLinesMiddle);
			self.calcLeftRightForThreeLines(threeLinesBottom);	
		},
		
		calcLeftRightForOneTwoLines: function(threeCols,nav){
			var h1				= 0;
			var h2				= 0;
			var i				= 0;
			if(threeCols.length === 3){
				var a			= [];
				threeCols.each(function(index){
					var e		= $(this);
					if(e.width() === 220){
						i++;
						a.push(index+1);
						if(i === 1){
							e.children('div').each(function(){
								h1 	+= $(this).outerWidth(true,true);	
							});
						}else{
							e.children('div').each(function(){
								h2 	+= $(this).outerWidth(true,true);	
							});
						}
					}
				});
				if(i === 2){
					if(h1>h2){
						if(nav === 'one'){
							$('.arlo_fn_one_line .one_line_in > div:nth-child('+a[0]+')').css({minWidth:h1+'px'});
							$('.arlo_fn_one_line .one_line_in > div:nth-child('+a[1]+')').css({minWidth:h1+'px'});
						}else if(nav === 'two'){
							$('.arlo_fn_two_lines .second_bottom_in > div:nth-child('+a[0]+')').css({minWidth:h1+'px'});
							$('.arlo_fn_two_lines .second_bottom_in > div:nth-child('+a[1]+')').css({minWidth:h1+'px'});
						}
					}else{
						if(nav === 'one'){
							$('.arlo_fn_one_line .one_line_in > div:nth-child('+a[0]+')').css({minWidth:h2+'px'});
							$('.arlo_fn_one_line .one_line_in > div:nth-child('+a[1]+')').css({minWidth:h2+'px'});
						}else if(nav === 'two'){
							$('.arlo_fn_two_lines .second_bottom_in > div:nth-child('+a[0]+')').css({minWidth:h2+'px'});
							$('.arlo_fn_two_lines .second_bottom_in > div:nth-child('+a[1]+')').css({minWidth:h2+'px'});
						}
					}
				}
				
			}
		},
		
		calcLeftRightForThreeLines: function(element){
			if(element.length && element.find('.tt_center').width() > 0){
				var w1			= element.children('.tt_left').width();
				var w2			= element.children('.tt_right').width();
				if(w1>w2){
					element.children('.tt_right').css({minWidth:w1+'px'});
				}else{
					element.children('.tt_left').css({minWidth:w2+'px'});
				}
				element.addClass('fn_opacity');
			}
		},
		
		searchbox__LinesNav: function(){
			var searchbox 	= $('.arlo_fn_searchpopup');
			var opener 		= $('.arlo_fn_search_nav a');
			if(opener.length){
				opener.on('click',function(){

					// close at first language box
					if($('.arlo_fn_moving_lang.opened').length){
						$('.arlo_fn_moving_lang').removeClass('opened');
					}
					if($('.arlo_fn_custom_lang_switcher.opened').length){
						$('.arlo_fn_custom_lang_switcher').removeClass('opened');
					}



					if($('body').hasClass('open_search_popup')){
						searchbox.removeClass('focused');
						$('body').removeClass('open_search_popup');
					}else{
						if($('.arlo_fn_one_line').length){
							searchbox.css({marginTop:$('.arlo_fn_one_line').height()+'px'});
						}
						if($('.arlo_fn_two_lines').length){
							var header__TwoLines			= $('.arlo_fn_two_lines');
							var height__TwoLines			= 0;
							var h1__TwoLines				= header__TwoLines.find('.second_top').height();
							var h2__TwoLines				= header__TwoLines.find('.second_bottom').height();
							if($('.second_top .arlo_fn_search_nav').length){
								height__TwoLines			= h1__TwoLines;
							}else if($('.second_top .arlo_fn_search_nav').length){
								height__TwoLines			= h1__TwoLines + h2__TwoLines;
							}
							searchbox.css({marginTop:height__TwoLines+'px'});
						}else if($('.arlo_fn_three_lines').length){
							var header__ThreeLines			= $('.arlo_fn_three_lines');
							var height__ThreeLines			= 0;
							var h1__ThreeLines				= header__ThreeLines.find('.third_top').height();
							var h2__ThreeLines				= header__ThreeLines.find('.third_middle').height();
							var h3__ThreeLines				= header__ThreeLines.find('.third_bottom').height();
							if($('.third_top .arlo_fn_search_nav').length){
								height__ThreeLines			= h1__ThreeLines;
							}else if($('.third_middle .arlo_fn_search_nav').length){
								height__ThreeLines			= h1__ThreeLines+h2__ThreeLines;
							}else if($('.third_bottom .arlo_fn_search_nav').length){
								height__ThreeLines			= h1__ThreeLines+h2__ThreeLines+h3__ThreeLines;
							}
							searchbox.css({marginTop:height__ThreeLines+'px'});
						}

						$('body').addClass('open_search_popup');
						setTimeout(function(){
							$('.arlo_fn_searchpopup input[type=text]').focus();
							$('.arlo_fn_searchpopup input[type=text]').trigger('click');
						},500);
					}
					return false;
				});
			}
			if(searchbox.length){
				var closer  	= searchbox.find('.search_closer');
				var inputText  	= searchbox.find('input[type=text]');
				var inputSubmit	= searchbox.find('input[type=submit]');
				searchbox.find('.search_inner').on('click',function(){
					searchbox.removeClass('focused');
				});
				inputText.on('click',function(event){
					searchbox.addClass('focused');
					event.stopPropagation();
				});
				inputSubmit.on('click',function(event){
					event.stopPropagation();
				});
				closer.on('click',function(event){
					event.stopPropagation();
					searchbox.removeClass('focused');
					$('body').removeClass('open_search_popup');
					closer.addClass('closed');
					setTimeout(function(){
						closer.removeClass('closed');
					},500);
				});
			}	
		},
		
		anchor: function(){
			$('a[href*="#"]').not('[href="tab-title-description"]').not('[href="#reviews"]').not('[href="tab-reviews"]').not('[href="#"]').not('[href="#0"]').not('[href="#!"]').click(function(e){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}});
		},
		
		checkSidebarForEmptiest: function(){
			var sidebar 		= $('.arlo_fn_sidebar_in .forheight');
			if(sidebar.length){
				if(sidebar.height() === 0){
					$('.arlo_fn_sidebarpage .s_inner').addClass('no_height');
					$('.arlo_fn_sidebarpage .inner').addClass('no_height');
				}
			}
		},
		
		languageboxOpener__LinesNav: function(){
			var self			= this;
			var lang 			= $('.arlo_fn_custom_lang_switcher');
			if(lang.length){
				var click 		= lang.children('a,span.click');
				var box 		= lang.find('ul');
				var location	= window.location.href;
				var myLocation	= self.myLocation;
				var wrapper		= $('.arlo_fn_wrapper_all');
				var newAttr 	= '';
				var customAttr 	= '';
				if(lang.hasClass('frenify_url')){
					newAttr	= 'frenify_url';
				}

				if($('.arlo_fn_custom_lang_switcher').hasClass('custom_language')){
					customAttr = 'custom_language';
				}
				wrapper.append('<div class="arlo_fn_moving_lang ' + newAttr + ' ' + customAttr + '"><ul>'+box.html() + '</ul></div>');
				var movingLang 	= $('.arlo_fn_moving_lang');
				var box2		= movingLang.find('ul');

				if(lang.length){
					click.on('click',function(){
						if(lang.hasClass('opened')){
							movingLang.removeClass('opened');
							lang.removeClass('opened');
						}else{
							lang.addClass('opened');
							movingLang.addClass('opened');
						}
						return false;
					});
					if(location.match(myLocation)){
						box2.find('li').on('click',function(){
							var element			= $(this);
							var spanHTML 		= element.find('span').html();
							var oldChildHTML 	= box2.find('li.active').html();
							if(element.hasClass('active')){
								// do nothing
							}else{
								box2.find('li.active').removeClass('active').html('<a href="#">' + oldChildHTML + '</a>');
								element.addClass('active').html('<span>' + spanHTML + '</span>');
								lang.removeClass('opened');
								click.html(spanHTML);
							}

							return false;
						});
					}
					$(window).on('click',function() {
						lang.removeClass('opened');
						movingLang.removeClass('opened');
					});
					box2.on('click',function(event){
						event.stopPropagation();
					});
					lang.on('click',function(event){
						event.stopPropagation();
					});
				}
			}
		},
		
		calcMovingLanguagebox__LinesNav: function(){
			var movingLang 	= $('.arlo_fn_moving_lang');
			if(movingLang.length){
				var lang 		= $('.arlo_fn_custom_lang_switcher');
				var langTO		= lang.offset().top;
				var langLO		= lang.offset().left;
				var extraH = 0;
				if($('body').hasClass('admin-bar')){
					extraH	= 32;
				}
				var langWidth	= movingLang.width() / 4;
				movingLang.css({position:'absolute',left:parseInt(langLO - langWidth) + 'px',top: parseInt(langTO + extraH) + 'px'});
			}
		},
		
		imgToSVG: function(){
			$('img.arlo_fn_svg,img.arlo_w_fn_svg').each(function(){
				var img 		= $(this);
				var imgClass	= img.attr('class');
				var imgURL		= img.attr('src');

				$.get(imgURL, function(data) {
					var svg 	= $(data).find('svg');
					if(typeof imgClass !== 'undefined') {
						svg 	= svg.attr('class', imgClass+' replaced-svg');
					}
					img.replaceWith(svg);

				}, 'xml');

			});	
		},
		
		dataFnBgImg: function(){
			var bgImage 	= $('*[data-fn-bg-img]');
			bgImage.each(function(){
				var element = $(this);
				var attrBg	= element.attr('data-fn-bg-img');
				var bgImg	= element.data('fn-bg-img');
				if(typeof(attrBg) !== 'undefined'){
					element.css({backgroundImage:'url('+bgImg+')'});
				}
			});
		},
		
		hamburgerOpener__Mobile: function(){
			var hamburger		= $('.arlo_fn_mobilemenu_wrap .hamburger');
			hamburger.on('click',function(){
				var element 	= $(this);
				var menupart	= $('.arlo_fn_mobilemenu_wrap .mobilemenu');
				if(element.hasClass('is-active')){
					element.removeClass('is-active');
					menupart.removeClass('opened');
					menupart.slideUp(500);
				}else{
					element.addClass('is-active');
					menupart.addClass('opened');
					menupart.slideDown(500);
				}return false;
			});
		},
		
		submenu__Mobile: function(){
			var nav 						= $('ul.vert_menu_list, .widget_nav_menu ul.menu');
			var mobileAutoCollapse			= $('.arlo_fn_wrapper_all').data('mobile-autocollapse');
			
			nav.find('a').on('click', function(){
				var element 				= $(this);
				var parent					= element.parent();
				var submenu					= parent.children('ul.sub-menu');
				if(submenu.length){
					if(parent.hasClass('active')){
						parent.removeClass('active');
						parent.find('.active').removeClass('active');
						parent.find('ul.sub-menu').slideUp();
					}else{
						parent.addClass('active');
						parent.siblings().removeClass('active');
						parent.siblings().find('ul.sub-menu').slideUp();
						submenu.slideDown();
					}
					return false;
				}
				if(mobileAutoCollapse === 'enable'){
					if(nav.parent().parent().hasClass('opened')){
						nav.parent().parent().removeClass('opened').slideUp();
						$('.arlo_fn_mobilemenu_wrap .hamburger').removeClass('is-active');
					}
				}
			});
		},
		
		toTopJumper: function(){
			var totop		= $('a.arlo_fn_totop');
			if(totop.length){
				totop.on('click', function(e) {
					e.preventDefault();		
					$("html, body").animate(
						{ scrollTop: 0 }, 'slow');
					return false;
				});
			}
		},
		
		blogPostSlider: function(){
			var slider = $('.arlo_fn_blog_single .fn-format-gallery .owl-carousel');
			if($().owlCarousel){
				slider.owlCarousel({
					loop:false,
					margin:10,
					nav:true,
					items: 1,
					dots: false
				});
			}
		},
		
		lightBox: function(){
			if($().lightGallery){
				var gallery = $('.frenify_fn_lightbox');

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
		
		estimateWidgetHeight: function(){
			var est 	= $('.arlo_fn_widget_estimate');
			est.each(function(){
				var el 	= $(this);
				var h1 	= el.find('.helper1');
				var h2 	= el.find('.helper2');
				var h3 	= el.find('.helper3');
				var h4 	= el.find('.helper4');
				var h5 	= el.find('.helper5');
				var h6 	= el.find('.helper6');
				var eW 	= el.outerWidth();
				var w1 	= Math.floor((eW * 80) / 300);
				var w2 	= eW-w1;
				var e1 	= Math.floor((w1 * 55) / 80);
				h1.css({borderLeftWidth:	w1+'px', borderTopWidth: e1+'px'});
				h2.css({borderRightWidth:	w2+'px', borderTopWidth: e1+'px'});
				h3.css({borderLeftWidth:	w1+'px', borderTopWidth: w1+'px'});
				h4.css({borderRightWidth:	w2+'px', borderTopWidth: w1+'px'});
				h5.css({borderLeftWidth:	w1+'px', borderTopWidth: w1+'px'});
				h6.css({borderRightWidth:	w2+'px', borderTopWidth: w1+'px'});
			});
		},
		
		justifiedImage: function(){
			var justified 		= $(".arlo_fn_justified_images");
			justified.each(function(){
				var element 	= $(this);
				var justHeight	= element.attr('data-just-h');
				var justGutter	= element.attr('data-just-g');
				
				if(typeof(justHeight) !== 'undefined' && typeof(justGutter) !== 'undefined'){
					if(justHeight !== ''){justHeight = justHeight;}
					if(justGutter !== ''){justGutter = justGutter;}
				}else{justHeight = 300;justGutter = 10;}
				
				if($().justifiedGallery){
					element.justifiedGallery({
						rowHeight : justHeight,
						lastRow : 'nojustify',
						margins : justGutter,
						refreshTime: 500,
						refreshSensitivity: 0,
						maxRowHeight: null,
						border: 0,
						captions: false,
						randomize: false
					});
				}
			});
			var just 	= $('.arlo_fn_portfolio_justified');
			var justg	= just.attr('data-gutter');
			if(typeof(justg) !== 'undefined'){
				just.find('.j_list').css({paddingLeft:justg+'px',paddingRight:justg+'px'});
				just.css({marginTop: justg + 'px'});
			}
		},
		
		stickySidebar: function(){
			if($().theiaStickySidebar){
				$('.frenify_fn_sticky_sidebar').theiaStickySidebar({
					containerSelector: '', // The sidebar's container element. If not specified, it defaults to the sidebar's parent.
					additionalMarginTop: 50,
					additionalMarginBottom: 0,
					updateSidebarHeight: true, // Updates the sidebar's height. Use this if the background isn't showing properly, for example.
					minWidth: 1200, // The sidebar returns to normal if its width is below this value. 
				});
			}
		},
		
		allPagesMinHeight: function(){
			var wrapperForH	 	= $('.arlo_fn_wfh'),
				navType			= $('.arlo_fn_wrapper_all').data('nav-type'),
				footer		 	= $('.arlo_fn_footer'),
				mobMenu		 	= $('.arlo_fn_mobilemenu_wrap'),
				footerH			= 0,
				navHeight		= 0,
				adminBarH		= 0,
				mobMenuH		= 0,
				H				= $(window).height(),
				W				= $(window).width(),
				body			= $('body');

			if(body.hasClass('admin-bar')){
				if(W<782){
					adminBarH	= 46;
				}else{
					adminBarH	= 32;
				}
			}

			if(footer.length){
				footerH			= $('.arlo_fn_footer').outerHeight();
			}
			if(mobMenu.length){
				mobMenuH		= $('.arlo_fn_mobilemenu_wrap').outerHeight();
			}
			if(W<=1040){
				mobMenuH		= mobMenuH;
			}else{
				mobMenuH		= 0;
			}
			if(navType!=='sidebar'){
				if($('.arlo_fn_one_line').length){
					if($('.arlo_fn_one_line').data('position')==='relative'){
						navHeight = $('.arlo_fn_one_line').outerHeight();
					}
				}else if($('.arlo_fn_two_lines').length){
					if($('.arlo_fn_two_lines').data('position')==='relative'){
						navHeight = $('.arlo_fn_two_lines').outerHeight();
					}
				}else if($('.arlo_fn_three_lines').length){
					if($('.arlo_fn_three_lines').data('position')==='relative'){
						navHeight = $('.arlo_fn_three_lines').outerHeight();
					}
				}
			}
			// FOR ALL PAGES
			wrapperForH.css({minHeight:(H-footerH-adminBarH-mobMenuH-navHeight) + 'px'});
		},
		
		isotopeMasonry: function(){
			var masonry = $('.arlo_fn_masonry');
			if($().isotope){
				masonry.each(function(){
					$(this).isotope({
						itemSelector: '.arlo_fn_masonry_in',
						masonry: {}
					});
				});
			}
		},
		
		isotopeMasonry__Core: function(){
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
		
		select2: function(){
			$('.orderby').each(function(){$(this).select2();});
			$('select[name="archive-dropdown"]').each(function(){$(this).select2();});
		},
		
		
		taglineFocus: function(){
			var tagline = $('.arlo_fn_tagline');
			if(tagline.length){
				var inputText  	= tagline.find('input[type=text]');
				var inputSubmit	= tagline.find('input[type=submit]');
				$('body').on('click',function(){
					tagline.removeClass('focused');
				});
				inputText.on('click',function(event){
					tagline.addClass('focused');
					event.stopPropagation();
				});
				inputSubmit.on('click',function(event){
					event.stopPropagation();
				});
			}
		},
		
		submenu__SidebarNav: function(){
			var self				= this;
			var fixedsub 			= $('#arlo_fn_fixedsub');
			var li					= $('.arlo_fn_header .menu_nav ul.vert_nav > li');
			var leftpartW			= $('.arlo_fn_header').width();
			var rightpart			= $('.arlo_fn_wfh, .arlo_fn_header .menu_logo');
			var adminBar 			= 0;
			if($('body').hasClass('admin-bar')){
				adminBar  			= 32;
			}
			fixedsub.css({left:leftpartW});


			li.on('mouseenter', function(){
				var parentLi 		= $(this);
				var subMenu			= parentLi.children('ul.sub-menu');
				var subMenuHtml 	= subMenu.html();
				//parentLi;
				if(subMenu.length){
					li.removeClass('hovered');
					parentLi.addClass('hovered').parent().addClass('hovered');
					fixedsub.removeClass('opened').children('ul').html('').html(subMenuHtml);
					fixedsub.addClass('opened');
				}else{
					fixedsub.removeClass('opened');
					li.removeClass('hovered').parent().removeClass('hovered');
				}
				var topOffSet 		= parentLi.offset().top;
				var menuBar			= $('.arlo_fn_header');
				var menuBarOffSet	= menuBar.offset().top;
				var asd				= topOffSet-menuBarOffSet+adminBar;
				leftpartW = $('.arlo_fn_header').width();


				fixedsub.css({top:asd,left:leftpartW});
				
				self.removeClass__SidebarNav(rightpart,fixedsub,li);
			});
			self.removeClass__SidebarNav(rightpart,fixedsub,li);
		},
		
		removeClass__SidebarNav: function(rightpart,fixedsub,li){
			rightpart.on('mouseenter', function(){
				fixedsub.removeClass('opened');
				li.removeClass('hovered').parent().removeClass('hovered');
			});
		},
		
		submenu__TriggerNav: function(){
			var fixedsub 			= $('#arlo_fn_moving_trigger');
			var li					= $('.arlo_fn_triggermenu ul.nav__ver > li');
			var menu				= $('.arlo_fn_triggermenu .menu_in');
			var leftpartW			= menu.width();
			if(fixedsub.length && menu.length){
				fixedsub.css({left:leftpartW+menu.offset().left});


				li.on('mouseenter', function(){
					var parentLi 		= $(this);
					var subMenu			= parentLi.find('.sub-menu-wrap').children('.arlo_fn_submenu');
					var subMenuHtml 	= subMenu.html();
					//parentLi;
					if(subMenu.length){
						li.removeClass('hovered');
						parentLi.addClass('hovered').parent().addClass('hovered');
						fixedsub.removeClass('opened').children('ul').html('').html(subMenuHtml);
						fixedsub.addClass('opened');
						fixedsub.children('ul').children('li').each(function(i){
							var el		= $(this);
							setTimeout(function(){
								el.css({opacity:1,transform:'translateY(0)'});
							},i*150);
						});
					}else{
						fixedsub.removeClass('opened');
						li.removeClass('hovered').parent().removeClass('hovered');
					}
					var topOffSet 		= parentLi.offset().top;
					var menuBar			= $('.arlo_fn_triggermenu');
					var menuBarOffSet	= menuBar.offset().top;
					var asd				= topOffSet-menuBarOffSet;
					menu				= $('.arlo_fn_triggermenu .menu_in');
					leftpartW 			= menu.width();


					fixedsub.css({top:asd,left:leftpartW+menu.offset().left});

				}).on('mouseleave',function(){
					setTimeout(function(){
						if(!fixedsub.hasClass('hovered')){
							fixedsub.removeClass('opened');
							li.removeClass('hovered').parent().removeClass('hovered');
						}
					},10);
				});

				fixedsub.on('mouseenter',function(){
					fixedsub.addClass('hovered');
				}).on('mouseleave',function(){
					fixedsub.removeClass('hovered');
					fixedsub.removeClass('opened');
					li.removeClass('hovered').parent().removeClass('hovered');
				});
			}
				
		},
		
		submenuRTL__SidebarNav: function(){
			var fixedsub 	= $('#arlo_fn_fixedsub');
			var leftpartW	= $('.arlo_fn_header').width();

			if($('body').hasClass('rtl')){
				fixedsub.css({right:leftpartW});
			}else{
				fixedsub.css({left:leftpartW});
			}
		},
		
		menuNiceScroll__TriggerNav: function(){
			var self	= this;
			var nav 	= $('.arlo_fn_triggermenu .menu_in');
			if(nav.length){
				self.menuHeight__TriggerNav();
				if($().niceScroll){
					nav.niceScroll({
						touchbehavior:false,
						cursorwidth:0,
						autohidemode:true,
						cursorborder:"0px solid #333"
					});
				}
			}
		},
		
		menuHeight__TriggerNav: function(){
			var wh				= $(window).height() - 190;
			var trigger			= $('.arlo_fn_triggermenu');
			var colAlignment	= trigger.data('col-align');
			var menuIn			= trigger.find('.menu_in');
			var menu			= menuIn.children('div');
			var menuH			= menu.height();
			if(colAlignment === 'center' && wh > menuH){
				menu.css({marginTop: parseInt((wh-menuH)/2)});
			}else if(colAlignment === 'bottom' && wh > menuH){
				menu.css({marginTop: parseInt((wh-menuH))});
			}else{
				menu.css({marginTop: 0});
			}
			menuIn.css({height:wh});
		},
		
		menuNiceScroll__SidebarNav: function(){
			var self		= this;
			var nav 		= $('.arlo_fn_header .menu_nav');
			if(nav.length){
				self.menuHeight__SidebarNav();
				if($().niceScroll){
					nav.niceScroll({
						touchbehavior:false,
						cursorwidth:0,
						autohidemode:true,
						cursorborder:"0px solid #333"
					});
				}
			}
		},
		
		menuHeight__SidebarNav: function(){
			var menuBarH	= $('.arlo_fn_header').outerHeight();
			var menuLogoH	= $('.arlo_fn_header .menu_logo').outerHeight();
			var menuNav		= $('.arlo_fn_header .menu_nav');
			var tagline		= $('.arlo_fn_tagline');
			var taglineH	= tagline.outerHeight();
			var a = 0;
			if(tagline.length){
				a = taglineH;
			}
			menuNav.css({height:menuBarH-menuLogoH-a});
		},
		
		
		sidebarCloser__SidebarNav: function(){
			var self			= this;
			var closer			= $('.arlo_fn_header .header_closer');
			var wrapper			= $('.arlo_fn_wrapper_all');
			var opened;
			closer.on('click',function(){
				
				if(wrapper.hasClass('menu_opened')){
					wrapper.removeClass('menu_opened');
					opened = 'off';
				}else{
					wrapper.addClass('menu_opened');
					opened = 'on';
				}
				
//				var requestData = {
//					action: 'arlo_fn_sidebar_opened_ajax',
//					opened: opened,
//				};
//
//
//				$.ajax({
//					type: 'POST',
//					url: fn_ajax_object.fn_ajax_url,
//					cache: false,
//					data: requestData,
//				});
				
				if($('.jarallax').length){
					$('.jarallax').jarallax('destroy');
					setTimeout(function(){
						self.jarallax();
						self.isotopeMasonry();
					},300);
				}
				
				setTimeout(function(){
					self.isotopeMasonry();
				},300);
				
				return false;
			});
		},
		
		jarallax: function(){
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
		
		triggerHookAddCount: function(){
			if($('.arlo_fn_triggermenu ul.nav__ver').length){
				$('.arlo_fn_triggermenu ul.nav__ver > li').each(function(i){
					var myKey 		= '0'+(i+1);
					if(i>=9){myKey 	= (i+1);}
					myKey			= '<span class="fn_menu_counter">'+myKey+'</span>';
					
					var element		= $(this);
					var desc		= element.find('.fn_menu_description');
					var descHTML	= desc.html();
					desc.html('<span class="fn_desc_wrap"><span class="fn_v_desc">'+descHTML + '</span><span class="fn_desc"><span>'+descHTML+'</span></span></span>');
					var btn			= element.children('a');
					var text 		= btn.text();
					var t			= '';
					t				+=	'<span class="fn_btn">';
					t				+=	'<span class="fn_a1">'+text+'</span>';
					t				+=	'<span class="fn_a2"><span>'+text+'</span></span>';
					t				+=	'<span class="fn_a3">'+text+'</span>';
					t				+=	'</span>';
					btn.html('<span class="fn_btnn">'+t+myKey+'</span>');
				});
			}	
		},
		
		stickyNav_LinesNav: function(){
			var self	= this;
			var nav 	= $('.arlo_fn_header_sticky');
			if(nav.length){
				var height 	= parseInt($('.arlo_fn_header_sticky').attr('data-h'));
				nav.find('.arlo_fn_megasub').addClass('arlo_fn_smallsub');
				self.stickNavCalc__LinesNav(nav,height);
				$(window).on('scroll', function(){
					self.stickNavCalc__LinesNav(nav,height);
				});
			}
		},
		
		stickNavCalc__LinesNav: function(nav,height){
			var checkHeight 	= '',
				lastScroll 		= '',
				direction 		= '',
				navType			= $('.arlo_fn_wrapper_all').attr('data-nav-type'),
				currentScroll 	= $(window).scrollTop();
			if(navType === 'one_line'){
				checkHeight		= $('.arlo_fn_one_line').height();
			}else if(navType === 'two_lines'){
				checkHeight		= $('.arlo_fn_two_lines').height();
			}else if(navType === 'three_lines'){
				checkHeight		= $('.arlo_fn_three_lines').height();
			}
			if(currentScroll > lastScroll){
				direction 		= 'down';	
				lastScroll 		= currentScroll;
			}else if(currentScroll < lastScroll){
				direction 		= 'up';	
				lastScroll 		= currentScroll;	
			}

//			if(currentScroll > 300 && direction === 'up') {
			if(currentScroll > height) {
				if(!nav.hasClass('opened')){
					nav.addClass('opened');
				}
			}else{nav.removeClass('opened');}
		},
		
		fixedTotopScroll: function(){
			var totop			= $('a.arlo_fn_fixed_totop');
			var height 			= parseInt(totop.attr('data-h'));
			if(totop.length){
				if($(window).scrollTop() > height){
					totop.addClass('scrolled');
				}else{
					totop.removeClass('scrolled');
				}
			}
		}
		
		
		
    };
	
	
	
	// ready functions
	$(document).ready(function(){
		ArloInit.init();
	});
	
	// resize functions
	$(window).on('resize',function(e){
		e.preventDefault();
		ArloInit.portfolioPageBlock__imgHeight();
		ArloInit.calcMovingLanguagebox__LinesNav();
		ArloInit.estimateWidgetHeight();
		ArloInit.allPagesMinHeight();
		ArloInit.isotopeMasonry();
		ArloInit.submenuRTL__SidebarNav();
		ArloInit.menuNiceScroll__SidebarNav();
		ArloInit.menuNiceScroll__TriggerNav();
	});
	
	// scroll functions
	$(window).on('scroll', function(e) {
		e.preventDefault();
		ArloInit.fixedTotopScroll();
    });
	
	// load functions
	$(window).on('load', function(e) {
		e.preventDefault();
		ArloInit.isotopeMasonry();
		setTimeout(function(){
			ArloInit.isotopeMasonry();
		},100);
		
		if($('.arlo_fn_preloader').length){
			setTimeout(function(){
				$('.arlo_fn_wrapper_all').addClass('preloader_loaded');
			}, 1000);
		}
	});
	
	
	// deprecated since v2.8
//	$(window).load('body', function(){
//		if($('.arlo_fn_preloader').length){
//			setTimeout(function(){
//				$('.arlo_fn_wrapper_all').addClass('preloader_loaded');
//			}, 1000);
//		}
//	});
//	
	
})(jQuery);