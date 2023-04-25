import { ButtonStyled } from "@styled/components/index.styled";

interface Props {
  src: string
  onClick?: () => void
}

const Button = ({ src, onClick }: Props) => {
  return (
    <ButtonStyled src={src} onClick={onClick} />

  );
};

export default Button;
