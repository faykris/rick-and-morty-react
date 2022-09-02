export const addFavorite = (character) => {
  return {
    type: 'ADD_FAVORITE',
    character
  }
}

export const delFavorite = (character) => {
  return {
    type: 'DEL_FAVORITE',
    character
  }
}
