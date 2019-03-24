import React from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TilesContainer from './TilesContainer';
import Tile from './Tile';
import {
  moveTileAction,
  startNewGameAction,
  undoAction,
  redoAction,
  saveAction,
  restoreAction,
} from '../actions';

const GameView = (props) => {
  const {
    handleTileClick,
    tiles,
    startNewGame,
    handleStartNewGame,
    undoAvailable,
    handleUndo,
    redoAvailable,
    handleRedo,
    handleSave,
    restoreAvailable,
    handleRestore,
  } = props;

  if (!tiles.length) {
    startNewGame();
  }

  return (
    <div>
      <a href="#" className={`btn`} onClick={handleStartNewGame}>Start new game</a>

      <div className={`actionBtns`}>
        <a href="#" className={`btn`} onClick={handleUndo} disabled={!undoAvailable}>
          <FontAwesomeIcon icon="undo" />
        </a>
        <a href="#" className={`btn`} onClick={handleRedo} disabled={!redoAvailable}>
          <FontAwesomeIcon icon="redo" />
        </a>
        <a href="#" className={`btn`} onClick={handleSave}>
          <FontAwesomeIcon icon="save" />
        </a>
        <a href="#" className={`btn`} onClick={handleRestore} disabled={!restoreAvailable}>
          <FontAwesomeIcon icon="file-upload" />
        </a>
      </div>

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
  ({game15}) => {
    const {
      tiles = [],
      undoAvailable = false,
      redoAvailable = false,
      restoreAvailable = false,
    } = game15;

    return {
      tiles,
      undoAvailable,
      redoAvailable,
      restoreAvailable,
    }
  },
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
    handleRedo: (e) => {
      e.preventDefault();
      e.stopPropagation();

      dispatch(redoAction());
    },
    handleTileClick: (e) => {
      const id = +e.target.dataset.id;

      dispatch(
        moveTileAction(id)
      );
    },
    handleSave: (e) => {
      e.preventDefault();
      e.stopPropagation();

      dispatch(saveAction());
    },
    handleRestore: (e) => {
      e.preventDefault();
      e.stopPropagation();

      dispatch(restoreAction());
    },
  })
)(GameView);