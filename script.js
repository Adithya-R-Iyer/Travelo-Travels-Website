// Home Carousel

$('.home-carousel').owlCarousel({   //used to create responsive carousel sliders... its an enables jquery plugin
    Loop:true,
    margin:0,
    dots:false,
    smartSpeed:700,
    responsive: {
        0: {
            items:1
        }
    }
})

// Custom carousel buttons
let wrapper = document.querySelectorAll(".wrapper");

wrapper.forEach(option => {
    option.addEventListener("click", function clickhandler(e) {
        // if button is clicked contacts 'carousel-next-btn' class
        console.log("running 0");
        if(e.target.classList.contains("carousel_next_btn")) {
            //gets data
            console.log("running");
            const target = e.target.getAttribute("data-target");
            var owl = $(target);
            console.log(owl);
            owl.owlCarousel()

            //goto next item
            owl.trigger('next.owl.carousel');
        }
        else {
            console.log("Entered else");
            return
        }
    })
})