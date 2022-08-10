export const ACTIONS = {
  hideOptions: 'hideOptions',
  toggleExpanded: 'toggleExpanded',
  setValue: 'setValue',
  deleteValue: 'deleteValue',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.toggleExpanded:
      return { ...state, isExpanded: !state.isExpanded };
    case ACTIONS.hideOptions:
      return { ...state, isExpanded: false };
    case ACTIONS.setValue:
      if (action.payload.isChecked) return { ...state, value: state.value.concat(action.payload.option) };
      return { ...state, value: state.value.filter((item) => item !== action.payload.option) };
    case ACTIONS.deleteValue:
      return { ...state, value: state.value.filter((item) => item !== action.payload.option) };
    default:
      return state;
  }
};
