$(document).ready(function(){
  $('#categories-link').on('click', loadCategoires)
  // $('.category-link').on('click', loadCategory)
});

let newContent; //Why is this here? TODO

function loadCategoires(e){
  e.preventDefault()
  $.get('/categories', displayCategories)
}

function displayCategories(categories) {
  newContent = `<h2>Categories:</h2><ul>`
  categories.forEach((category) => {
    newContent += `<li><a href='#' onclick=loadCategory(${category.id})>${category.name}</a></li>`
  });
  newContent += `</ul>`
  $('#contentDiv').empty().append(newContent)
}

function loadCategory(id) {
  $.get(`/categories/${id}`, displayCategory)
}

function displayCategory(category) {
  newContent = `<h2>Pieces in category ${category.name}</h2>`
  debugger;
}
