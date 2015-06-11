$(".onclick").click(function(){
    var height = $(".cbp-hssubmenu").height();
    var minheight = 100;
    
    var move = height - minheight;
    
    console.log(move);
        $("#timerBox").css("padding-top", move);
        $("#timerBox").css("transition", "all 1s");
    });