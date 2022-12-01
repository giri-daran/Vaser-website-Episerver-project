var menuHeight = 0;
var bodyHeight = 0;
var bodyWidth = 0;
var headerHeight = 0;
var windowScrollActive = true;
var hashURL = ["", "#home", '#the-vaser-system', '#why-vaser', '#vaser-advantage', '#results', '#contact-a-representative'];

function checkPageLocation() {
    var locationHref = location.href;
    var locationOrigin = location.origin;
    if (hashURL.indexOf(location.hash) < 0) {
        location.href = location.protocol + "//" + location.host + '/hcp/' + 404
    } else {
        if (hashURL.indexOf(location.hash) != -1) {
            setTimeout(function () {
                scrollToHash(location.hash);
            }, 1000);
        }
    }
}
window.onhashchange = function () {
    checkPageLocation();
}

function scrollToHash(hash) {
    headerHeight = $('header').height();
    var sspeed = 800;
    var docTop = Math.round($(hash).top) - headerHeight;
    if (hash == '#contact-a-representative') {
        docTop = $(document).height();
    }
    $('html, body').animate({
        scrollTop: docTop
    }, sspeed, function () {
        $(".main-nav ul li a").each(function () {
            if (hash == '#contact-a-representative') {
                $(".main-nav ul li a").removeClass("active");
                $('.main-nav li:last a').addClass('active');
            } else {
                if ($(this).attr("href") == hash) {
                    $(".main-nav ul li a").removeClass("active");
                    $(this).addClass("active");
                }
            }
        });
    });
}

