import React from 'react'
import { observer } from 'mobx-react'
import { Panel, Checkbox, FormControl } from 'react-bootstrap'

const styles = {
  title: {
    border: '1px solid #f1f1f1',
    padding: '.5em .8em',
    cursor: 'pointer',
    borderRadius: '.4em'
  },
  titleCompleted: {
    color: '#999',
    backgroundColor: '#fbfbfb',
    textDecoration: 'line-through'
  },
  checkbox: {
    marginBottom: '0',
    marginLeft: '.9em'
  }
}

@observer
export default class TodoItem extends React.Component {
  render () {
    const { todo } = this.props 
    return (
      <Panel>
        <Panel.Body>
          {todo.edit && (
            <FormControl
              autoFocus
              onFocus={e => e.target.select()}
              type="text"
              value={todo.title}
              onChange={todo.editTitle}
              onBlur={todo.toggleEdit}
            />
          )}
          {!todo.edit && (
            <div 
              style={todo.completed ? Object.assign({}, styles.title, styles.titleCompleted) : styles.title} 
              onClick={todo.toggleEdit}
            >
              {todo.title}
            </div>
          )}
          <Checkbox
            style={styles.checkbox}
            checked={Boolean(todo.completed)}
            onChange={todo.toggleCompleted}
          >
            Completed {todo.completed && (todo.completedTime)}
          </Checkbox>
        </Panel.Body>
      </Panel>
    )
  }
}