$(function(){
    var ul = $('#todos');

    $(ul).find('span').hide();
    $(ul).find('.check').hide();
    $('#input-elements').hide();
    $(ul).on('click', 'span', function(event){
        event.stopPropagation();
        $(this).parent().fadeOut(500, function(){
            $(this).remove();

            if($(ul).find('li').length === 0) {
                $("#empty-list").fadeIn();
            }
        });
    });

    $(ul).on('click', 'li', function(event){
        event.stopPropagation();
        $(this).find('p').toggleClass("selected");
    }).on('mouseenter', 'li', function(){
        $(this).find('span').fadeIn(300);
        $(this).find('.check').fadeIn(300);
    }).on('mouseleave', 'li', function(){
        $(this).find('span').fadeOut(300);
        $(this).find('.check').fadeOut(300);
    });

    $('#add-item').on('click', function(){
        $("#input-elements").slideToggle();
    });
});