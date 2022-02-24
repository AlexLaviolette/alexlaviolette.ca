var i = 0;
var txt = 'Alex.Laviolette'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    $('.name').text($('.name').text() + txt.charAt(i));
    i++;
    setTimeout(typeWriter, speed);
  } else {
      $('.cursor').addClass('blink');
  }
}


$(document).ready(function() {
  typeWriter();

  $('h2').click(function() {
    var drawer = $(this).next('.drawer');
    // Don't reopen drawer if it is already open
    if (drawer.css("display") === undefined || drawer.css("display") === 'none') {
      $('.drawer').hide(200);
      drawer.show(200);
    }
  });
});