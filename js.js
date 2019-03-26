$(document).ready(function(){
    $("p").click(function(){
        alert($(this).text());
    });

    $(".element").hide(1000, function () {
        alert("coucou");

    });

});

