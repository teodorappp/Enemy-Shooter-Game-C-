
    $(document).ready(function () {
        // Smooth scrolling for anchor links
        $('a[href^="#"]').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000); // Adjust the animation speed here (in milliseconds)
            }
        });
    });

