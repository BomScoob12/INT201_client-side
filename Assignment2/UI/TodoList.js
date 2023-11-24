//handle UI
const listTodoElement = document.getElementById('listTodo')
const summaryTodo = document.getElementById('summaryTodo')

function showTodoItem(newId, newDesc) {
  const newListDiv = document.createElement('div')
  newListDiv.setAttribute('class', 'todoItem')
  newListDiv.setAttribute('id', newId)
  newListDiv.innerHTML = `<p>${newDesc}</p>`
  const btn1 = document.createElement('button')
  const btn2 = document.createElement('button')
  btn1.innerText = 'Not Done'
  btn2.innerText = 'remove'
  btn1.setAttribute('onclick', 'setTaskDone()')
  btn2.setAttribute('onclick', 'deleteTaskList()')
  newListDiv.append(btn1)
  newListDiv.append(btn2)
  listTodoElement.appendChild(newListDiv)
}

function showNumberOfDone(numberOfDone) {
    const doneMessage = summaryTodo.querySelector('#done')
    doneMessage.innerHTML = `Number of done : ${numberOfDone}`
}

function showNumberOfNotDone(numberOfNotDone) {
    const notDoneMessage = summaryTodo.querySelector('#notDone')
    notDoneMessage.innerHTML = `Number of not done : ${numberOfNotDone}`
}

export {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone
}

