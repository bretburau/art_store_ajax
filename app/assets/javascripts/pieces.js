$(document).ready(function(){
  $('#pieces-link').on('click', loadPieces)
});

function loadPieces(e){
  e.preventDefault()
  $.get('/pieces', displayPieces)
}

function displayPieces(pieces){
  newContent = `<h2>All available art:</h2><ul>`
  pieces.forEach((piece) => {
    newContent += `<li><a class='btn btn-secondary' data-id='${piece.id}' href='#'>${piece.name}</a></li>`
  })
  newContent += '</ul>'
}