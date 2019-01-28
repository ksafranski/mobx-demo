import React from 'react'
import AppStore from '../../models/AppStore'
import TodoList from '../TodoList/TodoList'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.store = new AppStore()
  }

  render () {
    return (
      <TodoList store={this.store} />
    )
  }
}