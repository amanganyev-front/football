import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
   return (
      <div className={styles.Header}>
         <div>
            <NavLink
               to="/"
               className={styles.NavLink}
            >
               Clasico
            </NavLink>
            <NavLink
               to="/english"
               className={styles.NavLink}
            >
               English
            </NavLink>
            <NavLink
               to="/europe"
               className={styles.NavLink}
            >
               Europe
            </NavLink>
            <NavLink
               to="/leagues"
               className={styles.NavLink}
            >
               Leagues
            </NavLink>
            <NavLink
               to="/spanish"
               className={styles.NavLink}
            >
               Spanish
            </NavLink>
         </div>
      </div>
   );
};
