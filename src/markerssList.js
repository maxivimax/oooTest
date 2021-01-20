import React from 'react'
import PropTypes from 'prop-types'
import Markerss from './markerss'

function MarkerssList(props) {
  return (
    <div>
      {props.todos.map((todo, index) => {
        return (
          
            <Markerss a={todo.address.geo.lat} b={todo.address.geo.lng} c={todo.name} />
          
        )
      })}
    </div>
  )
}

export default MarkerssList
