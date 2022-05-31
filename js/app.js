let inpt = document.getElementById('Notes')
const btn = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')

btn.addEventListener('click', doThings)

function doThings(){
    let newItem = document.createElement('li')
    newItem = inpt.value
    document.querySelector('ul').appendChild(li)
}