(function($) {
    $(document).ready(function(){
        var dom = {
            $window: $(window),
            $body: $('body'),
        };

        (function init() {
            dom.$window.scroll(function() {
                if (getBodyScrollTop() > 200) {
                    dom.$body.addClass('header-is-collapsed');
                } else {
                    dom.$body.removeClass('header-is-collapsed');
                }
            });
        })();

        function getBodyScrollTop () { 
            var el = document.scrollingElement || document.documentElement;
            return el.scrollTop; 
        }
    });
}(jQuery));