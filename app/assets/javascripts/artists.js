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
    // TODO profile/artists gallery links?
  });
  newContent += `</ul>`
  $('#contentDiv').empty().append(newContent)
  addListenersToArtists()
}

function addListenersToArtists(){
  let allLinks = $('a[data-id]')
  allLinks.map((linkId) => {
    $(`a[data-id='${linkId + 1}']`).on('click', function(e) {
      e.preventDefault()
      loadArtist(linkId + 1)
    })
  })
}

function loadArtist(id) {
  $.get(`/artists/${id}`, displayArtist)
}

function displayArtist(artist) {
  newContent = `<h2>Pieces by artist ${artist.name}</h2>`
  if(artist.pieces.length === 0) {
    newContent += `<p>No pieces from this artist yet...</p>`
  } else {
      newContent += '<ul>'
    artist.pieces.forEach(function(piece){
      newContent += `<li><a class='btn btn-secondary' onclick='loadPiece(${piece.id})' href='#'>${piece.name}</a></li>`
    })
    newContent += '</ul>'
  }
  $('#contentDiv').empty().append(newContent)
}