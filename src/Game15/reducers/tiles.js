const createNewGame = () => {
  return [
    ...Array(16).keys()
  ]
    .sort(() => Math.random() - 0.5)
    .sort((a, b) => b === 0 ? -1 : 0)
  ;
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

const moveTile = (tiles, id) => {
  const positionOfZero = tiles.indexOf(0);
  const positionOfElement = tiles.indexOf(id);

  const newTiles = [
    ...tiles
  ];

  newTiles[positionOfZero] = id;
  newTiles[positionOfElement] = 0;

  return newTiles;
};

export default (tiles = [], {type, id}) => {
  switch (type) {
    case 'MOVE_TILE':
      if (moveAvailable(tiles, id)) {
        return moveTile(tiles, id);
      } else {
        return tiles
      }
    case 'NEW_GAME':
      return createNewGame();
    default:
      return tiles;
  }
}