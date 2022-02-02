const ModalInitialState = {
  show: false,
  childComponent: ""
};
const ModalReducer = (state, action) => {
  return {
    childComponent: action.childComponent,
    show: action.show
  };
};
export { ModalReducer, ModalInitialState };
