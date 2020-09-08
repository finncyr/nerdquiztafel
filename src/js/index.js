$(document).ready(function () {

    $('td').click(function () {
        if (jQuery(this).attr('clicked') === 'true') {
            $(this).css('background-color', 'white');
            $(this).attr('clicked', 'false');

        } else {
            $(this).css('background-color', 'gray');
            $(this).attr('clicked', 'true');

        }

    });

    $("#doubler").click(function () {
        $("#myTable").find('td').each(function () {
            var a = parseInt($(this).html());
            $(this).html(a * 2);
        });
    });

});
