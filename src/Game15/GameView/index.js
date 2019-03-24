import React from 'react';
import {connect} from 'react-redux';
import TilesContainer from './TilesContainer';
import Tile from './Tile';
import {
  moveTileAction,
  startNewGameAction,
  undoAction,
} from '../actions';

const GameView = ({ handleTileClick, tiles, handleStartNewGame }) => {
  console.log('aaa', tiles);
  if (!tiles.length) {
    handleStartNewGame();
  }

  return (
    <TilesContainer>
      {tiles.map(
        (id) => (<Tile
          key={id}
          label={id}
          id={id}
          onClick={handleTileClick}
        />)
      )}
    </TilesContainer>
  )
}

export default connect(
  ({tiles = []}) => ({tiles}),
  (dispatch) => ({
    handleStartNewGame: () => {
      dispatch(startNewGameAction());
    },
    handleUndo: () => {
      dispatch(undoAction());
    },
    handleTileClick: (e) => {
      const id = +e.target.dataset.id;

      dispatch(
        moveTileAction(id)
      );
    }
  })
)(GameView);