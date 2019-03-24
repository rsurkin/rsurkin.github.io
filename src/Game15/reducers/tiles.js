const createNewGame = () => {
  return [
    ...Array(16).keys()
  ]
    .sort(() => Math.random() - 0.5)
    .sort((a, b) => b === 0 ? -1 : 0)
  ;
};

export default (state = [], action) => {
  switch (action.type) {
    case 'MOVE_TILE':
      return [
        ...state,
        // {
        //   id: action.id,
        //   text: action.text,
        //   completed: false
        // }
      ];
    case 'NEW_GAME':
      return createNewGame();
    default:
      return state;
  }
}