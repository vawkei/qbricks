import classes from "./Card.module.scss";

interface CardProps {
  className: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
