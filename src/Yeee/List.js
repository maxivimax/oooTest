import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

function List(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <Item
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          />
        )
      })}
    </ul>
  )
}

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default List
