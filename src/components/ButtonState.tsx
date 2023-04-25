import { ButtonOption } from "../setting/setting";
import Button from "./Button";
import play from "/assets/play.svg";
import stop from "/assets/stop.svg";
interface Props {
  state: string;
  onClick: () => void;

}

const ButtonState = ({ state, onClick, }: Props) => {



  if (state === ButtonOption.START) {
    return (<Button src={play} onClick={onClick} />);
  } else if (state === ButtonOption.STOP) {
    return (<Button src={stop} onClick={onClick} />);
  }
};

export default ButtonState;
