export const ACTIONS = {
  TOGGLE_ICON: "TOGGLE_ICON",
  TOGGLE_TIMER: "TOOGLE_TIMER",
  START_TIMER: "START_TIMER",
  STOP_TIMER: "STOP_TIMER",
  SUBTRACT_SECOND: "SUBTRACT_SECOND",
  SUBTRACT_MINUTE: "SUBTRACT_MINUTE",
  SHOW_MODAL: "SHOW_MODAL",
  BREAK_TIME: "BREAK_TIME",
  WORK_TIME: "WORK_TIME",
  SET_REPS: "SET_REPS",
};

export const INITIAL_STATE = {
  toggleIcon: false,
  pomType: "",
  seconds: 0,
  minutes: 0,
  reps: 0,
  showModal: false,
  breakTime: false,
};

export const pomReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ICON":
      return { ...state, toggleIcon: !state.toggleIcon };
    case "START_TIMER":
      return {
        ...state,
        toggleIcon: true,
        showModal: false,
        pomType: action.payload.pomType,
        reps: action.payload.reps,
        minutes: action.payload.minutes,
      };
    case "STOP_TIMER":
      return {
        INITIAL_STATE,
      };
    case "SUBTRACT_SECOND":
      return {
        ...state,
        seconds: state.seconds - 1,
      };
    case "SUBTRACT_MINUTE":
      return {
        ...state,
        minutes: state.minutes - 1,
        seconds: 59,
      };
    case "SHOW_MODAL":
      console.log(state);
      return { ...state, showModal: true };
    case "BREAK_TIME":
      return { ...state, breakTime: true, minutes: action.payload };
    case "WORK_TIME":
      return {
        ...state,
        breakTime: false,
        minutes: action.payload,
        reps: state.reps - 1,
      };
    default:
      return state;
  }
};
