$(document).ready(function(){
    $('i').hover(function() {
        $('.fa').css("color", "#fff");
        // event.preventDefault();
        
    })
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
    // $("i").css("border", "red solid 2px");
    // $('p').css("color","blue");
    // $('p').click(function() {
    //     $('div > dt > p').css('background-color', '#ff8030');
    // })
    
    // $("button").click(function() {
    //     $("p").show();
    // })
    // $("h4").hover(function() {
    //     $("h4").hide();
    // })
    // $("#myId").dblclick(function() {
    //     alert("nice one") 
    // })
    // $(".myClass").dblclick(function() {
    //     $("p").css("color", "blue")
    // })
    // $(".first").dblclick(function() {
    //     $("second").hide();
    // })
    // $('i').hover(function() {
    //     $('div').toggle(3000);
    // })
    // $('h2').hover(function() {
    //     $('.our-services-item').fadeIn(1000);
    //     $('.our-services-item').fadeIn(2000);
    //     $('.our-services-item').fadeIn(1000);
    //     $('.our-services-item').fadeIn(2000);
    // })
    
    // $("<p>").css("border", "solid 2px red");

});





