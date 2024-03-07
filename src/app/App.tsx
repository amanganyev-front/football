import { Route, Routes } from "react-router-dom";
import { Clasico, English, Europe, Leagues, Spanish } from "../pages";

const App = () => {
   return (
      <Routes>
         <Route
            path="/"
            element={<Clasico />}
         />
         <Route
            path="/english"
            element={<English />}
         />
         <Route
            path="/europe"
            element={<Europe />}
         />
         <Route
            path="/leagues"
            element={<Leagues />}
         />
         <Route
            path="/spanish"
            element={<Spanish />}
         />
      </Routes>
   );
};

export default App;
