import classes from "./Card.module.scss";

interface CardProps {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Card = (props: CardProps) => {
  return (
    <div className={`${classes.card} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Card;
