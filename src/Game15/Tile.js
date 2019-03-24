import React from 'react'
import './style.css'

export default ({label}) => (
  <div className={`tile`}>
    {label === 0 ? ` ` : label}
  </div>
)