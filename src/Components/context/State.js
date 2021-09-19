const initialState = {
  userLoggedIn: false,
  emailEntered: false,
  falseUserDataTried: false,
  loggedInUser: {},
  cartTotalAmount: 0,
  users: [
    {
      id: 1,
      loggedIn: false,
      name: "Murat Can",
      surName: "Öncü",
      email: "mcanoncuu@gmail.com",
      password: "123456can",
      userCart: [],
    },
    {
      id: 2,
      loggedIn: false,
      name: "Mladen",
      surName: "Despotovic",
      email: "mladen@smartrecruiters.de",
      password: "123456mladen",
      userCart: [],
    },
  ],
  productList: [],
};

export default initialState;
