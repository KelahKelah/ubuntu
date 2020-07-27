$(document).ready(function(){

    $('i').hover(high, high) 
        $('.fa, #date').css("color", "#fff");
        // event.preventDefault();
    
    function high() {
        $('i').toggleClass('high')
    }

    $('body').click(function() {
        $('.wrappy').hide()
    }
    )
    // $("div p i").click(function() {
    //     $("p i").removeClass("active")
    //     $("this").addClass("active")
    // })
    // var myChange = $("<p>");
    // myChange.append('<h1>No longer emphasis tag</h1>');
    // $('.theP').html(myChange);

    // var myId = $('<p>')
    $('.myP').prepend('Prepended yhe isjdiplkmsdirj')
    // myId.append('<h1>No longer emphasis tag</h1>');

    $('div li').click(function(){
        $('li').removeClass("active");
        $(this).addClass("active");
    });
     
});





