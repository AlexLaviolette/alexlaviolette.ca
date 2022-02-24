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
});