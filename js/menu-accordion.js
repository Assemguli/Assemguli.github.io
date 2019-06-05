$(document).ready(function () {
    var items = $('.menu__title');

    items.click(function (e) {
        e.preventDefault();
        var $this = $(this);
        
        var infoBlock = $this.siblings('.menu__body');
        var isToggled = infoBlock.hasClass('menu__body--active');

        if (isToggled) {
            infoBlock.removeClass('menu__body--active');
        } else {
            var menuList = $('.menu__list');
            var bodyActive = menuList.find('.menu__body--active');

            bodyActive.removeClass('menu__body--active');
            infoBlock.addClass('menu__body--active');
        }
    })
});