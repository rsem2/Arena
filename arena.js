function selectArenaBox(){
    var startString = "<div id='arenaOptions' class='divDesign' data-selected='false'>"
    var arenaTitle = "<h1>Select Arena</h1>"
    var buttons = ["beach","dojo","earth","forest","matrix","snow"];

    startString +=arenaTitle;
    for(var i = 0; i < buttons.length; i++) {

        var buttonString = "<button data-imgsource='" + buttons[i] + ".jpg'>" + buttons[i] + "</button>";
        startString += buttonString;

    }

    startString += "</div>";
    return startString;
}

function selectPlayerBox(){
    var startString = "<div id='playerOptions' class='divDesign' data-selected='false'>"
    var playerTitle = "<h1>Select Player</h1>"
    startString +=playerTitle;

    var players = ['Select Ninja','donny','leo','mikey','raphael'];

    var buttonString = "<select name='player'>";

    

    for(var i = 0; i < players.length; i++) {

        buttonString += "<option value ='" + players[i] + ".png'>" + players[i] + "</option>";

    }
    buttonString+= "</select>";
    startString = startString + buttonString + buttonString;
    startString += "</div>";
    return startString;
}


$(document).ready(function(){
    var htmlString = "";
    var startString = "<div id='wrapper'>"
    htmlString+=startString;
    $("body").html(htmlString);
    htmlString+=selectArenaBox();
    htmlString+="</div>"
    $("body").html(htmlString);
    $("#arenaOptions button").click(function(){
        $("#arenaOptions").hide();
    })

})


$(document).on({
    mouseenter: function () {
        var imageString = 'url("'+$(this).data('imgsource')+'")'
        $(wrapper).css('background-image',imageString);
    },
    mouseleave: function () {
        console.log("mouse leave");

        if($('#arenaOptions').data('selected') == false) {
            $(wrapper).css('background','black');   
        };
    },
    click: function () {

        $('#arenaOptions').data('selected','true');        
        var playerBox = selectPlayerBox();
        $("#wrapper").html(playerBox);
    }

}, "#arenaOptions button");


$(document).on({
    change: function() {
        console.log("hello");
        console.log($(this)["0"]);
    }
}, "select");
