import React from 'react'
import './style.css'

export default ({label, id, onClick}) => (
  <div className={`tile`} onClick={onClick} data-id={id}>
    {label === 0 ? ` ` : label}
  </div>
)