import { useEffect, useState } from "react";
import { ButtonOption } from "../setting/setting";

interface Prop {
  state: string;
  setButtonVideo: (state: string) => void
}
const Timer = ({ state, setButtonVideo }: Prop) => {
  const maxTimer = 60;
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log(state);
    if (state === ButtonOption.START && timer >= maxTimer) {
      setTimer(maxTimer);


    } else {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);

      return () => {
        clearInterval(interval);

        if (timer >= maxTimer) {
          setButtonVideo("stop");
        }
      };
    }

  }, [state, timer, maxTimer]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <span>{formattedTime}/01:00</span>
  );
};

export default Timer;