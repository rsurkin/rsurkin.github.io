export default (game15 = {}, {type, id}) => {
  switch (type) {
    case 'MOVE_TILE':
      return moveTile(game15, id);
    case 'NEW_GAME':
      return createNewGame();
    case 'UNDO':
      return undo(game15, false);
    case 'REDO':
      return undo(game15, true);
    default:
      return game15;
  }
}

const undo = (game15, redo) => {
  const { undoStack, stackPointer } = game15;
  if (!undoStack.length) {
    return game15;
  }

  const direction = redo ? +1 : -1;
  const nextStackPointer = stackPointer + direction;

  console.log(
    direction,
    nextStackPointer,
    undoStack[nextStackPointer],
    undoStack,
  )

  const tiles = [
    ...undoStack[nextStackPointer]
  ];

  return {
    tiles: tiles,
    undoStack: [...undoStack],
    stackPointer: nextStackPointer,
    undoAvailable: nextStackPointer > 0,
    redoAvailable: nextStackPointer < undoStack.length - 1,
  }
};

const moveTile = (game15, id) => {
  const {
    tiles,
    undoStack,
    stackPointer,
  } = game15;
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

  const nextUndoStack = [
    ...undoStack.slice(0, stackPointer + 1),
    newTiles,
  ];

  return {
    undoStack: nextUndoStack,
    undoAvailable: true,
    redoAvailable: false,
    stackPointer: nextUndoStack.length - 1,
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
    undoStack: [
      tiles
    ],
    undoAvailable: false,
    redoAvailable: false,
    stackPointer: 0,
    tiles: tiles,
  }
};