const initialState = {
  userLoggedIn: false,
  emailEntered: false,
  falseUserDataTried: false,
  loggedInUser: {},
  cartTotalAmount: 0,
  orderData: {
    orderDataEntered: false,
    firstName: "",
    lastName: "",
    address: "",
    eMail: "",
    city: "",
    ZIP: "",
    country: "",
    shippingOption: 45,
  },
  deliveryCountries: [],
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
      name: "Jon",
      surName: "Doe",
      email: "jon.doe@smartshop.de",
      password: "123456",
      userCart: [],
    },
  ],
  productList: [],
};

export default initialState;
