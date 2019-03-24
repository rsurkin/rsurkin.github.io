import React from 'react'
import GameLayout from './GameLayout'
import Tile from './Tile'

const tileLabels = [...Array(16).keys()];

export default () => {
  return (
    <GameLayout>
      {tileLabels.map((label) => (<Tile label={label}/>))}
    </GameLayout>
  )
}