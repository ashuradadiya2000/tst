// jQuery(document).ready(function () {
//     // banenr slider
//     jQuery(".banner_slider").slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         dots: true,
//         arrows: false,
//         prevArrow:
//             '<div class="arrow-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
//         nextArrow:
//             '<div class="arrow-next slick-arrow"><i class="fa fa-angle-right " aria-hidden="true"></i></div>',
//     });

//     // search code
//     jQuery(".search_icn").click(function () {
//         jQuery(".search_section").addClass("active_search");
//     });
//     jQuery(".close_icon").click(function () {
//         jQuery(".search_section").removeClass("active_search");
//     });

//     // header sticky
//     jQuery(window).scroll(function () {
//         var scroll = jQuery(window).scrollTop();
//         if (scroll >= 150) {
//             jQuery(".header_section").addClass("header_fixed");
//             jQuery(".header_section").slideDown("slow");
//         } else {
//             jQuery(".header_section").removeClass("header_fixed");
//         }
//     });
//     // list of all event
//     setTimeout(function () {
//         jQuery(".le_tab_li:first-child").click();
//     }, 100);

//     jQuery(".le_tab_li").click(function (g) {
//         var tab = jQuery(this).closest(".le_block"),
//             index = jQuery(this).closest("li").index();

//         tab.find(".le_tab_ul > li").removeClass("current");
//         jQuery(this).closest("li").addClass("current");

//         tab.find(".le_desc_ul")
//             .find(".le_desc_li")
//             .not(".le_desc_li:eq(" + index + ")")
//             .removeClass("active_desc")
//             .slideUp();
//         tab.find(".le_desc_ul")
//             .find(".le_desc_li:eq(" + index + ")")
//             .addClass("active_desc")
//             .slideDown();

//         g.preventDefault();
//         // list of all event pagination
//         setTimeout(function () {
//             var items = jQuery(".active_desc .le_desc_box");
//             var numItems = items.length;
//             var perPage = 8;

//             items.slice(perPage).hide();

//             jQuery("#pagination-container").pagination({
//                 items: numItems,
//                 itemsOnPage: perPage,
//                 prevText: "&laquo;",
//                 nextText: "&raquo;",
//                 onPageClick: function (pageNumber) {
//                     var showFrom = perPage * (pageNumber - 1);
//                     var showTo = showFrom + perPage;
//                     items.hide().slice(showFrom, showTo).show();
//                 },
//             });
//         }, 500);
//     });

//     // mobile menu
//     jQuery(".menu_icn").click(function () {
//         jQuery(".header_col_two").addClass("active");
//         jQuery(".close_icn").addClass("open");
//         jQuery(this).addClass("close");
//     });
//     jQuery(".close_icn").click(function () {
//         jQuery(".header_col_two").removeClass("active");
//         jQuery(".close_icn").removeClass("open");
//         jQuery(".menu_icn").removeClass("close");
//     });

//     // popup for book seat
//     jQuery(".popup_btn").click(function () {
//         jQuery(".popup_section").removeClass("active");
//         jQuery(".popup_section").addClass("active");
//     });
//     jQuery(".cancle").click(function () {
//         jQuery(".popup_section").addClass("active");
//         jQuery(".popup_section").removeClass("active");
//     });

//     // our team slider
//     jQuery(".team_slider_img").slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         arrows: true,
//         prevArrow:
//             '<div class="arrow-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
//         nextArrow:
//             '<div class="arrow-next slick-arrow"><i class="fa fa-angle-right " aria-hidden="true"></i></div>',
//         responsive: [
//             {
//                 breakpoint: 1140,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 767,
//                 settings: {
//                     slidesToShow: 3,
//                 },
//             },

//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 450,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     });

//     // sponcer slider
//     // var screen_size = screen.width;
//     // if (screen_size < 768) {
//     jQuery(".or_block").slick({
//         infinite: true,
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,
//         rows: 2,
//         arrows: true,
//         prevArrow:
//             '<div class="arrow-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
//         nextArrow:
//             '<div class="arrow-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
//         responsive: [
//             {
//                 breakpoint: 767,
//                 settings: {
//                     slidesToShow: 2,
//                     rows: 1,
//                 },
//             },
//         ],
//     });
//     // }

//     // login form script
//     jQuery(document).ready(function () {
//         //otp class
//         jQuery(".otp.otp_box").hide();

//         // login btn click
//         jQuery(".sign_up").on("click", function () {
//             jQuery(".login_section").addClass("login_show");
//             jQuery(".phone__wrapper_box").addClass(
//                 "animate__swing animate__animated"
//             );
//         });

//         // remove popup
//         jQuery(".modal__overlay").on("click", function () {
//             jQuery(".login_section").not(this).removeClass("login_show");
//             jQuery(".phone__wrapper_box").removeClass(
//                 "animate__swing animate__animated"
//             );
//         });
//     });
// });
