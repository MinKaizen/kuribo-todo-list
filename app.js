// Adds a todo item to the list
function addTodoItem(description) {
    // Get the template element
    const todoListTemplate = document.querySelector('.todo-item-template')
    
    // Get the template contents
    const todoListTemplateContent = todoListTemplate.content

    // Copy template contents into a new variable
    const newTodoItem = todoListTemplateContent.cloneNode(true)

    const todoItemDescription = newTodoItem.querySelector('.todo-item-description')
    
    todoItemDescription.textContent = description
    // it's like saying todoItemDescription　の　textContent

    const todoList = document.querySelector('.todo-list')
    todoList.appendChild(newTodoItem)
}

function newTodoDescription() {
    const newTodoInput = document.querySelector('.add-item-input')
    return newTodoInput.value
}

// Get the "add button"
const addTodoButton = document.querySelector('.add-item-submit')

// When the "add" button is clicked, do this...
addTodoButton.addEventListener('click', function (event) {
    event.preventDefault()
    const newTodoItem = newTodoDescription()
    addTodoItem(newTodoItem)
})