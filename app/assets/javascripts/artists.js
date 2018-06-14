$(document).ready(function(){
  $('#artists-link').on('click', loadArtists)
});

// let newContent; //Why is this here? TODO

function loadArtists(e){
  e.preventDefault()
  $.get('/artists', displayArtists)
}

function displayArtists(artists) {
  console.log(artists)
  newContent = `<h2>Artists:</h2><ul>`
  artists.forEach((artist) => {
    newContent += `<li><a class='btn btn-secondary' data-id='${artist.id}' href='#'>${artist.name}</a></li>`
  });
  newContent += `</ul>`
  $('#contentDiv').empty().append(newContent)
  // addListenersToArtists()
}
