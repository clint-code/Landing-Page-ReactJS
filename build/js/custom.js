$(document).ready(function () {

    //scrollspy for the navigation menu
    //add smooth scrolling 
    $(".nav-section .nav .nav-link").on('click', function (event) {

        //prevent default anchor click behavoir
        event.preventDefault();

        $(".nav-section .nav .nav-link").removeClass('active');
        $(this).addClass('active');


        //ensure that this.hash has a value
        if (this.hash !== "") {

            //store hash
            var hash = this.hash;

            //smooth scroll effect
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 110
            }, 700, function () {});

            $.sidr('close', 'sidr');

            $(".menuOpener").toggleClass('close-icon');

        }
    });


    //mobile side menu
    $('.menuOpener').sidr({

        side: 'right',
        speed: 500,
        onOpen: function () {

            $(".menuOpener").toggleClass('close-icon');


        },
        onClose: function () {

            $(".menuOpener").toggleClass('open-icon');

        }

    });

    //tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      });



    //owl-carousel about contest
    $('.slideContainer').each(function (index) {

        $(this).owlCarousel({
            autoplay: false,
            dots: true,
            nav: false,
            rewind: true,
            navText: ["", ""],
            items: 1,
            //responsiveClass: true,
            responsive: {
                500: {
                    items: 1,
                    nav: true
                },
                765: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: false
                },
                1200: {
                    items: 1,
                    nav: true,
                    loop: false
                }
            }

        });

    });

    //styling the navmenu on scroll
    $(document).bind('scroll', function () {

        var $navbar = $(".main-header");
        $navbar.toggleClass('scrolled', $(this).scrollTop() > $navbar.height());

        var $navlinks = $(".nav-link");
        $navlinks.toggleClass('text-body', $(this).scrollTop() > $navlinks.height());

    });

    //entries
    $('.entries-section').hide();
    $('.entries-section:first').fadeIn();

    //toggle tabs entries
    $('.links .link a').click(toggleTab);
    let tabTarget = "";

    function toggleTab() {

        //console.log("you have clicked me!");

        tabTarget = $(this).data('target');

        $('.links .link a').removeClass('active');
        $(this).addClass('active');

        $('.entries-section').hide();
        $('.entries-section.' + tabTarget).fadeToggle();

    }

    //owl-carousel featured entries
    $('.entriesContainer').each(function (index) {

        $(this).owlCarousel({
            autoplay: 3500,
            dots: true,
            nav: true,
            rewind: true,
            navText: ["<img src='img/icons/left-arrow-icon.png'>", "<img src='img/icons/right-arrow-icon.png'>"],
            items: 4,
            //responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    dots: true
                },
                600: {
                    items: 3,
                    nav: false,
                },
                1000: {
                    items: 4
                }
            }

        });

    });


    //owl-carousel featured entries
    $('.allwinnersContainer').each(function (index) {

        $(this).owlCarousel({
            autoplay: 2000,
            //dots: true,
            nav: false,
            //loop: true,
            rewind: true,
            // navText: ["<img src='img/icons/left-arrow-icon.png'>", "<img src='img/icons/right-arrow-icon.png'>"],
            items: 4,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }

        });

    });


    //top level recipe selection
    $('.recipe').hide();
    $('.recipe:first').fadeIn();

    //toggle tabs entries
    $('.recipe-selection .single-recipe-selection').click(toggleTab3);

    let tabTarget3 = "";

    function toggleTab3() {

        //console.log("you have clicked me for sure for sure for sure!!!");

        tabTarget3 = $(this).data('target');

        $('.recipe-selection .single-recipe-selection').removeClass('active-recipe');
        $(this).addClass('active-recipe');

        $('.recipe').hide();
        
        $('.recipe.' + tabTarget3).fadeToggle();
        $('.recipe' + tabTarget3).fadeIn();

   }



    //recipe selection
    $('.recipeContainer').hide();
    $('.recipeContainer:first').fadeIn();

    //toggle tabs entries
    $('.recipe-filter .link a').click(toggleTab2);

    let tabTarget2 = "";

    function toggleTab2() {

        //console.log("you have clicked me for sure!");

        tabTarget2 = $(this).data('target');

        $('.recipe-filter .link a').removeClass('active');
        $(this).addClass('active');

        $('.recipeContainer').hide();
        $('.recipeContainer.' + tabTarget2).fadeToggle();

    }

    //recipe carousel
    //owl-carousel about contest
    $('.recipeContainer').each(function (index) {

        $(this).owlCarousel({
            autoplay: 3500,
            dots: true,
            nav: true,
            rewind: true,
            // animateOut: 'fadeOut',
            //pagination: true,
            navText: ["<img src='img/icons/left-arrow-icon.png'>", "<img src='img/icons/right-arrow-icon.png'>"],
            items: 2,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false
                },

                500: {
                    items: 1,
                    nav: true,
                    dots: false
                },
                765: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    dots: true
                },
                1200: {
                    items: 1,
                    nav: true,
                    loop: false
                }
            }

        });

    });



});