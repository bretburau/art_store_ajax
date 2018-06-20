$(document).ready(function(){
  $('#pieces-link').on('click', loadPieces)
  //TODO clicking home button on nav looses event binding
});

function loadPieces(e){
  e.preventDefault()
  $.get('/pieces', displayPieces)
}

function displayPieces(pieces){
  newContent = `<h2>All available art:</h2><ul>`
  pieces.forEach((piece) => {
    newContent += `<li><a class='btn btn-secondary piece' data-id='${piece.id}' href='#'>${piece.name}</a></li>`
  })
  newContent += '</ul>'
  $('#contentDiv').empty().append(newContent)
  addListenersToPieces()
}

function addListenersToPieces(){
  let allLinks = $('a[data-id]')
  for (i = 0; i < allLinks.length; ++i) {
    let linkId = allLinks[i].dataset.id
    $(`a[data-id='${linkId}']`).on('click', function(e) {
      e.preventDefault()
      loadPiece(linkId)
    })
  }
}

function loadPiece(id){
  $.get(`/pieces/${id}`, function(resp){
    newContent = `
    <div class='center'>
      <h2>${resp.name}</h2>
      <p>${resp.artist.name}</p>
      <img src='assets/placeholder.png' alt='${resp.name}' class='image-large'>
    </div>
    <h3>Categories:</h3>
    `
    resp.categories.forEach(addCategoryList)
    $('#contentDiv').empty().append(newContent)
  })
}

function addCategoryList() {
  debugger;
}