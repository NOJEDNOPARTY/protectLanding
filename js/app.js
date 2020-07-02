var common = {
	init: function() {
		common.main();
		common.owl();
		common.select();
	},
	main: function(){

		function fixedHead() {
			$('.header-wrap').addClass('fixed');
			$('body').css({'margin-top':$('.header-wrap').outerHeight()})
		};

		fixedHead();

		$(window).resize(function() {
			fixedHead();
		});


		$('.accordion-title').click(function(event){
			event.preventDefault();
			if($(this).closest('.accordion-item').hasClass('open') == false) {
				$(this).closest('.accordion-item').addClass('open');
				$(this).closest('.accordion-item').find('.accordion-cnt').slideToggle('fast');
			}else {
				$(this).closest('.accordion-item').removeClass('open');
				$(this).closest('.accordion-item').find('.accordion-cnt').slideToggle('fast');
			}
		})

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('.header-wrap').toggleClass('open');
			$('header').slideToggle('fast');
		})

		var bLazy = new Blazy({});

		
		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 150}, 3000);
			$('.menu-trigger').removeClass('open');
			if($('.header-wrap').hasClass('open') == true) {
				$('header').slideUp('fast');
				$('.header-wrap').removeClass('open');
			}
		});

		$('.call-popup').click(function(event){
			event.preventDefault();
			var popup  = '#' + $(this).attr('data-popup');
			$('.popup-wrapper').removeClass('active');
			$('header').slideUp('fast');
			$('.header-wrap').removeClass('open');
			$('body').addClass('hidden');
			$(popup).addClass('active')
		});

		
		$('.popup-close').click(function(){
			$(this).closest('.popup-wrapper').removeClass('active')
			$('body').removeClass('hidden');
		})

		$('.phone-mask').mask("+380(99) 999-99-99");


		$("form").submit(function(event){
			event.preventDefault();
			formField = $(this).find(".field")
			
			formField.each(function(){
				var thisEl = $(this);
				if (! thisEl.val().length) {
					thisEl.addClass('error')
					setTimeout(function(){
						thisEl.removeClass('error')
					}, 3000)
					thisEl.addClass('form-error')
				}else { thisEl.removeClass('form-error')}
			});	
			if(formField.hasClass('form-error') == false){
				$('.popup-wrapper').removeClass('active');
				$('#thanksPopup').addClass('active')
			}
		});

	},
	owl: function(){
		$('.brands-slider').owlCarousel({
			loop:true,
			items: 5,
			margin:30,
			nav: true,
			dots: false,
			autoHeight: true,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1,
				},
				501:{
					items:2
				},
				993:{
					items:3
				},
				1301:{
					items:4
				},
				1301:{
					items:5
				},
			}
		});

		
		$('.recomendation-slider').owlCarousel({
			loop:true,
			items: 4,
			margin:90,
			nav: true,
			dots: false,
			autoHeight: true,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					margin:0,
					items:1
				},
				501:{
					margin:15,
					items:2
				},
				768:{
					margin:15,
					items:3
				},
				993:{
					items:4
				},
			}
		})
		
		$('.work-slider').owlCarousel({
			loop:true,
			items: 3,
			margin: 2,
			nav: true,
			dots: false,
			autoHeight: true,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					margin:0,
					items:1
				},
				501:{
					items:2
				},
				993:{
					items:3
				},
			}
		})
		
		$('.packages-slider').owlCarousel({
			loop:true,
			items: 2,
			margin: 20,
			nav: true,
			dots: false,
			responsive:{
				0:{
					margin:0,
					items:1
				},
				768:{
					items:2
				},
				1025:{
					items:3
				},
			}
		})
		$('.blog-slider').owlCarousel({
			loop:true,
			items: 1,
			margin:0,
			nav: true,
			dots: false,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			autoHeight: true
		})

		$('.reviews-slider').owlCarousel({
			loop:true,
			items: 1,
			margin:0,
			nav: true,
			dots: false,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			autoHeight: true
		})

		$('.batter-slider').owlCarousel({
			loop:true,
			items: 1,
			margin:0,
			nav: true,
			dots: false,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			autoHeight: true
		})
	},
	select: function(){
		var x, i, j, l, ll, selElmnt, a, b, c;
		/* Look for any elements with the class "custom-select": */
		x = document.getElementsByClassName("custom-select");
		l = x.length;
		for (i = 0; i < l; i++) {
		selElmnt = x[i].getElementsByTagName("select")[0];
		ll = selElmnt.length;
		/* For each element, create a new DIV that will act as the selected item: */
		a = document.createElement("DIV");
		a.setAttribute("class", "select-selected");
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		x[i].appendChild(a);
		/* For each element, create a new DIV that will contain the option list: */
		b = document.createElement("DIV");
		b.setAttribute("class", "select-items select-hide");
		for (j = 1; j < ll; j++) {
			/* For each option in the original select element,
			create a new DIV that will act as an option item: */
			c = document.createElement("DIV");
			c.innerHTML = selElmnt.options[j].innerHTML;
			c.addEventListener("click", function(e) {
				/* When an item is clicked, update the original select box,
				and the selected item: */
				var y, i, k, s, h, sl, yl;
				s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				sl = s.length;
				h = this.parentNode.previousSibling;
				for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
					y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
				}
				h.click();
			});
			b.appendChild(c);
		}
		x[i].appendChild(b);
		a.addEventListener("click", function(e) {
			/* When the select box is clicked, close any other select boxes,
			and open/close the current select box: */
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle("select-hide");
			this.classList.toggle("select-arrow-active");
		});
		}

		function closeAllSelect(elmnt) {
		/* A function that will close all select boxes in the document,
		except the current select box: */
		var x, y, i, xl, yl, arrNo = [];
		x = document.getElementsByClassName("select-items");
		y = document.getElementsByClassName("select-selected");
		xl = x.length;
		yl = y.length;
		for (i = 0; i < yl; i++) {
			if (elmnt == y[i]) {
			arrNo.push(i)
			} else {
			y[i].classList.remove("select-arrow-active");
			}
		}
		for (i = 0; i < xl; i++) {
			if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
			}
		}
		}

		/* If the user clicks anywhere outside the select box,
		then close all select boxes: */
		document.addEventListener("click", closeAllSelect);
	}
};

(function() {
	common.init();
}());