function windoScrollToPosition() {
    headerHeight = $('header').height();
    var homeTop = $('#home').offset().top - headerHeight - 100;
    var clearBrilliantTop = $('#the-vaser-system').offset().top - headerHeight - 100;
    var updatesTop = $('#why-vaser').offset().top - headerHeight - 100;
    var resultsTop = $('#vaser-advantage').offset().top - headerHeight - 100;
    var whyClearBrilliant = $('#results').offset().top - headerHeight - 100;
    $(window).on('scroll', function (e) {
        if (windowScrollActive && $('#personaBar-iframe').length < 1) {
            if (bodyWidth >= 1000) {
                highlightMenuOnScroll($(window).scrollTop() + 20);
            } else {
                console.log(location.pathname)
                if (hashURL.indexOf(location.hash) != -1 && (location.pathname == '/hcp/' || location.pathname == '/hcp')) {
                    highlightMenuOnScrollMobile($(window).scrollTop() + 20);
                }
            }
        }
    });

    function highlightMenuOnScrollMobile(windowScrollPos) {
        if (windowScrollPos > ($(document).height() - ($(window).height() + 100))) {
            if (window.location.hash != '#contact-a-representative') {
                history.replaceState(undefined, undefined, '#contact-a-representative');
            }
        } else if (windowScrollPos >= homeTop && windowScrollPos < (clearBrilliantTop)) {
            if (window.location.hash != '#home') {
                history.replaceState(undefined, undefined, '#home');
            }
        } else if (windowScrollPos >= clearBrilliantTop && windowScrollPos < (updatesTop)) {
            if (window.location.hash != '#the-vaser-system') {
                history.replaceState(undefined, undefined, '#the-vaser-system');
            }
        } else if (windowScrollPos >= updatesTop && windowScrollPos < (resultsTop)) {
            if (window.location.hash != '#why-vaser') {
                history.replaceState(undefined, undefined, '#why-vaser');
            }
        } else if (windowScrollPos >= resultsTop && windowScrollPos < (whyClearBrilliant)) {
            if (window.location.hash != '#vaser-advantage') {
                history.replaceState(undefined, undefined, '#vaser-advantage');
            }
        } else if (windowScrollPos >= whyClearBrilliant && windowScrollPos < ($(document).height() - ($(window).height() + 100))) {
            if (window.location.hash != '#results') {
                history.replaceState(undefined, undefined, '#results');
            }
        } else {
            return;
        }
    }

    function highlightMenuOnScroll(windowScrollPos) {
        if (windowScrollPos > ($(document).height() - ($(window).height() + 100))) {
            $('.main-nav ul.nav li a').removeClass('active');
            $('.main-nav ul.nav li:eq(5) a').addClass('active');
            if (window.location.hash != '#contact-a-representative') {
                history.replaceState(undefined, undefined, '#contact-a-representative');
            }
        } else if (windowScrollPos >= homeTop && windowScrollPos < (clearBrilliantTop)) {
            $('.main-nav ul.nav li a').removeClass('active');
            $('.main-nav ul.nav li:eq(0) a').addClass('active');
            if (window.location.hash != '#home') {
                history.replaceState(undefined, undefined, '#home');
            }
        } else if (windowScrollPos >= clearBrilliantTop && windowScrollPos < (updatesTop)) {
            $('.main-nav ul.nav li a').removeClass('active');
            $('.main-nav ul.nav li:eq(1) a').addClass('active');
            if (window.location.hash != '#the-vaser-system') {
                history.replaceState(undefined, undefined, '#the-vaser-system');
            }
        } else if (windowScrollPos >= updatesTop && windowScrollPos < (resultsTop)) {
            $('.main-nav ul.nav li a').removeClass('active');
            $('.main-nav ul.nav li:eq(2) a').addClass('active');
            if (window.location.hash != '#why-vaser') {
                history.replaceState(undefined, undefined, '#why-vaser');
            }
        } else if (windowScrollPos >= resultsTop && windowScrollPos < (whyClearBrilliant)) {
            $('.main-nav ul.nav li a').removeClass('active');
            $('.main-nav ul.nav li:eq(3) a').addClass('active');
            if (window.location.hash != '#vaser-advantage') {
                history.replaceState(undefined, undefined, '#vaser-advantage');
            }
        } else if (windowScrollPos >= whyClearBrilliant && windowScrollPos < ($(document).height() - ($(window).height() + 100))) {
            $('.main-nav ul.nav li a').removeClass('active');
            $('.main-nav ul.nav li:eq(4) a').addClass('active');
            if (window.location.hash != '#results') {
                history.replaceState(undefined, undefined, '#results');
            }
        }
    }
};
$(window).on('load', function () {
    checkPageLocation();
    windoScrollToPosition();
});
jQuery(document).ready(function () {
    function setErrorPageContentHeight() {
        var extraMargin404 = parseInt($('.msg-404').css('padding-top')) + parseInt($('.msg-404').css('padding-bottom'));
        var msgContentHeight = $('.message-404').height() + 20;
        var calculatedHeight = $(window).height() - ($('header').height() + $('footer').height() + extraMargin404);
        $('.msg-404').css('margin-top', $('header').height());
        if (calculatedHeight > msgContentHeight) {
            $('.msg-404').height(calculatedHeight);
        }
    }
    setErrorPageContentHeight();
    $(".main-nav a").on('click', function (event) {
        if (!$(this).hasClass('err-page')) {
            var totalLi = $('.main-nav li').length - 1;
            if ($(this).parent().index() == totalLi) {
                return;
            }
            windowScrollActive = false;
            var sspeed = parseInt($(this).attr("data-speed"));
            $(".main-nav a").removeClass("active");
            $(this).addClass("active");
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - headerHeight
                }, sspeed, function () {
                    windowScrollActive = true;
                    window.history.replaceState(null, null, hash);
                });
            }
        }
    });
    $('.mobile-menu-links a').on('click', function (e) {
        if (!$(this).hasClass('err-page-link')) {
            if (!$(this).hasClass('mobile-contact-link')) {
                e.preventDefault();
                closeMenu();
                scrollToHash($(this).attr('href'));
            }
        }
    })
    var formOpenAction = $('.btn-contact-representative').last().attr('href');
    $('.btn-contact-representative').first().attr('href', formOpenAction);
    $('.mobile-contact-link').first().attr('href', formOpenAction);
    $('.btn-isi').on('click', function () {
        if ($(window).width() <= 1000 && $('.top-right-links').is(':visible')) {
            closeMenu();
        }
        $('#blurMe').addClass("blurMe");
        $("#isiContainer").modal({
            backdrop: 'static',
            keyboard: false
        });
    });
    $('.btn-close-isi').on('click', function () {
        $('.isi-modal-content,.bg-navy').scrollTop(0);
        $('#blurMe').removeClass("blurMe");
    });
    $('body').on('click', '.reload-window', function () {
        $(".modal-body").scrollTop(0);
        location.reload();
    });
    $('body').on('click', '.btn-contact-representative', function () {
        $('body').css('overflow', 'hidden');
        if ($(window).width() <= 1000) {
            setTimeout(function () {
                $(document).scrollTop(0);
                $('.modal-mobile-header').show();
            }, 1000);
        }
    });
    $('body').on('click', '.mobile-contact-link', function () {
        setTimeout(function () {
            $('.modal-mobile-header').show();
        }, 1000);
    });
    $('body').on('click', '.modal-mobile-header .mobile-close.reload', function () {
        history.replaceState(undefined, undefined, '#home');
        $(document).scrollTop(0);
        location.reload(true);
        $('.modal-mobile-header').hide();
        $('.modal').modal('hide');
    });
    $('body').on('click', '#contact-a-representative button', function () {
        function myFunction() {
            if ($('#contact-a-representative .submit-confirm').is(':visible')) {
                var modal = $('.modal:visible');
                var modalTopPos = modal.position().top;
                var updatedHeight = modal.find('.modal-dialog').height();
                $('.modal-mobile-header .mobile-close').hide();
                $('.modal:visible').scrollTop(0);
                modal.height(updatedHeight);
                setTimeout(setHashToHome, 1000);
            }
        }
        setInterval(myFunction, 500);
    });

    function setHashToHome() {
        if ($(window).width() <= 1000) {
            history.replaceState(undefined, undefined, '#home');
            $(document).scrollTop(0);
            if (location.hash === '#home') {
                var maxId = setTimeout(function () { }, 0);
                for (var i = 0; i < maxId; i += 1) {
                    clearTimeout(i);
                }
            }
        } else {
            var maxId = setTimeout(function () { }, 0);
            for (var i = 0; i < maxId; i += 1) {
                clearTimeout(i);
            }
        }
    }
    $('.hamburger-menu').click(function () {
        if (jQuery('.hamburger-menu').find("i").hasClass("fa-bars")) {
            openMenu();
        } else {
            closeMenu();
        }
    });
    $("#beforeAfterCarousel").swiperight(function () {
        $(this).carousel('prev');
    });
    $("#beforeAfterCarousel").swipeleft(function () {
        $(this).carousel('next');
    });
    if ($('#mainBannerLogo').length > 0 && $('#mainBannerLogo').height() > 0) {
        setBannerHeight();
    }

    function setBannerHeight() {
        var setBannerTopHeight = $('.banner-content h1').position().top + $('.banner-content h1').height() + parseInt($('.banner-content h1').css('margin-bottom')) + 20;
        if ($(window).width() >= 768 && $(window).width() <= 1000) {
            setBannerTopHeight -= 0;
        }
        if ($(window).width() < 768) {
            setBannerTopHeight -= 20;
        }
        $('img.banner-top-bg').height(setBannerTopHeight);
        var setBottomImgHeight = $('img.banner-bottom-bg').parent().height() - $('img.banner-top-bg').height();
        $('img.banner-bottom-bg').height(setBottomImgHeight);
    }
    setTimeout(function () {
        applyFluidResolution();
        if ($('#mainBannerLogo').length > 0 && $('#mainBannerLogo').height() > 0) {
            setBannerHeight();
        }
    }, 1000);
    jQuery(window).resize(function () {
        applyFluidResolution();
        if ($('#mainBannerLogo').length > 0 && $('#mainBannerLogo').height() > 0) {
            setBannerHeight();
        }
    });

    function applyFluidResolution() {
        bodyWidth = jQuery("body").outerWidth();
        headerHeight = $('header').height();
        setErrorPageContentHeight();
    }
    var bodyScroll = $(window).scrollTop();

    function openMenu() {
        jQuery('.hamburger-menu').find("i").removeClass("fa-bars");
        jQuery('.hamburger-menu').find("i").addClass("fa-times");
        bodyScroll = $(window).scrollTop();
        $('body').addClass('show-menu');
    }

    function closeMenu() {
        $('.top-right-links').scrollTop(0);
        jQuery('.hamburger-menu').find("i").addClass("fa-bars");
        jQuery('.hamburger-menu').find("i").removeClass("fa-times");
        $('body').removeClass('show-menu');
        $(window).scrollTop(bodyScroll);
    }
    $(".vaser-system-circle").click(function () {
        var fetchDataClass = $(this).data('class');
        $('.vaser-system-box1').hide();
        $('.vaser-system-box1[data-class="' + fetchDataClass + '"]').show();
        var fetchCircleClass = $(this).data('class');
        $('.vaser-system-circle').removeClass('circleActive');
        $('.vaser-system-circle[data-class="' + fetchCircleClass + '"]').addClass('circleActive');
    });
    $('#beforeAfterCarousel').on('slide.bs.carousel', function (ev) {
        var id = ev.relatedTarget.id;
        switch (id) {
            case "slide-1":
                $('.results-carousel').css('background', '#8ea5b9');
                break;
            case "slide-2":
                $('.results-carousel').css('background', '#8ea5b9');
                break;
            case "slide-3":
                $('.results-carousel').css('background', '#8ea5b9');
                break;
            case "slide-4":
                $('.results-carousel').css('background', '#4c8dcd');
                break;
            case "slide-5":
                $('.results-carousel').css('background', '#4c8dcd');
                break;
            default:
        }
    });
});