(function ($) {
    $(document).ready(function () {
        var dom = {
            $window: $(window),
            $body: $('body'),
            $pageWrapper: $('.page__wrapper'),
            $hamburger: $('.hamburger'),
            $offcanvas: $('.page__offcanvas'),
            $themeToggle: $('.theme-toggle')
        };

        (function init() {
            // Collapse Header on scroll
            headerCollapser();

            // Hamburger
            dom.$hamburger.click(function() {
                $(this).toggleClass('is-active');
                dom.$pageWrapper.toggleClass('offcanvas-open');
                dom.$body.toggleClass('no-overflow');
                
            });

            // Theme Toggle
            dom.$themeToggle.click(function() {
                dom.$body.toggleClass('theme--light theme--dark');
                if(dom.$body.hasClass('theme--light')) {
                    localStorage.setItem('theme', JSON.stringify({'mode':'theme--light'}));
                }
                if(dom.$body.hasClass('theme--dark')) {
                    localStorage.setItem('theme', JSON.stringify({'mode':'theme--dark'}));
                }
            });

            if(dom.$body.hasClass('single-portfolio')) {
                $('.article__featured-img').click(function() {
                    $(this).toggleClass('fullscreen');
                })
            }

            // Window Events
            dom.$window.scroll(function () {
                // On Scroll:
                headerCollapser();
            });
        })();

        function headerCollapser() {
            var className = 'head-collapsed',
                offset = 200;
            getBodyScrollTop() > offset ? dom.$pageWrapper.addClass(className) : dom.$pageWrapper.removeClass(className);
        }

        function getBodyScrollTop() {
            return (document.scrollingElement || document.documentElement).scrollTop;
        }


    });
}(jQuery));