// ******************  code to toggle navmenu ********************

const navMenu = document.getElementById("nav_menu"),
      navToggle = document.getElementById("nav_toggle"),
      navClose = document.getElementById("nav_close");

//   showing menu
if(navToggle) {
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show_menu');
    })
}

//   hiding menu 
if(navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show_menu');
    })
}

// fixing navbar
window.addEventListener('scroll', function() {
    let navWrapper = this.document.getElementById('nav_wrapper');
    navWrapper.classList.toggle('fixed', this.window.scrollY >100)
})

// hiding navbar on scroll down

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;

    // show nav when scrolled upward
    if(prevScrollpos > currentScrollpos) {
        document.getElementById('nav_wrapper').style.top = "0";
    }// hide nav when scrolled downward
    else {
        document.getElementById('nav_wrapper').style.top = "-100%";
    }
    prevScrollpos=currentScrollpos;
}


// Home Carousel
$('.home-carousel').owlCarousel({   //used to create responsive carousel sliders... its an enabled jquery plugin
    Loop:true,
    margin:0,
    dots:false,
    smartSpeed:700,
    autoplay:true,
    autoplayTimeout: 8000,
    responsive: {
        0: {
            items:1
        }
    }
})

// Custom carousel buttons
let wrapper = document.querySelectorAll(".wrapper");

wrapper.forEach(option => {
    option.addEventListener('click', function clickhandler(e) {
        // if button is clicked contacts 'carousel-next-btn' class
        if(e.target.classList.contains("carousel_next_btn")) {
            //gets data
            const target = e.target.getAttribute("data-target");
            var owl = $(target);
            owl.owlCarousel();

            //goto next item
            owl.trigger('next.owl.carousel');
        }
        else if(e.target.classList.contains("carousel_prev_btn")) {
            //gets data
            const target = e.target.getAttribute("data-target");
            var owl = $(target);
            owl.owlCarousel();

            //goto next item
            owl.trigger('prev.owl.carousel');
        }
        else {
            return
        }
    })
})


// Destination Carousel
$('.destination-carousel').owlCarousel({   //used to create responsive carousel sliders... its an enabled jquery plugin
    Loop:true,
    margin:35,
    dots:false,
    smartSpeed:700,
    // autoplay:true,
    // autoplayTimeout: 8000,
    responsive: {
        0: {
            items:1
        }
    }
})

// Destination Carousel
$('.tour-carousel').owlCarousel({   //used to create responsive carousel sliders... its an enabled jquery plugin
    Loop:true,
    margin:35,
    dots:false,
    smartSpeed:700,
    // autoplay:true,
    // autoplayTimeout: 8000,
    responsive: {
        0: {
            items:1
        }
    }
})