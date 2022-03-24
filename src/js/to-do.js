const input = document.getElementsByClassName('input-value')[0];
const addButton = document.getElementsByClassName('add-btn')[0];

addButton.addEventListener('click', () => {
    let items = JSON.parse(localStorage.getItem('item'));
    if (items === null) {
        itemList = [];
    } else {
        itemList = items;
    }
    itemList.push(input.value);
    localStorage.setItem('item', JSON.stringify(itemList));
    displayTodoList();
});

function displayTodoList() {

    let output = '';
    let showList = document.querySelector('.list-item');
    let items = JSON.parse(localStorage.getItem('item'));
    if (items === null) {
        itemList = [];
    } else {
        itemList = items;
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
    let items = JSON.parse(localStorage.getItem('item'));
    itemList.splice(index, 1);
    localStorage.setItem('item', JSON.stringify(itemList));
    displayTodoList();
}