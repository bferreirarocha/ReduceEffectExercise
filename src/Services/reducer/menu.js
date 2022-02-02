const MenuInitialState = [
  {
    id: 1,
    title: "Pasta",
    qnt: 2
  },
  {
    id: 2,
    title: "Pizza",
    qnt: 1
  }
];

const MenuReducer = (state, action) => {
  switch (action.type) {
    case "EDIT":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, qnt: action.qnt };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};
export { MenuReducer, MenuInitialState };
