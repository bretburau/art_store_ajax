  $(document).ready(function(){
    $('#categories-link').on('click', loadCategoires)
  });

let newContent; //Why is this here? TODO

function loadCategoires(e){
  e.preventDefault()
  $.get('/categories', displayCategories)
}

function displayCategories(categories) {
  newContent = `<h2>Categories:</h2><ul>`
  categories.forEach((category) => {
    newContent += `<li><a class='btn btn-secondary' data-id='${category.id}' href='#'>${category.name}</a></li>`
  });
  newContent += `</ul>`
  $('#contentDiv').empty().append(newContent)
  addListenersToCategories()
}

function addListenersToCategories(){
  let allLinks = $('a[data-id]')
  allLinks.map((linkId) => {
    $(`a[data-id='${linkId + 1}']`).on('click', function(e) {
      e.preventDefault()
      loadCategory(linkId + 1)
    })
  })
}

function loadCategory(id) {
  $.get(`/categories/${id}`, displayCategory)
}

function displayCategory(category) {
  newContent = `<h2>Pieces in category ${category.name}</h2>`
  if(category.pieces.length === 0) {
    newContent += `<p>No pieces in the category yet...</p>`
  } else {
      newContent += '<ul>'
    category.pieces.forEach(function(piece){
      newContent += `<li><a class='btn btn-secondary' onclick='loadPiece(${piece.id})' href='#'>${piece.name}</a></li>`
    })
    newContent += '</ul>'
  }
  $('#contentDiv').empty().append(newContent)
}

function loadPiece(id){
  $.get(`/pieces/${id}`, function(resp){
    alert('needs doing') 
  })
}

