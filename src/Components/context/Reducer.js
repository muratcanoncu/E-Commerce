const reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_DOWNLOADED":
      return {
        ...state,
        productList: [...action.payload],
      };
    case "ADD_TO_CHART":
      let itemToAdd = state.productList.filter((product) => {
        return product.id === action.payload;
      });
      let addingToChartArray = [...state.userChart];
      addingToChartArray.push(itemToAdd);
      return {
        ...state,
        userChart: addingToChartArray,
      };
    default:
      break;
  }
};
export default reducer;
