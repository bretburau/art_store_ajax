$(document).ready(function(){
  $('#categories-link').on('click', loadCategoires)
});

let newContent;

function loadCategoires(e){
  e.preventDefault()
  $.get('/categories', displayCategories)
}

function displayCategories(categories) {
  newContent = `<h2>Categories:</h2><ul>`
  categories.forEach((category) => {
    newContent += `<li><a href='/categories/${category.id}'>${category.name}</a></li>`
  });
  newContent += `</ul>`
  console.log(newContent)
  $('#contentDiv').empty().append(newContent)
}