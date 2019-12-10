import React from "react"
import propTypes from 'prop-types'
import "./index.sass"

function LabelComponent(props) {
  return (
    <label className=''>
      {props.children}
    </label >
  )
}

LabelComponent.propTypes = {
  children: propTypes.string
}

export default LabelComponent;