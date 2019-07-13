import { combineReducers } from 'redux';

const shoppingListReducer = () => {
  return [
    {title: 'Honey Bun', price: 1},
    {title: 'Ham Sandwhich', price: 5.5},
    {title: 'La Croix', price: 2.5},
    {title: 'Snickers', price: 1},
    {title: 'Toilet Paper', price: 3},
  ];
};

const selectedItemReducer = (selectedItem = null, action) => {
  if (action.type === 'ITEM_SELECTED') {
    return action.payload.item && action.payload.price
  }

  return selectedItem;
};

export default combineReducers({
  shoppingList: shoppingListReducer,
  selectedItem: selectedItemReducer
})
