
(function ($){

	"use strict";
	
    var ArloWoo 		= {
		
		cartWait: false,
		
		init: function(){
			this.magnificPopup();
			this.openCartBox__Woo();
			this.removeItemFromCart__Woo();
			this.addToCart();
			this.someCustomFunctions();
			this.removeXFromCart();
			this.checkCartBoxOffset();
			$('body').bind('added_to_cart removed_from_cart updated_cart_totals updated_wc_div', this.updateCart);
		},
		checkCartBoxOffset: function(){
			var cartBox			= $('.arlo_fn_cartbox');
			var cartOpener		= $('.arlo_fn_buy_nav a.buy_icon');
			if(cartBox.length && cartOpener.length){
				var W			= $(window).width();
				var leftOffset 	= cartOpener.offset().left;
				var width		= cartBox.width();
				if(leftOffset+width/2+cartOpener.width()/2 > W){
					cartBox.addClass('be_careful');
				}else{
					cartBox.removeClass('be_careful');
				}
				
			}
		},
		removeXFromCart: function(){
			$('.woocommerce table.shop_table td.product-remove a.remove,.woocommerce.widget_shopping_cart .cart_list li a.remove').text('');
		},
		someCustomFunctions: function(){
			
			// smooth scroll to review section
			var shopReview	= $('a.woocommerce-review-link');
			if(shopReview.length){
				shopReview.on('click',function(e){
//					e.preventDefault();
//					var productID	= shopReview.attr('href');
//					var top 		= $(productID).offset().top;
//					$('body,html').animate({scrollTop: top}, 1100);
					return false;
				});
			}

			// for create own design for empty cart
			var cartEmpty 		= $('p.cart-empty');
			var returnToShop 	= $('p.return-to-shop');
			var returnHTML		= returnToShop.html();
			var cartEmptyHTML	= cartEmpty.html();
			if(cartEmpty.length){
				returnToShop.empty();
				cartEmpty.remove();
				$('.woocommerce').append('<div class="fn_cart-empty"><span>'+cartEmptyHTML+'</span><span>'+returnHTML+'</span>');
			}
			// for create own design for my-account
			var myAccount 		= $('.woocommerce-account .woocommerce-MyAccount-content');
			if(myAccount.length){
				myAccount.parent().wrapInner('<div class="arlo_fn_woo_myaccount"><div><div class="inner">');
			}
			// for create own design for my-account -> login
			var logIn			= $('.woocommerce form.login');
			var parentTitle		= logIn.parent().find('h2');
			if(logIn.length){
				parentTitle.hide();
				logIn.wrap('<div class="arlo_fn_woo_login"><div>').wrapInner('<div class="arlo_fn_woo_login_inner"><div>');
			}	
		},
		updateCart: function(){
			var self		= this;
			var cartBox		= $('.arlo_fn_cartbox');
			var counter		= $('.arlo_fn_buy_nav a.buy_icon span');
			var pageFrom	= '';
			if($('body').hasClass('woocommerce-cart')){
				pageFrom	= 'cart';
			}
			if($('body').hasClass('woocommerce-checkout')){
				pageFrom	= 'checkout';
			}
			var requestData = {
				action: 'arlo_fn_remove_item_from_cart',
				product_id: '',
				cart_item_key: '',
				pageFrom: pageFrom
			};

			$.ajax({
				type: 'POST',
				url: fn_ajax_object.fn_ajax_url,
				cache: true,
				data: requestData,
				success: function(data) {
					var fnQueriedObj 	= $.parseJSON(data); //get the data object
					cartBox.html(fnQueriedObj.arlo_fn_data);
					counter.html(fnQueriedObj.count);
					ArloWoo.cartWait 		= false;
					ArloWoo.removeItemFromCart__Woo();
				},
				error: function() {
					ArloWoo.cartWait 		= false;
					console.log('Error');
				}
			});
		},
		addToCart: function(){
			$('a.add_to_cart_button').on('click', function() {
				var link 	= this;

				$(link).closest('.product').find('a img').animate({opacity: 0.7});
				setTimeout(function(){

					$(link).closest('.product').addClass('added-to-cart-check');

					setTimeout(function(){
						$(link).closest('.product').find('a img').animate({opacity: 1});
					}, 1000);
				}, 1000);
				
			});	
		},
		magnificPopup: function(){
			if($().magnificPopup){
				// lightbox for gallery images
				$('.arlo_fn_woo .images').each(function() {
					$(this).magnificPopup({
						delegate: 'a.zoom, .woocommerce-product-gallery__image a',
						type: 'image',
						overflowY: 'auto',
						fixedContentPos: false,
						closeOnContentClick: false,
						closeBtnInside: false,
						mainClass: 'mfp-with-zoom mfp-img-mobile',
						image: {
							verticalFit: true,
							titleSrc: function(item) {
								return item.el.attr('title');
							}
						},
						gallery: {
							enabled: true
						}
					});	
				});
			}
		},
		
		checkIfCartHasBeenChangedSomewhere: function(){
			var self		= this;
			var pageFrom	= '';
			var cartBox		= $('.arlo_fn_cartbox');
			var counter		= $('.arlo_fn_buy_nav a.buy_icon span');
			if($('body').hasClass('woocommerce-cart')){
				pageFrom	= 'cart';
			}
			if($('body').hasClass('woocommerce-checkout')){
				pageFrom	= 'checkout';
			}
			var requestData = {
				action: 'arlo_fn_remove_item_from_cart',
				product_id: '',
				cart_item_key: '',
				pageFrom: pageFrom
			};

			$.ajax({
				type: 'POST',
				url: fn_ajax_object.fn_ajax_url,
				cache: true,
				data: requestData,
				success: function(data) {
					var fnQueriedObj 	= $.parseJSON(data); //get the data object
					$('.arlo_fn_hidden_info').remove();
					$('body').append('<div class="arlo_fn_hidden_info">'+fnQueriedObj.subtotal+'</div>');
					if((cartBox.find('.fn_right').html() != $('.arlo_fn_hidden_info').html() || counter.html() != fnQueriedObj.count) && cartBox.find('.fn_right').length && counter.html() > 0){
						cartBox.append(fnQueriedObj.update);
						cartBox.find('.fn_cartbox_updater').on('click',function(){
							cartBox.html(fnQueriedObj.arlo_fn_data);
							counter.html(fnQueriedObj.count);
							ArloWoo.removeItemFromCart__Woo();
							return false;
						});
					}
					ArloWoo.cartWait 		= false;
				},
				error: function() {
					ArloWoo.cartWait 		= false;
					console.log('Error');
				}
			});
		},
		
		openCartBox__Woo: function(){
			var self			= this;
			var button			= $('.arlo_fn_buy_nav a.buy_icon');
			var cartBox			= $('.arlo_fn_cartbox');
			button.on('click',function(e){
				e.preventDefault();
				e.stopPropagation();
				if(cartBox.hasClass('opened')){
					cartBox.removeClass('opened');
					if($('#fp-nav').length){$('#fp-nav').removeClass('be_careful');}
				}else{
					cartBox.addClass('opened');
					if($('#fp-nav').length){$('#fp-nav').addClass('be_careful');}
					ArloWoo.checkIfCartHasBeenChangedSomewhere();
				}
				
				return false;
			});
			$(window).on('click',function(){
				cartBox.removeClass('opened');
				$('#fp-nav').removeClass('be_careful');
			});
			cartBox.on('click',function(e){
				e.stopPropagation();
			});
		},
		removeItemFromCart__Woo: function(){
			var self		= this;
			$('.fn_cartbox_delete_item').off().on('click', function (e){
    			e.preventDefault();
				ArloWoo.cartWait = true;
				var button	= $(this);
				var item	= button.closest('.fn_cartbox_item');
				var itemID	= item.data('id');
				var itemKey	= item.data('key');
				var cartBox	= $('.arlo_fn_cartbox');
				var counter	= $('.arlo_fn_buy_nav a.buy_icon span');
//				cartBox.block({
//					message: null,
//					overlayCSS: {
//						cursor: 'none'
//					}
//				});
				
				
				var requestData = {
					action: 'arlo_fn_remove_item_from_cart',
					product_id: itemID,
					cart_item_key: itemKey
				};
				
				$.ajax({
					type: 'POST',
					url: fn_ajax_object.fn_ajax_url,
					cache: true,
					data: requestData,
					success: function(data) {
						var fnQueriedObj 	= $.parseJSON(data); //get the data object
						cartBox.html(fnQueriedObj.arlo_fn_data);
						counter.html(fnQueriedObj.count);
						ArloWoo.cartWait 		= false;
						ArloWoo.removeItemFromCart__Woo();
					},
					error: function() {
						ArloWoo.cartWait 		= false;
						console.log('Error');
					}
				});
				return false;
			});
		}
	};
	
	
	
	// ready functions
	$(document).ready(function(){
		ArloWoo.init();
	});
	
	// resize functions
	$(window).on('resize',function(e){
		e.preventDefault();
		ArloWoo.checkCartBoxOffset();
	});
	
	// scroll functions
	$(window).on('scroll', function(e) {
		e.preventDefault();
    });
	
	
})(jQuery);