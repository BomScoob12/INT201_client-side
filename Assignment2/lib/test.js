// const {Todo} = require('./Todo')
const {todoManagement} = require('./todoManagement')
// const testTodo = new Todo('test')
// console.log(testTodo)
// console.log(testTodo.getTodo())

const manageTodo = todoManagement()
console.log(manageTodo)

console.log('-------------')
console.log(manageTodo.addTodo('Blaaaaa'))
console.log(manageTodo.addTodo('Blaaaaa2'))
console.log(manageTodo.addTodo('Blaaaaa3'))
console.log(manageTodo.addTodo('Blaaaaa4'))

manageTodo.findTodo(2).setDone(true)

console.log(manageTodo.getTodos())
console.log(manageTodo.getNumberOfDone())
console.log(manageTodo.getNumberOfNotDone())
