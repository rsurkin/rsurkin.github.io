export const startNewGameAction = () => ({
  type: 'NEW_GAME',
});

export const undoAction = () => ({
  type: 'UNDO',
});

export const moveTileAction = (id) => ({
  type: 'MOVE_TILE',
  id: id,
});