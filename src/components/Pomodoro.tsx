import { Timer, TimerOff } from "lucide-react";
import React, { useEffect, useReducer, useState } from "react";
import {
  INITIAL_STATE,
  pomReducer,
  ACTIONS,
} from "../reducers/pomodoroReducer";
import beep from "../sounds/beep.wav";
import { STYLES } from "../utils/constants";

const playSound = () => {
  new Audio(beep).play();
};

const Modal = ({ show, onClick }) => {
  if (!show) {
    return null;
  }
  return (
    <div className=" absolute -right-7 z-20 w-20 py-2 px-1 text-slate-300 font-thin tracking-wider rounded-xl bg-sky-700/75">
      <button
        className="mx-4 my-1 hover:text-cyan-300"
        aria-label="Pomodoro timer. 4 reps of 20 minute work periods and 5 minute break periods."
        onClick={() => {
          onClick("20/5", 20);
        }}
      >
        20 / 5
      </button>
      <div className="h-px bg-gray-900 my-1 mx-2 opacity-50" />
      <button
        className="mx-3 my-1 hover:text-cyan-300"
        aria-label="Pomodoro timer. 4 reps of 40 minute work periods and  minute break periods"
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
  const [enabled, setEnabled] = useState(false);
  const [modal, showModal] = useState(false);

  useEffect(() => {
    if (!enabled) {
      state.seconds = 0;
      return;
    }
    if (state.reps === 0) {
      setEnabled(false);
      showModal(false);
      dispatch({ type: ACTIONS.STOP_TIMER });
      return;
    }
    const timer = setTimeout(() => {
      if (state.seconds === 0 && state.minutes > 0) {
        dispatch({ type: ACTIONS.SUBTRACT_MINUTE });
      } else if (state.seconds > 0) {
        dispatch({ type: ACTIONS.SUBTRACT_SECOND });
      } else if (
        state.seconds === 0 &&
        state.minutes === 0 &&
        state.reps >= 1
      ) {
        playSound();

        switch (state.breakTime) {
          case state.breakTime:
            dispatch({
              type: ACTIONS.WORK_TIME,
              payload: state.Pomtype === "20/5" ? 20 : 40,
            });
            break;
          case !state.breakTime:
            dispatch({
              type: ACTIONS.BREAK_TIME,
              payload: state.Pomtype === "20/5" ? 5 : 10,
            });
          default:
            throw new Error("invalid breakTime");
        }
      }
      return () => clearTimeout(timer);
    }, 1000);
  }, [state.seconds, state.minutes]);

  const startTimer = (pomType: string, workTime: number) => {
    setEnabled(true);
    showModal(false);
    dispatch({
      type: ACTIONS.START_TIMER,
      payload: { pomType: pomType, reps: 4, minutes: workTime },
    });
  };

  const stopTimer = () => {
    setEnabled(false);
    showModal(false);
    dispatch({ type: ACTIONS.STOP_TIMER });
  };

  const prependZero = (num: number) => {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  };

  return (
    <div className="mt-1.5 mr-3 text-slate-300 font-thin tracking-wider">
      {modal && (
        <div
          className="fixed w-full h-full inset-0 opacity-0"
          onClick={() => showModal(false)}
        ></div>
      )}
      {!enabled ? (
        <div className="relative">
          <button id="timerMenu" onClick={() => showModal(true)}>
            <Timer className={STYLES.TIMER_ON} strokeWidth={1} />
          </button>
          <Modal show={modal} onClick={startTimer} />
        </div>
      ) : (
        <div className="flex flex-row items-center">
          <button id="stopTimer" onClick={() => stopTimer()}>
            <TimerOff className={STYLES.TIMER_OFF} strokeWidth={1} />
          </button>
          <div>
            {prependZero(state.minutes)}:{prependZero(state.seconds)}
          </div>
        </div>
      )}
    </div>
  );
}
