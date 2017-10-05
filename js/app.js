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
        if($(this).find('p').hasClass('selected')){
            $(this).find(".check").attr('checked', true);
        }else {
            $(this).find(".check").attr('checked', false);
        }
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

    $('#remove-items').on('click', function(event){
       $(ul).find('.check:checked').parent().fadeOut(300, function(){
           $(this).remove();
       });
    });

    $('#input-elements').find('input[type=text]').on('keypress', function(event){
        if(event.which == 13) {
            addItem($(this).val());
            $(this).val("");
        }
    });

    function addItem(data) {
        var text = '<li><span><i class="fa fa-trash" aria-hidden="true"></i></span>';
        text += '<p>' + data + '</p>';
        text += '<input type="checkbox" class="check"></li>';

        $(ul).append(text);
    }
});