//action creator
export const addItem = (item, price) => {
  // return an action
  return {
    type: 'ITEM_SELECTED',
    payload: {
      item: item,
      price: price
    }
  };
};

export const removeItem = (itemName) => {
  return{
    type: 'REMOVE_ITEM',
    payload: {
      itemName: itemName
    }
  };
};
