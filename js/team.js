$(document).ready(function (){

    var items = $('.team__title');


    items.click(function (e) {
        e.preventDefault();

        var $this = $(this);

        // console.log(this);
        // console.log($this);

        var $parrent = $this.closest('.team__item');

        $parrent.toggleClass('team__item--active');
    })
});
