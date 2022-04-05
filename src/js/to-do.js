/*
const input = document.getElementsByClassName('input-value')[0];
const description = document.getElementsByClassName('desc-value')[0];
const addButton = document.getElementsByClassName('add-btn')[0];

addButton.addEventListener('click', () => {
    let title = JSON.parse(localStorage.getItem('title'));
    let desc = JSON.parse(localStorage.getItem('description'));
    let date = JSON.parse(localStorage.getItem())
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
    let desc = JSON.parse(localStorage.getItem('description'));
    itemList.splice(index, 1);
    localStorage.setItem('title', JSON.stringify(itemList));
    localStorage.setItem('description', JSON.stringify(itemList));
    displayTodoList();
}
*/

/*

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
    
    items.push(convertedJSON);


    const formElement = document.forms['add'];
    const json = formDataToJSON(formElement);
    console.log(json);
    
});
*/
import ExternalServices from "./externalServices";

const services = new ExternalServices();

let items = [];
const addItem = async (e) => {
    e.preventDefault();
    let item = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        tododate: document.getElementById('tododate').value
    }

    console.log(item)

    items.push(item);
    document.forms[0].reset();
    let pre = document.querySelector('.todo-list');
    pre.textContent = '\n' + JSON.stringify(items, '\t', 2);
    localStorage.setItem('Items', JSON.stringify(items));

    const res = await services.addToDo(item);
    console.log(res)

    
}

document.querySelector('#add-btn').addEventListener('click', addItem);

/*
function addItem() {
    var list = document.createElement('li');
    var input = document.getElementById('title').value;
    var text = document.createTextNode(input);

    list.append(text);
    if (input === '') {
        alert('Please make sure to fill out all of the fields.')
    } else {
        document.getElementById('todo-list').appendChild(list);
    }
    document.getElementById('title').value = '';

    var span = document.createElement('span');
    var t = document.createTextNode('\u00D7');
    span.appendChild(t);
    list.appendChild(span);
}

function addItem() {
    var list = document.createElement('li');
    var input = document.getElementById('input').value;
    var text = document.createTextNode(input);
    list.appendChild(text);
    if (input === '') {
        alert('The field was left empty.');
    } else {
        document.getElementById('todo-list').appendChild(list);
    } 
    document.getElementById('input').value = '';

    var span = document.createElement('span');
    var t = document.createTextNode('');
    span.appendChild(t);
    list.appendChild(span)
}
*/