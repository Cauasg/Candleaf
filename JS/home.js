$(function(){
    $(".menu").click(function(){
        $(this).toggleClass("active");
    });
    $(".see-more").click(function(){
        $(".more").show();
        $(this).hide();
    });
});