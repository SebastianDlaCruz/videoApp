import { TimerStyled } from "@styled/components/index.styled";
import { useContext, useEffect } from "react";
import { getStateQuestions } from "../adapters/getStateQuestions.adapter";
import AppContext from "../context/appContext";
interface Prop {
  isActive: boolean;
  setIsActive: (state: boolean) => void;
  mediaStreamRef: React.MutableRefObject<MediaStream | null>;
  time: number;
  preguntaId: string | undefined;
}

const Timer = ({ isActive, setIsActive, mediaStreamRef, preguntaId, time }: Prop) => {

  const maxTimer = 60;
  const { state, dispatch } = useContext(AppContext);


  useEffect(() => {

    if (!isActive && time >= maxTimer) {

      dispatch({
        type: "SET_STATE_QUESTION",
        payload: state.question.map(item => getStateQuestions(item, preguntaId, {
          time: maxTimer
        }))
      });

      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
        dispatch({
          type: "SET_STATE_QUESTION",
          payload: state.question.map(item => getStateQuestions(item, preguntaId, {
            stateButton: "replay"
          }))
        });

      }
    } else if (isActive) {
      const interval = setInterval(() => {
        dispatch({
          type: "SET_STATE_QUESTION",
          payload: state.question.map(item => getStateQuestions(item, preguntaId, {
            time: time + 1
          }))
        });

      }, 1000);

      if (time >= maxTimer) {
        setIsActive(false);
      }
      return () => {
        clearInterval(interval);
      };
    }


  }, [state, time, maxTimer]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <TimerStyled>
      <p>{formattedTime}/01:00</p>
      <div />
    </TimerStyled>
  );
};

export default Timer;