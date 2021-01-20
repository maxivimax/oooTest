import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

function Item({ todo, index, onChange }) {
  const classes = []

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type='checkbox'
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong> |
        &nbsp;
        {todo.name}
          |  
        {todo.phone} 
      </span>

    </li>
  )
}

Item.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default Item
