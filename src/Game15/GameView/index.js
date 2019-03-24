import React from 'react';
import {connect} from 'react-redux';
import TilesContainer from './TilesContainer';
import Tile from './Tile';
import {
  moveTileAction,
  startNewGameAction,
  undoAction,
} from '../actions';

const GameView = (props) => {
  const {
    handleTileClick,
    tiles,
    startNewGame,
    handleStartNewGame,
    handleUndo
  } = props;

  if (!tiles.length) {
    startNewGame();
  }

  return (
    <div>
      <a href="#" className={`btn`} onClick={handleStartNewGame}>Start new game</a>
      <a href="#" className={`btn`} onClick={handleUndo} disabled="true">undo</a>

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
    </div>
  )
}

export default connect(
  ({tiles = []}) => ({tiles}),
  (dispatch) => ({
    startNewGame: () => {
      dispatch(startNewGameAction());
    },
    handleStartNewGame: (e) => {
      e.preventDefault();
      e.stopPropagation();

      dispatch(startNewGameAction());
    },
    handleUndo: (e) => {
      e.preventDefault();
      e.stopPropagation();

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