var addItem = document.querySelector('.add-item');
var form = document.querySelector('form');
var nextButton = document.querySelector('input[type="submit"]');
var productForm = document.querySelectorAll('input[type="text"]');
var productLabel = document.querySelectorAll('label');

function newItem(){
  // var hr = document.createElement('hr');
  // form.appendChild(hr);

  let container = document.createElement('div');
  container.className = "container";
  for(var i =2; i < productForm.length; i++){

    var input = document.createElement('input');
    var label = document.createElement('label');
    var labelName = document.createTextNode(productLabel[i].innerText);
    input.type = productForm[i].type;
    input.name = productForm[i].name;
    label.appendChild(labelName);
    container.appendChild(label);
    container.appendChild(input);
  }
  form.appendChild(container);
   deleteButton();

}

function addButtons(){
  form.appendChild(addItem);
  form.appendChild(nextButton);
}

function removeButtons(){
  form.removeChild(addItem);
  form.removeChild(nextButton);
}

function deleteButton(){
  var button = document.createElement('a');
  text = document.createTextNode('delete');
  button.appendChild(text);
  button.href="#";
  button.className = 'delete-item';
  form.appendChild(button);
}
addItem.addEventListener('click', function(e){
    removeButtons();
    newItem();
    addButtons();

    var deleteButton = document.querySelector('.delete-item');
    let container = document.querySelector('.container');

    deleteButton.addEventListener('click', function(e){
      form.removeChild(deleteButton);
      form.removeChild(container);
    })

});
