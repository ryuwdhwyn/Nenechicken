$("document").ready(function () {

    $(".m-btn, .m-nav ul li").click(function(){
        $(".m-btn").toggleClass("on")
        $(".m-nav").toggleClass("on")
        $(".window").toggleClass("on")
        }) 


$(".header .nav ul li").mouseover(function(){
        let i = $(this).index();
        $(".header .nav ul li a").removeClass("on").eq(i).addClass("on")
    }).mouseout(function(){
        $(".header .nav ul li a").removeClass("on")
    })

    $(".header .nav").hover(function () {
        $(".header .submenu").addClass("on");
        $(".header .submenu ul li").addClass("on");
    }, function () {
        $(".header .submenu").removeClass("on");
        $(".header .submenu ul li").removeClass("on");
    })
    
    $(".header .submenu").hover(function(){
        $(".header .submenu").addClass("on");
        $(".header .submenu ul li").addClass("on");
    }, function(){
        $(".header .submenu").removeClass("on");
        $(".header .submenu ul li").removeClass("on");
    })
    $(".header .submenu ul").mouseover(function(){
        let i = $(this).index();
        $(".header .nav ul li").removeClass("on").eq(i).addClass("on")
    }).mouseout(function(){
        $(".header .nav ul li").removeClass("on")
    })

    const banner = new Swiper(".swiper.banner-slide",{
        autoplay: {
            delay: 3000
        },
        loop: true,
        navigation:{
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className){
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            }
        }
    })

    var swiper = new Swiper(".myswiper", {
        slidesPerView: 1,
        grid: {
        rows: 1,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });

    $(".nene-menu .menu-list ul li:nth-child(1)").addClass("on")
    $(".nene-menu .menu-content .menu-content-wrap:nth-child(1)").addClass("on")

    $(".nene-menu .menu-list ul li").click(function(){
        i = $(this).index();

        $(".nene-menu .menu-list ul li").removeClass("on").eq(i).addClass("on")
        $(".nene-menu .menu-content .menu-content-wrap").removeClass("on").eq(i).addClass("on").return
    })

});