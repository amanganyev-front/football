import { useState } from "react";
import { Card } from "../../shared";
import styles from "./Clasico.module.scss";
import laliga from "./laliga";
import copa from "./copa";
import supercopa from "./supercopa"

export const Clasico = () => {

   type New = number

   const length = laliga.length -1
   const [len, setLen] = useState<number>(length)
   const date:number = 2023
   const [newdate] = useState<New[]>([])

   if(len > -1) {
      newdate.unshift(date - len)
      setLen(len - 1)
      console.log(len, newdate);
   }

   return (
      <div className={styles.Clasico}>
         <h1>Clasico</h1>
         <div className={styles.Inner}>
            <div className={styles.Years}>
               {newdate.map((card, i) => <div key={i}>{card}</div>)}
            </div>
            <div className={styles.Cards}>
               <div>
                  {laliga.map((card, i) => 
                     <Card key={i} winner={card.winner}/>
                  )}
               </div>
               <div>
                  {copa.map((card, i) => 
                     <Card key={i} winner={card.winner}/>
                  )}
               </div>
               <div>
                  {supercopa.map((card, i) => 
                     <Card key={i} winner={card.winner}/>
                  )}
               </div>
            </div>
         </div>

      </div>
   );
};
