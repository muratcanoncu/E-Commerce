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
        deliveryCountries: [...action.payloadTwo],
      };
    case "ADD_TO_CHART":
      let itemToAdd = state.productList.filter((product) => {
        return product.id === action.payload;
      });
      let newItem = itemToAdd[0];
      let newTotalPrice = state.cartTotalAmount + itemToAdd[0].price;
      return {
        ...state,
        loggedInUser: {
          ...state.loggedInUser,
          userCart: [
            ...state.loggedInUser.userCart,
            { ...newItem, id: Math.floor(Math.random() * 100000) },
          ],
        },
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
          falseUserDataTried: false,
        };
      } else {
        return {
          ...state,
          falseUserDataTried: true,
        };
      }
    case "USER_LOGOUT":
      return { ...state, userLoggedIn: false, loggedInUser: {} };
    case "REMOVE_FROM_CHART":
      const removedArray = state.loggedInUser.userCart.filter((product) => {
        return product.id !== action.payload.id;
      });
      let removedPrice = state.cartTotalAmount;
      removedPrice = removedPrice - action.payload.price;

      return {
        ...state,
        loggedInUser: { ...state.loggedInUser, userCart: removedArray },
        cartTotalAmount: removedPrice,
      };
    case "EMPTY_CART":
      return {
        ...state,
        loggedInUser: { ...state.loggedInUser, userCart: [] },
        cartTotalAmount: 0,
      };
    case "ADDRESS_DATA_FILLED":
      console.log(action.payload, "inreducer");
      let newTotalCartAmount =
        state.cartTotalAmount + Number(action.payload.shippingOption);
      return {
        ...state,
        orderData: action.payload,
        cartTotalAmount: newTotalCartAmount,
      };
    default:
      break;
  }
};
export default reducer;
