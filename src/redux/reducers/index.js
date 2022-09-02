const initialState = [];

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.character]
    case 'DEL_FAVORITE':
      return state.filter(item => item.id !== action.character.id);
    default:
      return state;
  }
}
export default favoriteReducer;