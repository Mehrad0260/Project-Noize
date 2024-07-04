$(function () {
    $('.owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    })
    $('#data span').counterUp();
    $('.facebook').on('click', function () {
        open('https://www.facebook.com')
    })
    $('.instagram').on('click', function () {
        open('https://www.instagram.com')
    })
    $('.twitter').on('click', function () {
        open('https://www.twitter.com')
    })
    $('.youtube').on('click', function () {
        open('https://www.youtube.com/')
    })
    $('.text-artist i').on('click', function (event) {
        event.stopPropagation()
    })

    $('.artist-img').on('click', function (event) {
        $('.text-artist', this).toggleClass('top')

    })
    $('.post').on('click', function (event) {
        $('.post-hover', this).toggleClass('left')

    })
    $("#gotop").fadeOut()
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('#menu').css('background-color', '#00000024');
            $('#menu').css('backdrop-filter', 'blur(8px)');
            $('#menu').css('transition', '.3s');
            $("#gotop").fadeIn()
        }
        else {
            $('#menu').css('background-color', 'rgba(0, 0, 0, 0)');
            $('#menu').css('backdrop-filter', '');
            $("#gotop").fadeOut()
        }
        // -------------------------------------------------------
        if ($('body').width() < 576) {
            if ($(window).scrollTop() > ($('#head').height() + $('#ticket').height() + $('#creat-album').height() + $('#service').height() + $('#chart').height() + 600)) {
                $('#pizza').animate({ 'width': '92%' }, 0, 'slow')
                $('#like').animate({ 'width': '52%' }, 0, 'slow')
                $('#Paradise').animate({ 'width': '77%' }, 0, 'slow')

            }
        }
        else if ($('body').width() >= 576) {
            if ($(window).scrollTop() > ($('#head').height() + $('#ticket').height() + $('#creat-album').height() + $('#service').height() + $('#chart').height() + 200)) {
                $('#pizza').animate({ 'width': '92%' }, 0, 'slow')
                $('#like').animate({ 'width': '52%' }, 0, 'slow')
                $('#Paradise').animate({ 'width': '77%' }, 0, 'slow')
            }
        }
        else if ($('body').width() > 768) {
            if ($(window).scrollTop() > ($('#head').height() + $('#ticket').height() + $('#creat-album').height() + $('#service').height() + $('#chart').height() + 100)) {
                $('#pizza').animate({ 'width': '92%' }, 0, 'slow')
                $('#like').animate({ 'width': '52%' }, 0, 'slow')
                $('#Paradise').animate({ 'width': '77%' }, 0, 'slow')
            }
        }
        else if($('body').width() > 1200) {
            if ($(window).scrollTop() > ($('#head').height() + $('#ticket').height() + $('#creat-album').height() + $('#service').height() + $('#chart').height())) {
                $('#pizza').animate({ 'width': '92%' }, 0, 'slow')
                $('#like').animate({ 'width': '52%' }, 0, 'slow')
                $('#Paradise').animate({ 'width': '77%' }, 0, 'slow')

            }
        }
        // --------------------------------------------------------
        let docheight = $(document).height();
        let winheight = $(window).height();
        let viowport = docheight - winheight;
        let scrroltop = $(window).scrollTop();
        let percent = (scrroltop / viowport) * 100
        $('#sitemap').css('width', percent + '%')
    })
    $("#gotop").on("click", function (event) {
        $('html,body').animate({ scrollTop: '0px' }, 1000)
    })
});