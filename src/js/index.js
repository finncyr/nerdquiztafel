let round = 1;
$(document).ready(function () {

    $('td').click(function () {
        if (jQuery(this).attr('clicked') === 'true') {
            $(this).css('background-color', 'transparent');
            $(this).attr('clicked', 'false');
        } else {
            $(this).css('background-color', 'gray');
            $(this).attr('clicked', 'true');
        }
    });

    // Hintergrundfarbe ändert sich bei bestimmten Keypress (Pfeiltasten links, oben, rechts)
    body.onkeydown = checkKey;

    function checkKey(e) {
        e = e || window.event;

        // Y
        if (e.keyCode == 89) {
            document.getElementById('body').className = "show";
            var myVar =  setInterval(function(){  document.getElementById('body').className = ""; clearInterval(myVar);}, 500);
            setTimeout(function(){ alert("Orange hat gedrückt!"); }, 400);
        }

        // X
        else if (e.keyCode == 88) {
            document.getElementById('body').className = "show2";
            var myVar =  setInterval(function(){  document.getElementById('body').className = ""; clearInterval(myVar);}, 500);
            setTimeout(function(){ alert("Blau hat gedrückt!"); }, 400);
        }

        // C
        else if (e.keyCode == 67) {
        document.getElementById('body').className = "show3";
        var myVar =  setInterval(function(){  document.getElementById('body').className = ""; clearInterval(myVar);}, 500);
        setTimeout(function(){ alert("Grün hat gedrückt!"); }, 400);
        }
    }

    //doubler click function
    $("#doubler").click(function () {
        $("#myTable").find('td').each(function () {
            var a = parseInt($(this).html());
            $(this).html(a * 2);
        });
        round = round + 1;
        const roundtemp = round + 1;
        document.getElementById("doubler").innerHTML = "Runde " + roundtemp;
    });

    $("#divider").click(function () {
        if (round > 1) {
            $("#myTable").find('td').each(function () {
                var a = parseInt($(this).html());
                $(this).html(a / 2);
            });
            const roundtemp = round;
            round = round - 1;
            document.getElementById("doubler").innerHTML = "Runde " + roundtemp;
        }
    });
});


