import { Timer, TimerOff } from "lucide-react";
import React, { useEffect, useReducer, useState } from "react";
import {
  INITIAL_STATE,
  pomReducer,
  ACTIONS,
} from "../reducers/pomodoroReducer";

const Modal = ({ show, onClick }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="absolute -right-7 w-20 py-2 px-1 text-slate-300 fon-thin rounded-xl bg-sky-700/75">
      <button
        className="mx-4 my-1"
        aria-label="start a timer for 20 minutes with a 5 minute break."
        onClick={() => {
          onClick("20/5", 20);
        }}
      >
        20 / 5
      </button>
      <div className="h-px bg-gray-900 my-1 mx-2 opacity-50" />
      <button
        className="mx-3 my-1"
        aria-label="start a timer for 40 minutes with a 10 minute break."
        onClick={() => {
          onClick("40/10", 40);
        }}
      >
        40 / 10
      </button>
    </div>
  );
};

export default function Pomodoro() {
  const [state, dispatch] = useReducer(pomReducer, INITIAL_STATE);

  useEffect(() => {
    if (state.reps === 0) {
      dispatch({ type: ACTIONS.STOP_TIMER });
      return;
    }

    const timer = setTimeout(() => {
      if (state.seconds === 0 && state.minutes > 0) {
        dispatch({ type: ACTIONS.SUBTRACT_MINUTE });
        return () => clearTimeout(timer);
      } else if (state.seconds > 0) {
        dispatch({ type: ACTIONS.SUBTRACT_SECOND });
        return () => clearTimeout(timer);
      } else if (state.seconds === 0 && state.minutes === 0 && state.reps > 0) {
        switch (state.breakTime) {
          case state.breakTime:
            switch (state.pomType) {
              case "20/5":
                dispatch({ type: ACTIONS.WORK_TIME, payload: 20 });
                break;
              case "40/10":
                dispatch({ type: ACTIONS.WORK_TIME, payload: 40 });
                break;
            }
          case !state.breakTime:
            switch (state.pomType) {
              case "20/5":
                dispatch({ type: ACTIONS.BREAK_TIME, payload: 5 });
                break;
              case "40/10":
                dispatch({ type: ACTIONS.BREAK_TIME, payload: 10 });
            }
        }
      }
    }, 1000);
  }, [state.seconds, state.minutes, state.change]);

  const startTimer = (pomType: string, workTime: number) => {
    dispatch({
      type: ACTIONS.START_TIMER,
      payload: { pomType: pomType, reps: 4, minutes: workTime },
    });
  };

  const stopTimer = () => {
    dispatch({ type: ACTIONS.STOP_TIMER });
  };

  const prependZero = (num) => {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  };
  console.log(state);
  return (
    <div className="m-3 text-slate-300 font-thin">
      {!state.toggleIcon ? (
        <div className="relative">
          <button
            id="pomodoro menu"
            onClick={() => dispatch({ type: ACTIONS.SHOW_MODAL })}
          >
            <Timer className="pt-1 hover:text-green-300" strokeWidth={1} />
          </button>
          <Modal show={state.showModal} onClick={startTimer} />
        </div>
      ) : (
        <div className="flex flex-row items-center">
          <button id="timer stop" onClick={() => stopTimer()}>
            <TimerOff
              className="pt-1 mb-1 mr-2 hover:text-green-300"
              strokeWidth={1}
            />
          </button>
          <div>
            {prependZero(state.minutes)}:{prependZero(state.seconds)}
          </div>
        </div>
      )}
    </div>
  );
}
