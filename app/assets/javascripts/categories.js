$(document).ready(function(){
  $('#categories-link').on('click', loadCategoires)
});

function loadCategoires(){
  $.get('/categories', function(resp) {
    debugger;
  })
}