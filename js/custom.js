$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
});



$(document).ready(function(){
    
    var ll = new LazyLoad({
            elements_selector: ".lazyload",
    });
    
    function fixedHeader() {
        if ($(window).scrollTop() > 100) {			
            $("#header").addClass('fixed');
            $('body').addClass('header-fixed');
        }else {
            $("#header").removeClass('fixed');    
            $('body').removeClass('header-fixed');
        }              
    }
        
    fixedHeader();        
    $(window).scroll(fixedHeader);	

    
    $('.nav-item_parent').mouseenter(function () {
        if($(window).innerWidth()>991){
            $(this).find('.subnav-wrapper').stop(true, false, true).slideDown(300);
            $(this).addClass('hover');
        }
       
    });

    $('.nav-item_parent').mouseleave(function () {
         if($(window).innerWidth()>991){
            $(this).find('.subnav-wrapper').stop(true, false, true).slideUp(300);
            $(this).removeClass('hover');
         }
    });
    
    $('.js-aside-toggle').on('click', function(event) {
        if(!$('body').hasClass('aside-open')){
            event.preventDefault();		
            $('body').addClass('aside-open');
            $('.aside').addClass('active');
        }else{
            $('body').removeClass('aside-open');
            $('.aside').removeClass('active');
        }
        return false;
	});
    
    $('.aside-title').on('click', function(event) {
        if($(window).innerWidth()<768){
            if($(this).next('.aside-nav').length){
                
                if($(this).parents('.aside-main-col').hasClass('active')){
                     $('.aside-main-col').removeClass('active').removeClass('hidden');
                }else{
                    $('.aside-main-col').removeClass('active').addClass('hidden');
                    $(this).parents('.aside-main-col').addClass('active').removeClass('hidden');
                }
                return false;
            }
        }
        
    })
    
    $(".input-phone").mask("+7 (999) 999-99-99").on('click', function () {
        /*if ($(this).val() === '+7 (___) ___-__-__') {
           $(this).setCursorPosition(3);
        }*/
    });
    
    $('.form-contact').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);
            },
            rules: {              
                name: { required: true},
                phone: { required: true}
            },
            messages: {                
                name: { required: "Введите Ваше имя" },
                phone: { required: "Введите Ваш номер телефона" }
            },
            submitHandler: function(form){
                
                
            }
         });
    });
    
    $('.form-application').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);
            },
            rules: {              
                name: { required: true},
                phone: { required: true},
                email: {required: true, email:true}
            },
            messages: {                
                name: { required: "Введите Ваше имя" },
                phone: { required: "Введите номер телефона" },
                email: { required: "Введите email" , email: "Не корректный ввод email" },
            },
            submitHandler: function(form){
                
                
            }
         });
    });
    
    $('.aside-content').mCustomScrollbar({});     
    
    $('.block-about-tabs-nav__item').on('click', function(event) {        
        $(this).parents('.block-about').find('.block-about-tabs-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.block-about').find('.block-about-tabs-content').removeClass('active');
        $(this).parents('.block-about').find('.block-about-tabs-content[data-tab="'+$(this).attr('data-tab')+'"]').addClass('active');        
    });
    
    $('.block-about-arrow').on('click', function(event) {        
        if($(this).hasClass('block-about-arrow_prev')){
            var  id = $(this).parents('.block-about').find('.block-about-tabs-nav__item.active').attr('data-tab');
            var new_id=id-1;
            if(new_id<1){
                new_id=$(this).parents('.block-about').find('.block-about-tabs-nav__item:last').attr('data-tab');
            }
            $('.block-about-tabs-nav__item[data-tab="'+new_id+'"]').click();            
        } 
        if($(this).hasClass('block-about-arrow_next')){
            var  id = parseInt($(this).parents('.block-about').find('.block-about-tabs-nav__item.active').attr('data-tab'));
            var new_id=id+1;
            
            var last_id=$(this).parents('.block-about').find('.block-about-tabs-nav__item:last').attr('data-tab');
            if(new_id>last_id){
                new_id=1;
            }
            $('.block-about-tabs-nav__item[data-tab="'+new_id+'"]').click();            
        } 
        return false;
    });
    
    $('.tabs-nav__item').on('click', function(event) {        
        $(this).parents('.tabs').find('.tabs-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.tabs').find('.tabs-content').removeClass('active');
        $('#'+$(this).attr('data-tab')).addClass('active');        
    });
    
    
    
    $('.js-slider-reviews .y-row').slick({
        infinite: true,
        arrows:true,
        dots:true,
        slidesToShow:2,
        slidesToScroll: 1,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.506 9.84.33-.328a.543.543 0 0 0 .16-.387.543.543 0 0 0-.16-.387L2.099 5.002 5.84 1.26a.545.545 0 0 0 0-.773L5.513.16a.549.549 0 0 0-.774 0L.269 4.614a.558.558 0 0 0-.175.388v.002c0 .147.073.284.175.387l4.458 4.45a.556.556 0 0 0 .779-.001Z" /></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m.494 9.84-.33-.328a.543.543 0 0 1-.16-.387c0-.147.057-.284.16-.387l3.737-3.736L.16 1.26a.545.545 0 0 1 0-.773L.487.16a.549.549 0 0 1 .774 0l4.47 4.454c.103.103.175.24.175.388v.002a.562.562 0 0 1-.175.387L1.273 9.84a.556.556 0 0 1-.779-.001Z"/></svg></button>',
        appendDots:$('.js-slider-reviews').find('.slider-reviews-dots'),
        appendArrows:$('.js-slider-reviews').find('.slider-reviews-arrows'),
         
        responsive: [  
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true,
                }
            }
           
        ]
    });
    
    $('.tabs-reviews-nav__item').on('click', function(event) {        
        $(this).parents('.tabs-reviews').find('.tabs-reviews-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.tabs-reviews').find('.tabs-reviews-content').removeClass('active');
        $('#'+$(this).attr('data-tab')).addClass('active'); 
        $('.js-slider-reviews .y-row').slick('setPosition');
        $('.js-slider-reviews-letters .y-row').slick('setPosition');
        $('.js-slider-reviews-video .y-row').slick('setPosition');
    });
    
    $('.js-slider-reviews-letters .y-row').slick({
        infinite: true,
        arrows:true,
        dots:true,
        slidesToShow:4,
        slidesToScroll: 1,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.506 9.84.33-.328a.543.543 0 0 0 .16-.387.543.543 0 0 0-.16-.387L2.099 5.002 5.84 1.26a.545.545 0 0 0 0-.773L5.513.16a.549.549 0 0 0-.774 0L.269 4.614a.558.558 0 0 0-.175.388v.002c0 .147.073.284.175.387l4.458 4.45a.556.556 0 0 0 .779-.001Z" /></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m.494 9.84-.33-.328a.543.543 0 0 1-.16-.387c0-.147.057-.284.16-.387l3.737-3.736L.16 1.26a.545.545 0 0 1 0-.773L.487.16a.549.549 0 0 1 .774 0l4.47 4.454c.103.103.175.24.175.388v.002a.562.562 0 0 1-.175.387L1.273 9.84a.556.556 0 0 1-.779-.001Z"/></svg></button>',
        appendDots:$('.js-slider-reviews-letters').find('.slider-reviews-letters-dots'),
        appendArrows:$('.js-slider-reviews-letters').find('.slider-reviews-letters-arrows'),
         
        responsive: [   
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true,
                }
            }
        ]
    });
    
    $('.js-slider-reviews-video .y-row').slick({
        infinite: true,
        arrows:true,
        dots:true,
        slidesToShow:3,
        slidesToScroll: 1,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.506 9.84.33-.328a.543.543 0 0 0 .16-.387.543.543 0 0 0-.16-.387L2.099 5.002 5.84 1.26a.545.545 0 0 0 0-.773L5.513.16a.549.549 0 0 0-.774 0L.269 4.614a.558.558 0 0 0-.175.388v.002c0 .147.073.284.175.387l4.458 4.45a.556.556 0 0 0 .779-.001Z" /></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m.494 9.84-.33-.328a.543.543 0 0 1-.16-.387c0-.147.057-.284.16-.387l3.737-3.736L.16 1.26a.545.545 0 0 1 0-.773L.487.16a.549.549 0 0 1 .774 0l4.47 4.454c.103.103.175.24.175.388v.002a.562.562 0 0 1-.175.387L1.273 9.84a.556.556 0 0 1-.779-.001Z"/></svg></button>',
        appendDots:$('.js-slider-reviews-video').find('.slider-reviews-video-dots'),
        appendArrows:$('.js-slider-reviews-video').find('.slider-reviews-video-arrows'),
         
        responsive: [   
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true,
                }
            }
           
        ]
    });
    
    $('.js-slider-partners').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:5,
        slidesToScroll: 1,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.506 9.84.33-.328a.543.543 0 0 0 .16-.387.543.543 0 0 0-.16-.387L2.099 5.002 5.84 1.26a.545.545 0 0 0 0-.773L5.513.16a.549.549 0 0 0-.774 0L.269 4.614a.558.558 0 0 0-.175.388v.002c0 .147.073.284.175.387l4.458 4.45a.556.556 0 0 0 .779-.001Z" /></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m.494 9.84-.33-.328a.543.543 0 0 1-.16-.387c0-.147.057-.284.16-.387l3.737-3.736L.16 1.26a.545.545 0 0 1 0-.773L.487.16a.549.549 0 0 1 .774 0l4.47 4.454c.103.103.175.24.175.388v.002a.562.562 0 0 1-.175.387L1.273 9.84a.556.556 0 0 1-.779-.001Z"/></svg></button>',
        appendArrows:$('.slider-partners-arrows'),
         
        responsive: [   
            {
                breakpoint: 1440,
                settings: {
                     slidesToShow:4,
                }
            },
             {
                breakpoint: 1200,
                settings: {
                     slidesToShow:3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true,
                }
            }
        ]
    });
    
    $('.js-slider-team .y-row').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:4,
        slidesToScroll: 1,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.506 9.84.33-.328a.543.543 0 0 0 .16-.387.543.543 0 0 0-.16-.387L2.099 5.002 5.84 1.26a.545.545 0 0 0 0-.773L5.513.16a.549.549 0 0 0-.774 0L.269 4.614a.558.558 0 0 0-.175.388v.002c0 .147.073.284.175.387l4.458 4.45a.556.556 0 0 0 .779-.001Z" /></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m.494 9.84-.33-.328a.543.543 0 0 1-.16-.387c0-.147.057-.284.16-.387l3.737-3.736L.16 1.26a.545.545 0 0 1 0-.773L.487.16a.549.549 0 0 1 .774 0l4.47 4.454c.103.103.175.24.175.388v.002a.562.562 0 0 1-.175.387L1.273 9.84a.556.556 0 0 1-.779-.001Z"/></svg></button>',
        appendArrows:$('.slider-team-arrows'),
         
        responsive: [  
            {
                breakpoint:992,
                settings: {
                    variableWidth:true,
                }
            }
        ]
    });
    
    $(window).on('load resize orientationchange', function() {
        if($(window).innerWidth()>991){
          $('.js-slider-team .y-row').slick('slickFilter', '.team-item_desktop');
        }else{
            $('.js-slider-team .y-row').slick('slickUnfilter');
        }
    });

    $('.js-slider-expert-video .y-row').slick({
        infinite: true,
        arrows:true,
        dots:true,
        slidesToShow:3,
        slidesToScroll: 1,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.506 9.84.33-.328a.543.543 0 0 0 .16-.387.543.543 0 0 0-.16-.387L2.099 5.002 5.84 1.26a.545.545 0 0 0 0-.773L5.513.16a.549.549 0 0 0-.774 0L.269 4.614a.558.558 0 0 0-.175.388v.002c0 .147.073.284.175.387l4.458 4.45a.556.556 0 0 0 .779-.001Z" /></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m.494 9.84-.33-.328a.543.543 0 0 1-.16-.387c0-.147.057-.284.16-.387l3.737-3.736L.16 1.26a.545.545 0 0 1 0-.773L.487.16a.549.549 0 0 1 .774 0l4.47 4.454c.103.103.175.24.175.388v.002a.562.562 0 0 1-.175.387L1.273 9.84a.556.556 0 0 1-.779-.001Z"/></svg></button>',
        appendArrows:$('.slider-expert-video-arrows'),
         
        responsive: [   
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:2,
                }
            },{
                breakpoint: 576,
                settings: {
                    slidesToShow:1,
                }
            },
           
        ]
    });
    
    $('.slick-cloned a').removeAttr('data-fancybox');
    
    $('.js-slider-blog .y-row').slick({
        infinite: true,
        arrows:false,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        responsive: [            
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2, 
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true,
                }
            }
        ]
    }); 
    
    $(window).on('resize orientationchange', function() {
      $('.js-slider-blog .y-row').slick('resize');
    });
     
    $('.js-slider-cases .y-row').slick({
        infinite: true,
        arrows:false,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        variableWidth:true,
        responsive: [            
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    
                }
            }
        ]
    }); 
    
    $(window).on('resize orientationchange', function() {
      $('.js-slider-cases .y-row').slick('resize');
    });
    
    $('.js-complex-advantages .y-row').slick({
        infinite: true,
        arrows:false,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        variableWidth:true,
        responsive: [            
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    
                }
            }
        ]
    }); 
    
    $(window).on('resize orientationchange', function() {
      $('.js-complex-advantages .y-row').slick('resize');
    });
    
    $('.js-block-principe .y-row').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        variableWidth:true,
        swipeToSlide:true,
        appendArrows:$('.js-block-principe').find('.slider-arrows'),
        prevArrow:'<button type="button" class="slick-prev"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.506 9.84.33-.328a.543.543 0 0 0 .16-.387.543.543 0 0 0-.16-.387L2.099 5.002 5.84 1.26a.545.545 0 0 0 0-.773L5.513.16a.549.549 0 0 0-.774 0L.269 4.614a.558.558 0 0 0-.175.388v.002c0 .147.073.284.175.387l4.458 4.45a.556.556 0 0 0 .779-.001Z" /></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m.494 9.84-.33-.328a.543.543 0 0 1-.16-.387c0-.147.057-.284.16-.387l3.737-3.736L.16 1.26a.545.545 0 0 1 0-.773L.487.16a.549.549 0 0 1 .774 0l4.47 4.454c.103.103.175.24.175.388v.002a.562.562 0 0 1-.175.387L1.273 9.84a.556.556 0 0 1-.779-.001Z"/></svg></button>',
        responsive: [            
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    
                }
            }
        ]
    }); 
    
    $(window).on('resize orientationchange', function() {
      $('.js-block-principe .y-row').slick('resize');
    });
    
    
    $('.js-websites .y-row').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        variableWidth:true,
        swipeToSlide:true,
        appendArrows:$('.websites').find('.slider-arrows'),
        prevArrow:'<button type="button" class="slick-prev"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.506 9.84.33-.328a.543.543 0 0 0 .16-.387.543.543 0 0 0-.16-.387L2.099 5.002 5.84 1.26a.545.545 0 0 0 0-.773L5.513.16a.549.549 0 0 0-.774 0L.269 4.614a.558.558 0 0 0-.175.388v.002c0 .147.073.284.175.387l4.458 4.45a.556.556 0 0 0 .779-.001Z" /></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m.494 9.84-.33-.328a.543.543 0 0 1-.16-.387c0-.147.057-.284.16-.387l3.737-3.736L.16 1.26a.545.545 0 0 1 0-.773L.487.16a.549.549 0 0 1 .774 0l4.47 4.454c.103.103.175.24.175.388v.002a.562.562 0 0 1-.175.387L1.273 9.84a.556.556 0 0 1-.779-.001Z"/></svg></button>',
        responsive: [            
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    
                }
            }
        ]
    }); 
    
    $(window).on('resize orientationchange', function() {
      $('.js-websites .y-row').slick('resize');
    });
    
    
    
    
    $('.strategy-includes-item__toggle').on('click', function(event) {        
        $(this).parents('.strategy-includes-item').find('.strategy-includes-item__content').slideToggle();
        $(this).toggleClass('active');      
    });
    
    
     $('.process-tabs-nav__item').on('click', function(event) {        
        $(this).parents('.process-tabs').find('.process-tabs-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.process-tabs').find('.process-tabs-content').removeClass('active');
        $(this).parents('.process-tabs').find('.process-tabs-content[data-tab="'+$(this).attr('data-tab')+'"]').addClass('active'); 
         $('.process-tabs-progress__current').text($(this).attr('data-tab'));
    });
    
    $('.process-tabs-arrow').on('click', function(event){        
        if($(this).hasClass('process-tabs-arrow_prev')){
            var  id = $(this).parents('.process-tabs').find('.process-tabs-nav__item.active').attr('data-tab');
            var new_id=id-1;
            if(new_id<1){
                new_id=$(this).parents('.process-tabs').find('.process-tabs-nav__item:last').attr('data-tab');
            }
            $('.process-tabs-nav__item[data-tab="'+new_id+'"]').click();            
        } 
        if($(this).hasClass('process-tabs-arrow_next')){
            var  id = parseInt($(this).parents('.process-tabs').find('.process-tabs-nav__item.active').attr('data-tab'));
            var new_id=id+1;
            var last_id=$(this).parents('.process-tabs').find('.process-tabs-nav__item:last').attr('data-tab');
            if(new_id>last_id){
                new_id=1;
            }
            $('.process-tabs-nav__item[data-tab="'+new_id+'"]').click();            
        } 
        
        $('.process-tabs-progress__current').text(new_id);
        
        return false;
    });
    
    
    $('.process__title-mobile').on('click', function(event){
        $(this).toggleClass('active');
        $(this).next('.process').slideToggle();
        
    });
    
    $('.js-portfolio__more').on('click', function(event){
        $(this).prev('.portfolio').find('.portfolio__col').show();
        $(this).hide();
        return false;
    });
    
    $('.analytics-process-item__title').on('click', function(event) {        
        $(this).next('.analytics-process-item__content').slideToggle();
        $(this).toggleClass('active');      
    });
    
    $('.block-search__toggle').on('click', function(event) {        
        $(this).parents('.scroll-menu-block').toggleClass('active');
        $(this).parents('.block-search').toggleClass('active');
        return false;
    });
    
    $('.js-slider-blog-2 .y-row').slick({
        infinite: true,
        arrows:true,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.506 9.84.33-.328a.543.543 0 0 0 .16-.387.543.543 0 0 0-.16-.387L2.099 5.002 5.84 1.26a.545.545 0 0 0 0-.773L5.513.16a.549.549 0 0 0-.774 0L.269 4.614a.558.558 0 0 0-.175.388v.002c0 .147.073.284.175.387l4.458 4.45a.556.556 0 0 0 .779-.001Z" /></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m.494 9.84-.33-.328a.543.543 0 0 1-.16-.387c0-.147.057-.284.16-.387l3.737-3.736L.16 1.26a.545.545 0 0 1 0-.773L.487.16a.549.549 0 0 1 .774 0l4.47 4.454c.103.103.175.24.175.388v.002a.562.562 0 0 1-.175.387L1.273 9.84a.556.556 0 0 1-.779-.001Z"/></svg></button>',
        appendArrows:$('.js-slider-blog-2').find('.slider-blog-2-arrows'),
        responsive: [     
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2, 
                }
            },
            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
    }); 
    
    $(window).on('resize orientationchange', function() {
      $('.js-slider-blog-2 .y-row').slick('resize');
    });
    
    
    $('.js-slider-events .y-row').slick({
        infinite: true,
        arrows:true,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.506 9.84.33-.328a.543.543 0 0 0 .16-.387.543.543 0 0 0-.16-.387L2.099 5.002 5.84 1.26a.545.545 0 0 0 0-.773L5.513.16a.549.549 0 0 0-.774 0L.269 4.614a.558.558 0 0 0-.175.388v.002c0 .147.073.284.175.387l4.458 4.45a.556.556 0 0 0 .779-.001Z" /></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m.494 9.84-.33-.328a.543.543 0 0 1-.16-.387c0-.147.057-.284.16-.387l3.737-3.736L.16 1.26a.545.545 0 0 1 0-.773L.487.16a.549.549 0 0 1 .774 0l4.47 4.454c.103.103.175.24.175.388v.002a.562.562 0 0 1-.175.387L1.273 9.84a.556.556 0 0 1-.779-.001Z"/></svg></button>',
        appendArrows:$('.js-slider-events').find('.slider-events-arrows'),
        responsive: [            
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2, 
                }
            },
            {
                breakpoint: 768,
                settings: "unslick"

            }
        ]
    }); 
    
    $(window).on('resize orientationchange', function() {
      $('.js-slider-events .y-row').slick('resize');
    });
    
    $('.js-slider-media .y-row').slick({
        infinite: true,
        arrows:true,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.506 9.84.33-.328a.543.543 0 0 0 .16-.387.543.543 0 0 0-.16-.387L2.099 5.002 5.84 1.26a.545.545 0 0 0 0-.773L5.513.16a.549.549 0 0 0-.774 0L.269 4.614a.558.558 0 0 0-.175.388v.002c0 .147.073.284.175.387l4.458 4.45a.556.556 0 0 0 .779-.001Z" /></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m.494 9.84-.33-.328a.543.543 0 0 1-.16-.387c0-.147.057-.284.16-.387l3.737-3.736L.16 1.26a.545.545 0 0 1 0-.773L.487.16a.549.549 0 0 1 .774 0l4.47 4.454c.103.103.175.24.175.388v.002a.562.562 0 0 1-.175.387L1.273 9.84a.556.556 0 0 1-.779-.001Z"/></svg></button>',
        appendArrows:$('.js-slider-media').find('.slider-media-arrows'),
        responsive: [            
            {
                //breakpoint: 9999,
                //settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2, 
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true,
                }
            }
        ]
    }); 
    
    $(window).on('resize orientationchange', function() {
      $('.js-slider-media .y-row').slick('resize');
    });
    
     $('.custom-select').selectric({
        disableOnMobile: false,
        nativeOnMobile: true,
        maxHeight: 218,
        arrowButtonMarkup: '<b class="button"><svg width="8" height="4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.844.366 1.058.15A.354.354 0 0 1 1.31.046c.096 0 .185.037.252.104L4 2.588l2.44-2.44a.354.354 0 0 1 .504 0l.214.213a.358.358 0 0 1 0 .505L4.252 3.78a.364.364 0 0 1-.253.114h-.001a.367.367 0 0 1-.253-.114L.843.874a.362.362 0 0 1 0-.508Z"></svg></b>',
        onChange: function() {
           
        }        
    });
  
    
    
    
    if($('#contacts-map').length){
        initMap();
    }    
    
    var ll2 = new LazyLoad({
            elements_selector: ".slick-slide .lazyload",
    });
    
    ll2.loadAll();
    
    $('.tooltip').tooltipster({
         theme: 'tooltipster-shadow',
    });
    
     $('.faq-item__title').on('click', function(event) {        
        $(this).next('.faq-item__content').slideToggle();
        $(this).toggleClass('active');      
    });
    
    
    $('.js-slider-approach .y-row').slick({
        infinite: false,
        arrows:false,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide:true,       
        responsive: [            
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true,
                }
            }
        ]
    }); 
    
    $(window).on('resize orientationchange', function() {
      $('.js-slider-approach .y-row').slick('resize');
    });
    
    
    $('.reviews-item__text').mCustomScrollbar({
        axis: 'y'        
    });  
    
    (function($){
        $(window).resize(function(){
            if($(this).width()>1023){
                $('.reviews-item__text').mCustomScrollbar(); //apply scrollbar with your options 
            }else{
                $('.reviews-item__text').mCustomScrollbar("destroy"); //destroy scrollbar 
            }
        }).trigger("resize");
    })(jQuery);
    
  
    
});


function initMap() {
    var icon='img/icon-map.png';
    const myLatLng = { lat:55.7100096, lng: 37.8029325 };
    const map = new google.maps.Map(document.getElementById("contacts-map"), {
            zoom: 17,
            center: myLatLng,
            disableDefaultUI: true,
          styles:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
      });
    new google.maps.Marker({
        position: myLatLng,
        map:map,
        icon:icon
      });
}

