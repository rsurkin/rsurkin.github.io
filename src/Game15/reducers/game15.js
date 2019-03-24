export default (game15 = {}, {type, id}) => {
  switch (type) {
    case 'MOVE_TILE':
      return moveTile(game15, id);
    case 'NEW_GAME':
      return createNewGame();
    case 'UNDO':
      return undo(game15);
    default:
      return game15;
  }
}

const undo = (game15) => {
  const { undoStack } = game15;
  if (!undoStack.length) {
    return game15;
  }

  const nextUndoStack = [
    ...undoStack,
  ];

  return {
    tiles: nextUndoStack.pop(),
    undoStack: nextUndoStack,
    undoAvailable: nextUndoStack.length > 0,
  }
};

const moveTile = (game15, id) => {
  const {tiles, undoStack} = game15;
  if (!moveAvailable(tiles, id)) {
    return game15;
  }

  const positionOfZero = tiles.indexOf(0);
  const positionOfElement = tiles.indexOf(id);

  const newTiles = [
    ...tiles
  ];

  newTiles[positionOfZero] = id;
  newTiles[positionOfElement] = 0;

  return {
    undoStack: [
      ...undoStack,
      tiles,
    ],
    undoAvailable: true,
    tiles: newTiles,
  };
};

const moveAvailable = (tiles, id) => {
  const positionOfZero = tiles.indexOf(0);
  const positionOfElement = tiles.indexOf(id);

  return (
    positionOfElement + 1 === positionOfZero
    || positionOfElement - 1 === positionOfZero
    || positionOfElement - 1 === positionOfZero
    || positionOfElement - 4 === positionOfZero
    || positionOfElement + 4 === positionOfZero
  )
};

const createNewGame = () => {
  const tiles = [
    ...Array(16).keys()
  ]
    .sort(() => Math.random() - 0.5)
    .sort((a, b) => b === 0 ? -1 : 0)
    ;

  return {
    undoStack: [],
    undoAvailable: false,
    tiles: tiles,
  }
};