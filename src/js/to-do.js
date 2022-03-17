function newItem() {
    var list = document.createElement('li');
    var listValue = document.getElementById('list-input').value;
    var text = document.createTextNode(listValue);

    list.append(text)
    if (listValue === '') {
        alert('Something needs to be written in the to-do list.')
    } else {
        document.getElementById('to-do-list').appendChild(list)
    }
    document.getElementById('list-input').value = '';

    var span = document.createElement('span');
    list.appendChild(span)
}