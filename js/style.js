$(document).ready(function () {
    var item_hats = $('.nav-shops .nav-item-hats');
    var nav_shop = $('.nav-shops');
    var item_active = $('.nav-shops .active');

    // item_hats.click(function () {
    //     $(this).css('color','white');
    // }).blur(function () {
    //     $(this).css('color', 'rgb(0, 0, 0)')
    // });

    nav_shop.each(function () {
        var item_1 = $(this).find('.nav-item-hats').eq(0);
        var item_2 = $(this).find('.nav-item-hats').eq(1);
        var item_3 = $(this).find('.nav-item-hats').eq(2);

        item_1.click(function () {
            $(this).css({ 'background': 'linear-gradient(to bottom, rgb(0, 0, 255),rgb(255, 242, 242))', 'color': 'white' });
            item_2.css({ 'background': 'none', 'color': 'rgb(0, 0, 0)' });
            item_3.css({ 'background': 'none', 'color': 'rgb(0, 0, 0)' });
        });

        item_2.click(function () {
            $(this).css({ 'background': 'linear-gradient(to bottom, rgb(0, 0, 0),rgb(255, 242, 242))', 'color': 'white' });
            item_1.css({ 'background': 'none', 'color': 'rgb(0, 0, 0)' });
            item_3.css({ 'background': 'none', 'color': 'rgb(0, 0, 0)' });
        });

        item_3.click(function () {
            $(this).css({ 'background': 'linear-gradient(to bottom,rgb(247, 14, 247),rgb(255, 242, 242))', 'color': 'white' });
            item_1.css({ 'background': 'none', 'color': 'rgb(0, 0, 0)' });
            item_2.css({ 'background': 'none', 'color': 'rgb(0, 0, 0)' });
        });
    });
    // value name product
    // var valName = $(".infor-product .name-pro").text();
    // var ProImg = $('.product-img > a');
    // element need add attribute
    // var ElementImg = $(".product-img a");

    // $(".product-img a").attr('title', valName)

    $('[data-toggle="tooltip"]').tooltip();

});