(function($) {
    $(document).ready(function(){
        var dom = {
            $window: $(window),
            $body: $('body'),
            $siteContainer: $('.site-container'),
            $themeToggle: $('.theme-toggle__button'),
            $offcanvasToggle: $('.offcanvas-toggle'),
        };

        (function init() {
            // Collapse Header
            headerCollapser();
            dom.$window.scroll(function() {
                headerCollapser();
            });
            
            // Toggle theme
            dom.$themeToggle.click(function() {
                dom.$body.toggleClass('theme--light theme--dark');
                if(dom.$body.hasClass('theme--light')) {
                    localStorage.setItem('theme', JSON.stringify({'mode':'theme--light'}));
                }
                if(dom.$body.hasClass('theme--dark')) {
                    localStorage.setItem('theme', JSON.stringify({'mode':'theme--dark'}));
                }
            });

            // Toggle Offcanvas
            dom.$offcanvasToggle.click(function() {
                $(this).toggleClass('is-active');
                dom.$body.toggleClass('no-scroll');
                dom.$siteContainer.toggleClass('offcanvas-is-open');
            });


        })();

        function headerCollapser() {
            if (getBodyScrollTop() > 200) {
                dom.$siteContainer.addClass('header-is-collapsed');
            } else {
                dom.$siteContainer.removeClass('header-is-collapsed');
            }
        }

        function getBodyScrollTop () { 
            var el = document.scrollingElement || document.documentElement;
            return el.scrollTop; 
        }
    });
}(jQuery));