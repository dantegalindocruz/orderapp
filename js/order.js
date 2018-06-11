var addItem = document.querySelector('.add-item');
var form = document.querySelector('form');
var nextButton = document.querySelector('input[type="submit"]');
var productForm = document.querySelectorAll('input[type="text"]');
var productLabel = document.querySelectorAll('label');

function newItem(){
  var container = document.createElement('div');
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
  container.appendChild(deleteButton());
  form.appendChild(container);


}

function minimize(){
  var collapse = document.createElement('a');
  var collapseText = document.createTextNode('minimize');
  collapse.appendChild(collapseText);
  return collapse;
}

function maximize(){
  var expand = document.createElement('a');
  var expandText = document.createTextNode('maximize');
  expand.appendChild(expandText);
  return collapse;
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
  return button;

}

function removeItem(container){
  if(container.parentNode === form){
  form.removeChild(container);
  }
}
addItem.addEventListener('click', function(e){
    removeButtons();
    newItem();
    addButtons();

    let deletButtons = [];  // var hr = document.createElement('hr');
  // form.appendChild(hr);
  // form.appendChild(hr);
    let dButton = document.querySelectorAll('.delete-item')

    for (var i=0; i < dButton.length; i++){
      deletButtons[i] = dButton[i];
    }

    for(var j = 0; j < deletButtons.length; j++){
      deletButtons[j].addEventListener('click', function(e){
        removeItem(e.target.parentNode);
      });
    }

});
