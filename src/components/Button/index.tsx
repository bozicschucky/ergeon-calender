export interface Props {
  onClick: (action: string) => void;
  action: string;
  btnClass: string;
  text: string;
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { action, btnClass, onClick, text } = props;
  return (
    <button className={btnClass} onClick={() => onClick(action)}>
      {text}
    </button>
  );
};
export default Button;
