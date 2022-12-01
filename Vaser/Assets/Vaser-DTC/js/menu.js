var menuHeight = 0;
var bodyHeight = 0;
var bodyWidth = 0;
var headerHeight = 0;
var hashURL = ["", "#home", '#the-vaser-system', '#why-vaser', '#how-it-works', '#results'];

function checkPageLocation() {
    var locationHref = location.href;
    var locationOrigin = location.origin;
    if (hashURL.indexOf(location.hash) < 0) {
        location.href = location.protocol + "//" + location.host + '/' + 404
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
    var docTop = Math.round($(hash).offset().top) - headerHeight;
    if (hash == '#find-a-doctor') {
        docTop = $(document).height();
    }
    $('html, body').animate({
        scrollTop: docTop
    }, sspeed, function () {
        $(".main-nav ul li a").each(function () {
            if (hash == '#find-a-doctor') { } else {
                if ($(this).attr("href") == hash) {
                    $(".main-nav ul li a").removeClass("active");
                    $(this).addClass("active");
                }
            }
        });
    });
}
$(window).on('load', function () {
    checkPageLocation();
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
    var windowScrollActive = true;
    setTimeout(function () {
        var homeTop = $('#home').offset().top - headerHeight - 100;
        var vaserTop = $('#the-vaser-system').offset().top - headerHeight - 100;
        var whyVaserTop = $('#why-vaser').offset().top - headerHeight - 100;
        var howItWorksTop = $('#how-it-works').offset().top - headerHeight - 100;
        var resultsTop = $('#results').offset().top - headerHeight - 100;
        var fhcTop = $('#find-a-doctor').offset().top - headerHeight - 100;
        $(window).on('scroll', function (e) {
            if (windowScrollActive && $('#personaBar-iframe').length < 1 && location.pathname == '/') {
                if (bodyWidth >= 1000) {
                    highlightMenuOnScroll($(window).scrollTop() + 20);
                } else {
                    if (hashURL.indexOf(location.hash) != -1 && location.pathname == '/') {
                        highlightMenuOnScrollMobile($(window).scrollTop() + 20);
                    }
                }
            }
        });

        function highlightMenuOnScrollMobile(windowScrollPos) {
            if (windowScrollPos > ($(document).height() - ($(window).height() + 100))) {
                if (window.location.hash != '#find-a-doctor') {
                    history.replaceState(undefined, undefined, '#find-a-doctor');
                }
            } else if (windowScrollPos >= homeTop && windowScrollPos < (vaserTop)) {
                if (window.location.hash != '#home') {
                    history.replaceState(undefined, undefined, '#home');
                }
            } else if (windowScrollPos >= vaserTop && windowScrollPos < (whyVaserTop)) {
                if (window.location.hash != '#the-vaser-system') {
                    history.replaceState(undefined, undefined, '#the-vaser-system');
                }
            } else if (windowScrollPos >= whyVaserTop && windowScrollPos < (howItWorksTop)) {
                if (window.location.hash != '#why-vaser') {
                    history.replaceState(undefined, undefined, '#why-vaser');
                }
            } else if (windowScrollPos >= howItWorksTop && windowScrollPos < (resultsTop)) {
                if (window.location.hash != '#how-it-works') {
                    history.replaceState(undefined, undefined, '#how-it-works');
                }
            } else if (windowScrollPos >= resultsTop && windowScrollPos < ($(document).height() - ($(window).height() + 100))) {
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
                if (window.location.hash != '#find-a-doctor') {
                    history.replaceState(undefined, undefined, '#find-a-doctor');
                }
            } else if (windowScrollPos >= homeTop && windowScrollPos < (vaserTop)) {
                $('.main-nav ul.nav li a').removeClass('active');
                $('.main-nav ul.nav li:eq(0) a').addClass('active');
                if (window.location.hash != '#home') {
                    history.replaceState(undefined, undefined, '#home');
                }
            } else if (windowScrollPos >= vaserTop && windowScrollPos < (whyVaserTop)) {
                $('.main-nav ul.nav li a').removeClass('active');
                $('.main-nav ul.nav li:eq(1) a').addClass('active');
                if (window.location.hash != '#the-vaser-system') {
                    history.replaceState(undefined, undefined, '#the-vaser-system');
                }
            } else if (windowScrollPos >= whyVaserTop && windowScrollPos < (howItWorksTop)) {
                $('.main-nav ul.nav li a').removeClass('active');
                $('.main-nav ul.nav li:eq(2) a').addClass('active');
                if (window.location.hash != '#why-vaser') {
                    history.replaceState(undefined, undefined, '#why-vaser');
                }
            } else if (windowScrollPos >= howItWorksTop && windowScrollPos < (resultsTop)) {
                $('.main-nav ul.nav li a').removeClass('active');
                $('.main-nav ul.nav li:eq(3) a').addClass('active');
                if (window.location.hash != '#how-it-works') {
                    history.replaceState(undefined, undefined, '#how-it-works');
                }
            } else if (windowScrollPos >= resultsTop && windowScrollPos < ($(document).height() - ($(window).height() + 100))) {
                $('.main-nav ul.nav li a').removeClass('active');
                $('.main-nav ul.nav li:eq(4) a').addClass('active');
                if (window.location.hash != '#results') {
                    history.replaceState(undefined, undefined, '#results');
                }
            }
        }
    }, 2000);
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
    })
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
        $('.isi-modal-content').scrollTop(0);
        $('#blurMe').removeClass("blurMe");
    });
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
    setTimeout(function () {
        applyFluidResolution();
    }, 1000);
    jQuery(window).resize(function () {
        applyFluidResolution();
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
});
var iframe_id = "locatoriframe";
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
eventer(messageEvent, function (e) {
    if (e.data.indexOf("w2gi:iframeHeightUpdated") !== -1) {
        var dimensions = e.data.split("//");
        autoResize(dimensions[1], dimensions[2]);
    }
    if (e.data.indexOf("w2gi:scrollPage") !== -1) {
        var offsets = document.getElementById(iframe_id).getBoundingClientRect();
        var values = e.data.split("//");
        var destination = values[1];
        var offset = values[2];
        window.scrollTo(0, destination + offsets.top);
    }
}, false);

function autoResize(newheight, newwidth) {
    document.getElementById(iframe_id).style.height = parseInt(newheight) + 40 + "px";
}
$('.finddoctormapframe').append('<iframe id="locatoriframe" scrolling="no" src="https://hosted.where2getit.com/thermage/vaser.html" style="height: 840px;"></iframe>');
var loc = window.location.href;
if (loc.includes('find-a-doctor')) {
    $("header").addClass("err-page-header");
}