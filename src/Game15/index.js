import React from 'react'
import TilesContainer from './TilesContainer'
import Tile from './Tile'

const tileIds = [...Array(16).keys()];
const onTileClick = (e) => {
  const id = +e.target.dataset.id

  // bla bla bla
}

export default () => {
  return (
    <TilesContainer>
      {tileIds.map(
        (id) => (<Tile
          key={id}
          label={id}
          id={id}
          onClick={onTileClick}
        />)
      )}
    </TilesContainer>
  )
}