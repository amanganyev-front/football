import styles from "./Card.module.scss";

export const Card: React.FC<Types.ICard> = ({ winner }) => {
   return (
      <div className={styles.Card}>
         <img src={winner} />
      </div>
   );
};
