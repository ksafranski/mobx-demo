import DataModel from './DataModel'
import { observable, computed, action } from 'mobx'
import moment from 'moment'

export default class Todo extends DataModel {
  constructor (todo = {}) {
    super()
    this.initData(todo)
  }

  // PROPERTIES

  @observable title
  @observable completed = false
  @observable edit = false

  // COMPUTEDS

  @computed get completedTime () {
    return this.completed ? moment(this.completed).format('lll') : false
  }

  // ACTIONS

  @action editTitle = (e) => {
    this.title = e.target.value
  }

  @action toggleEdit = () => {
    this.edit = !this.edit
  }

  @action toggleCompleted = () => {
    this.completed = this.completed ? false : Date.now()
  }
  
  @action completeTodo = () => {
    this.completed = this.completed || Date.now()
  }

  @action uncompleteTodo = () => {
    this.completed = false
  }
}