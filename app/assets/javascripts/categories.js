$(document).ready(function(){
  $('#categories-link').on('click', loadCategoires)
});

let newContent;

function loadCategoires(e){
  e.preventDefault()
  $.get('/categories', displayCategories)
}

function displayCategories(categories) {
  newContent = `<ul>`
  categories.forEach((category) => {
    newContent += `<li>${category.name}</li>`
  });
  newContent += `</ul>`
  console.log(newContent)
  $('#contentDiv').empty().append(newContent)
}