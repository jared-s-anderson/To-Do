/*
const input = document.getElementsByClassName('input-value')[0];
const description = document.getElementsByClassName('desc-value')[0];
const addButton = document.getElementsByClassName('add-btn')[0];

addButton.addEventListener('click', () => {
    let title = JSON.parse(localStorage.getItem('title'));
    let desc = JSON.parse(localStorage.getItem('description'));
    if (title && description === null) {
        itemList = [];
    } else {
        itemList = title;
    }
    itemList.push(input.value, description.value);
    localStorage.setItem('title', JSON.stringify(itemList), );
    localStorage.setItem('description', JSON.stringify(itemList));
    displayTodoList();
});

function displayTodoList() {

    let output = '';
    let showList = document.querySelector('.list-item');
    let title = JSON.parse(localStorage.getItem('title'));
    let desc = JSON.parse(localStorage.getItem('description'));
    if (title && description === null) {
        itemList = [];
    } else {
        itemList = title;
    }
    
    itemList.forEach((element, index) => {
        output += `
        <div class="todo-list">
        <p class="items">- ${element}</p>
        <button class="delete-item" onClick="deleteItem(${index})">X</button>
        </div>
        `
    })
    showList.innerHTML = output;
}
displayTodoList();

function deleteItem(index) {
    let title = JSON.parse(localStorage.getItem('title'));
    let desc = JSON.parse(localStorage.getItem('description');)
    itemList.splice(index, 1);
    localStorage.setItem('title', JSON.stringify(itemList));
    localStorage.setItem('description', JSON.stringify(itemList));
    displayTodoList();
}
*/

function formDataToJSON(element) {
    const formData = new FormData(element),
    convertedJSON = {};

    formData.forEach(function (value, key) {
        convertedJSON[key] = value;
    });

    return convertedJSON;
}

document.querySelector('#add-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const formElement = document.forms['add'];
    const json = formDataToJSON(formElement);
    json.date = new Date();
    console.log(json);

});