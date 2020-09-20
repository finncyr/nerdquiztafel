let round = 1;
var lastColor;
$(document).ready(function() {
  $('#myTable td').click(function() {
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

  // doubler click function
  $("#doubler").click(function() {
    $("#myTable").find('td').each(function() {
      var a = parseInt($(this).html());
      $(this).html(a * 2);
    });
    round = round + 1;
    const roundtemp = round + 1;
    document.getElementById("doubler").innerHTML = "Runde " + roundtemp;
  });

  $("#divider").click(function() {
    if (round > 1) {
      $("#myTable").find('td').each(function() {
        var a = parseInt($(this).html());
        $(this).html(a / 2);
      });
      const roundtemp = round;
      round = round - 1;
      document.getElementById("doubler").innerHTML = "Runde " + roundtemp;
    }
  });
});
