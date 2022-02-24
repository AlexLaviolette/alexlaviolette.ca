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

  $('.drawer-handle').click(function() {
    var drawer = $(this).next('.drawer');
    // Don't reopen drawer if it is already open
    if (drawer.css("display") === undefined || drawer.css("display") === 'none') {
      $(this).siblings('.drawer-handle').children('.plus').removeClass('rotate');
      $(this).siblings('.drawer').hide();
      $(this).find('.plus').addClass('rotate');
      drawer.show(200);
    } else {
      $(this).find('.plus').removeClass('rotate');
      drawer.hide(200);
    }
  });
});