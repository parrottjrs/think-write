export const ACTIONS = {
  START_TIMER: "START_TIMER",
  STOP_TIMER: "STOP_TIMER",
  SUBTRACT_SECOND: "SUBTRACT_SECOND",
  SUBTRACT_MINUTE: "SUBTRACT_MINUTE",
  BREAK_TIME: "BREAK_TIME",
  WORK_TIME: "WORK_TIME",
};

export const INITIAL_STATE = {
  pomType: "",
  seconds: 0,
  minutes: 0,
  reps: 0,
  breakTime: false,
};

export const pomReducer = (state, action) => {
  switch (action.type) {
    case "START_TIMER":
      return {
        ...state,
        pomType: action.payload.pomType,
        reps: action.payload.reps,
        minutes: action.payload.minutes,
      };
    case "STOP_TIMER":
      return {
        pomType: "",
        seconds: 0,
        minutes: 0,
        reps: 0,
        breakTime: false,
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
    case "BREAK_TIME":
      return {
        ...state,
        breakTime: true,
        minutes: action.payload,
        reps: state.reps - 1,
      };
    case "WORK_TIME":
      return {
        ...state,
        breakTime: false,
        minutes: action.payload,
      };
    default:
      return state;
  }
};
