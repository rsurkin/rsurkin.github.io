

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
      const tiles = [...Array(16).keys()];
      return tiles;
    default:
      return state;
  }
}