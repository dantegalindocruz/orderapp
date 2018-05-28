var addItem = document.querySelector('.add-item');
var form = document.querySelector('form');
var nextButton = document.querySelector('input[type="submit"]');
var productForm = document.querySelectorAll('input[type="text"]');
var productLabel = document.querySelectorAll('label');

addItem.addEventListener('click', function(e){
    nextButton.style.display= "none";
    addItem.style.display="none";
    form.innerHTML +=`
    <label>Product Name</label>
    <input type="text" name="product-name">
    <label>Quantity</label>
    <input type="text" name="quantity">
    <label>link</label>
    <input type="text" name="link">
    <a href="#"><label class="add-item">Add item +</label></a>
    <input type="submit" value="Next">
    `

})
