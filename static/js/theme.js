!function(e){"use strict";e("#phone").length&&e("#phone").intlTelInput({utilsScript:"vendor/intl-tel/build/js/utils.js"});var o=window.location.href.substr(window.location.href.lastIndexOf("/")+1);if(e(".navbar-nav > li  a").each((function(){e(this).attr("href")!=o&&""!=e(this).attr("href")||e(this).addClass("active")})),e(".counter").length&&e(".counter").counterUp({delay:10,time:1200}),e(window).on("scroll",(function(){var o=e(".sticky-menu");e(window).scrollTop()>=100?o.addClass("fixed"):o.removeClass("fixed")})),e(window).on("scroll",(function(){e(this).scrollTop()>200?e(".scroll-top").fadeIn():e(".scroll-top").fadeOut()})),e(".scroll-top").on("click",(function(){return e("html, body").animate({scrollTop:0}),!1})),e("input,textarea").each((function(){e(this).data("holder",e(this).attr("placeholder")),e(this).on("focusin",(function(){e(this).attr("placeholder","")})),e(this).on("focusout",(function(){e(this).attr("placeholder",e(this).data("holder"))}))})),e(".user-data-form").length&&e(".passVicon").on("click",(function(){e(".passVicon").toggleClass("eye-slash");var o=e(".pass_log_id");"password"===o.attr("type")?o.attr("type","text"):o.attr("type","password")})),e(".mixitUp-container").length){var s=document.querySelector(".mixitUp-container");mixitup(s)}e(".partnerSliderOne").length&&e(".partnerSliderOne").slick({centerMode:!0,centerPadding:"0px",arrows:!1,slidesToShow:5,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:992,settings:{centerMode:!0,slidesToShow:4}},{breakpoint:768,settings:{centerMode:!0,slidesToShow:3}},{breakpoint:480,settings:{centerMode:!0,slidesToShow:2}}]}),e(".feedback_slider_one").length&&e(".feedback_slider_one").slick({centerMode:!0,centerPadding:"0px",slidesToShow:1,fade:!0,prevArrow:e(".prev_c"),nextArrow:e(".next_c"),autoplay:!0,autoplaySpeed:6e3}),e(".feedback_slider_two").length&&e(".feedback_slider_two").slick({dots:!1,arrows:!0,prevArrow:e(".prev_b"),nextArrow:e(".next_b"),centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),e(".feedback_slider_three").length&&e(".feedback_slider_three").slick({dots:!0,arrows:!1,centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),e(".feedback_slider_four").length&&e(".feedback_slider_four").slick({dots:!0,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,autoplaySpeed:3e3}),e(".feedback_slider_five").length&&e(".feedback_slider_five").slick({dots:!1,arrows:!0,prevArrow:e(".prev_f"),nextArrow:e(".next_f"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1400,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),e(".feedback_slider_six").length&&e(".feedback_slider_six").slick({dots:!0,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!1,fade:!0,autoplaySpeed:3e3}),e(".feedback_slider_seven").length&&e(".feedback_slider_seven").slick({dots:!0,arrows:!1,prevArrow:e(".prev_b"),nextArrow:e(".next_b"),centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),e(".feedback_slider_eight").length&&e(".feedback_slider_eight").slick({dots:!0,arrows:!1,centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,centerMode:!0,autoplaySpeed:3e3}),e(".feedback_slider_nine").length&&e(".feedback_slider_nine").slick({dots:!0,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,centerMode:!0,autoplaySpeed:3e3}),e(".team_slider_one").length&&e(".team_slider_one").slick({dots:!1,arrows:!0,prevArrow:e(".prev_team1"),nextArrow:e(".next_team1"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:500,settings:{slidesToShow:1}}]}),e(".team_slider_two").length&&e(".team_slider_two").slick({dots:!1,arrows:!0,prevArrow:e(".prev_team2"),nextArrow:e(".next_team2"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1400,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),e(".hero_slider_one").length&&e(".hero_slider_one").slick({dots:!1,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,autoplaySpeed:3e3}),e(".hero_slider_two").length&&e(".hero_slider_two").slick({dots:!1,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,autoplaySpeed:4e3}),e(".hero_slider_three").length&&e(".hero_slider_three").slick({dots:!1,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,fade:!0}),e(".hero_slider_four").length&&e(".hero_slider_four").slick({dots:!0,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:6e3,fade:!0}),e(".shop-hero-slider-one").length&&(e(".shop-hero-slider-one").slick({dots:!1,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,fade:!0}),e(".shop-hero-slider-one").on("wheel",(function(o){o.preventDefault(),o.originalEvent.deltaY<0?e(this).slick("slickNext"):e(this).slick("slickPrev")}))),e(".feature_slider_one").length&&e(".feature_slider_one").slick({dots:!1,arrows:!0,prevArrow:e(".prev_f1"),nextArrow:e(".next_f1"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,centerMode:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1400,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),e(".case_slider_one").length&&e(".case_slider_one").slick({dots:!1,arrows:!0,prevArrow:e(".prev_case1"),nextArrow:e(".next_case1"),centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),e(".case_slider_two").length&&e(".case_slider_two").slick({dots:!1,arrows:!0,prevArrow:e(".prev_case2"),nextArrow:e(".next_case2"),centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,centerMode:!0,autoplaySpeed:3e3}),e(".product_slider_one").length&&e(".product_slider_one").slick({dots:!1,arrows:!0,prevArrow:e(".prev_p1"),nextArrow:e(".next_p1"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1400,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),e(".product_slider_two").length&&e(".product_slider_two").slick({dots:!1,arrows:!0,prevArrow:e(".prev_p2"),nextArrow:e(".next_p2"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),e(".product_slider_three").length&&e(".product_slider_three").slick({dots:!1,arrows:!0,prevArrow:e(".prev_p3"),nextArrow:e(".next_p3"),centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!1,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),e(".product_slider_four").length&&e(".product_slider_four").slick({dots:!1,arrows:!0,prevArrow:e(".prev_p4"),nextArrow:e(".next_p4"),centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!1,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),e(".portfolio-slider-one").length&&e(".portfolio-slider-one").slick({dots:!1,arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,responsive:[{breakpoint:768,settings:{pauseOnFocus:!1}}]}),e(".portfolio-slider-two").length&&e(".portfolio-slider-two").slick({dots:!1,arrows:!0,prevArrow:e(".prev_btn1"),nextArrow:e(".next_btn1"),centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3500,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),e(".portfolio-slider-three").length&&e(".portfolio-slider-three").slick({dots:!1,arrows:!0,prevArrow:e(".prev_btn1"),nextArrow:e(".next_btn1"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3500,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),e(".portfolio-slider-four").length&&e(".portfolio-slider-four").slick({dots:!1,arrows:!0,prevArrow:e(".prev_btn1"),nextArrow:e(".next_btn1"),centerPadding:"0px",slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:3500,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]}),e(".portfolio-slider-five").length&&e(".portfolio-slider-five").slick({dots:!1,arrows:!0,prevArrow:e(".prev_btn2"),nextArrow:e(".next_btn2"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3500,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),e("#page-scroll-container-one").length&&e("#page-scroll-container-one").pagepiling({scrollingSpeed:50,loopTop:!0,loopBottom:!0}),e("#page-scroll-container-two").length&&e("#page-scroll-container-two").pagepiling({scrollingSpeed:50,loopTop:!0,loopBottom:!0}),e("select").length&&e(".theme-select-menu").selectize(),e("#credit-card").length&&e(".payment-radio-button").on("click",(function(){e("#credit-card").is(":checked")?e(".credit-card-form").show(300):e(".credit-card-form").hide(300)})),e("img.svg").each((function(){var o=e(this),s=o.attr("id"),t=o.attr("class"),r=o.attr("src");e.get(r,(function(r){var i=e(r).find("svg");void 0!==s&&(i=i.attr("id",s)),void 0!==t&&(i=i.attr("class",t+" replaced-svg")),!(i=i.removeAttr("xmlns:a")).attr("viewBox")&&i.attr("height")&&i.attr("width")&&i.attr("viewBox","0 0 "+i.attr("height")+" "+i.attr("width")),o.replaceWith(i)}),"xml")})),e(".product-value").length&&(e(".value-increase").on("click",(function(){var o=e(this).closest("ul").find(".product-value"),s=parseInt(o.val());isNaN(s)||o.val(s+1)})),e(".value-decrease").on("click",(function(){var o=e(this).closest("ul").find(".product-value"),s=parseInt(o.val());!isNaN(s)&&s>1&&o.val(s-1)}))),e("#contact-form").length&&(e("#contact-form").validator(),e("#contact-form").on("submit",(function(o){if(!o.isDefaultPrevented())return e.ajax({type:"POST",url:"",data:e(this).serialize(),success:function(o){var s="alert-"+o.type,t=o.message,r='<div class="alert '+s+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+t+"</div>";s&&t&&(e("#contact-form").find(".messages").html(r),e("#contact-form")[0].reset())}}),!1}))),e(window).on("load",(function(){e("#ctn-preloader").fadeOut(),e("#preloader").delay(350).fadeOut("slow"),e("body").delay(350).css({overflow:"visible"}),e("[data-aos]").length&&AOS.init({duration:1e3,mirror:!0});var o=e(".fancybox");if(o.length&&o.fancybox({arrows:!0,buttons:["zoom","slideShow","thumbs","close"],animationEffect:"zoom-in-out",transitionEffect:"zoom-in-out"}),e("#isotop-gallery-wrapper").length){var s=e("#isotop-gallery-wrapper").isotope({itemSelector:".isotop-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"}});e(".isotop-menu-wrapper").on("click","li",(function(){var o=e(this).attr("data-filter");s.isotope({filter:o})})),e(".isotop-menu-wrapper").each((function(o,s){var t=e(s);t.on("click","li",(function(){t.find(".is-checked").removeClass("is-checked"),e(this).addClass("is-checked")}))}))}}))}(jQuery);