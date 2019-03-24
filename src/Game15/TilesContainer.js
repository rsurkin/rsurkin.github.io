import React from 'react'
import './style.css'

export default ({children:tiles}) => (
  <div className={`field`}>
    {tiles}
  </div>
)