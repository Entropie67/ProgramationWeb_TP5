$(document).ready(function(){
    $("p").click(function(){
        alert($(this).html());
    });
    $(".disparaitre").hide(1000,function () {
        $(".disparaitre").text("Le texte est modifié !!!");
    });

    $(".disparaitre").show(1000);
    /*
    $(".element").hide(1000, function () {
        alert("coucou");

    }); */

});

