let inpt = document.getElementById('Notes')
const btn = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')

btn.addEventListener('click', doThings)

function doThings(){
    const li = document.createElement('li')
    li.textContent = inpt.value 
    document.querySelector('ul').appendChild(li)
    inpt.value = ''
}