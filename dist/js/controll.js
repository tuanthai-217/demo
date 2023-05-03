$(document).ready(function() {
    $(".card").slick({
        centerMode: true,
        centerPadding: "20px",
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        dot: false,
        // prevArrow: $(".prev"),
        // nextArrow: $(".next"),

        // autoplay: true,
        // autoplaySpeed: 5000

        responsive: [{
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    // dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                } // destroys slick
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                } // destroys slick
            }
        ]
    });

    // $(".slick_core-team").slick({
    //   centerMode: true,
    //   centerPadding: "0px",
    //   speed: 300,
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   // prevArrow: $(".prev"),
    //   // nextArrow: $(".next"),
    //   variableWidth: false
    //   // autoplay: true,
    // });

    var listFaq = document.getElementsByClassName('faq_card')
    if (listFaq.length > 0) {
        var listF = document.getElementsByClassName('faq_head')
        var listQ = document.getElementsByClassName('faq_body')
        for (let i = 0; i < listFaq.length; i++) {
            listQ[i].style.height = '0px'
            listF[i].style.setProperty('--style_rotate', ' translateY(-50%) rotate(-90deg)')
            listF[i].addEventListener('click', (event) => {
                // console.log(listQ[i].clientHeight);
                // console.log(listQ[i].scrollHeight);
                if (listQ[i].clientHeight == 0) {
                    listQ[i].style.height = listQ[i].scrollHeight + 10 + 'px'
                    listQ[i].style.paddingTop = '1rem'
                    listQ[i].style.marginTop = '1rem'
                    listQ[i].style.borderTop = '1px solid #A9ACB1'
                    listF[i].style.setProperty('--style_rotate', ' translateY(-50%) rotate(0deg)')
                } else {
                    listQ[i].style.height = '0px'
                    listQ[i].style.paddingTop = '0'
                    listQ[i].style.marginTop = '0'
                    listQ[i].style.borderTop = 'unset'
                    listF[i].style.setProperty('--style_rotate', ' translateY(-50%) rotate(-90deg)')
                }
            })
        }
    }
    // active item nav top
    // var nav = document.getElementById('nav');
    // $(".nav-item").click(function(e) {
    //     //select all list items
    //     var listItems = $(".nav-item");
    //     //remove active
    //     for (let i = 0; i < listItems.length; i++) {
    //         listItems[i].classList.remove("active");
    //     }
    //     this.classList.add("active");
    // });
});