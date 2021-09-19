const reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_DOWNLOADED":
      function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
      shuffle(action.payload);
      return {
        ...state,
        productList: [...action.payload],
      };
    case "ADD_TO_CHART":
      let itemToAdd = state.productList.filter((product) => {
        return product.id === action.payload;
      });
      let newCart = [...state.loggedInUser.userCart];
      newCart.push(itemToAdd[0]);
      let newTotalPrice = state.cartTotalAmount + itemToAdd[0].price;

      return {
        ...state,
        loggedInUser: { ...state.loggedInUser, userCart: newCart },
        cartTotalAmount: newTotalPrice,
      };
    case "USER_LOGIN_TRIED":
      const loginUser = state.users.filter((user) => {
        if (
          user.email === action.payload.userEmail &&
          user.password === action.payload.userPassword
        ) {
          return user;
        }
      });
      if (loginUser.length > 0) {
        return {
          ...state,
          userLoggedIn: true,
          loggedInUser: loginUser[0],
        };
      } else {
        return {
          ...state,
          falseUserDataTried: true,
        };
      }
    case "USER_LOGOUT":
      return { ...state, userLoggedIn: false, loggedInUser: {} };
    default:
      break;
  }
};
export default reducer;
