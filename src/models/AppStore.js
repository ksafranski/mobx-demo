import { observable, action } from 'mobx'
import Todo from './Todo'

export default class AppStore {
  @observable todos = [ new Todo({ title: 'foo' }), new Todo({ title: 'bar' }) ]

  @action
  addTodo = (title = 'New Todo') => {
    this.todos.push(new Todo({ title, edit: true }))
  }
}