import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
let g
let bodyy 

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

function fetch1h(id, zipcode){
  bodyy = "[{'id': " + id + " 'zipcode': " + zipcode + "}]"
    g = fetch('https://httpbin.org/post',{
     method: 'POST',
     body: {
      'id': id,
      'zipcode': 'application/json'
    },
     headers: {
     'Authorization': 'very_secret_token',
     'Content-Type': 'application/json'
    }
   })
    .catch(error => {
    alert(error); // Error: Not Found
  });
     console.log(g);

     
}

function Item({ todo, index, onChange }) {
  const classes = []

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>  
        <button onClick={() => fetch1h(index + 1, todo.address.zipcode)} style={styles.butt} >
          📤
        </button>
          
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
