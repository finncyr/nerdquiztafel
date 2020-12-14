let round = 1;
var lastColor;
$(document).ready(function () {

    $('#myTable td').click(function () {
        if (jQuery(this).attr('clicked') === 'true') {
            $(this).css('background-color', lastColor);
            $(this).attr('clicked', 'false');
        } else {
           lastColor = $(this).css('background-color');
            $(this).css('background-color', 'gray');
            $(this).attr('clicked', 'true');
        }
    });

    $('.playername').editable();
    $('.score').editable();
    $('th').editable();

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

    $('#score-1-').click(function () {
        var a = parseInt($("#score-1").html());
        $("#score-1").html( (a - 100).toString() );
    });
    $('#score-1plus').click(function () {
        var b = parseInt($("#score-1").html());
        $("#score-1").html( (b + 100).toString() );
    });

    $('#score-2-').click(function () {
        var c = parseInt($("#score-2").html());
        $("#score-2").html( (c - 100).toString() );
    });
    $('#score-2plus').click(function () {
        var a = parseInt($("#score-2").html());
        $("#score-2").html( (a + 100).toString() );
    });

    $('#score-3-').click(function () {
        var a = parseInt($("#score-3").html());
        $("#score-3").html( (a - 100).toString() );
    });
    $('#score-3plus').click(function () {
        var a = parseInt($("#score-3").html());
        $("#score-3").html( (a + 100).toString() );
    });

    $('#score-4-').click(function () {
        var a = parseInt($("#score-4").html());
        $("#score-4").html( (a - 100).toString() );
    });
    $('#score-4plus').click(function () {
        var a = parseInt($("#score-4").html());
        $("#score-4").html( (a + 100).toString() );
    });
});


