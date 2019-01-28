import React from 'react'
import { observer } from 'mobx-react'
import TodoItem from '../TodoItem/TodoItem'
import { Panel, Button } from 'react-bootstrap'

const styles = {
  listContainer: {
    maxWidth: '500px',
    margin: '2em auto'
  },
  listPanel: {
    borderBottom: '1px solid #dedede',
    paddingBottom: '0'
  },
}

@observer
export default class TodoList extends React.Component {
  render () {
    const { store } = this.props
    return (
      <Panel style={styles.listContainer}>
        <Panel.Heading>
          <Panel.Title componentClass="h3">
            Todo List
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body style={styles.listPanel}>
          {store.todos.length === 0 && (
            <em>No Todos</em>
          )}
          {store.todos.length > 0 && store.todos.map((todo, idx) => (
            <TodoItem key={idx++} todo={todo} />
          ))}
        </Panel.Body>
        <Panel.Body>
          <Button  bsSize='small' onClick={() => store.addTodo()}>New Todo</Button>
        </Panel.Body>
      </Panel>
    )
  }
}