$(document).ready(function(){
  $('#artists-link').on('click', loadArtists)
});

// let newContent; //Why is this here? TODO

function loadArtists(e){
  e.preventDefault()
  $.get('/artists', displayArtists)
}

function displayArtists(artists) {
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
      newContent += `<li><a class='btn btn-secondary' data-id='${piece.id}' onclick='loadPiece(${piece.id})' href='#'>${piece.name}</a></li>`
    })
    newContent += `</ul><h2>Categories ${artist.name} is tagged in</h2><ul>`
    let uniqCategories = new Set(artist.categories.map(e => JSON.stringify(e))); // Removes duplicates from category array
    var res = Array.from(uniqCategories).map(e => JSON.parse(e)); // Turns de-duped set to array
    res.forEach(function(category){
      newContent += `<li>${category.name}</li>`
    })
    newContent += `</ul>`
  }
  debugger;
  $('#contentDiv').empty().append(newContent)
  addListenersToPieces();
}

// function uniqueArray(arrArg){
//   return arrArg.filter((elem, pos, arr) => {
//     return arr.indexOf(elem) == pos;
//   });
// }