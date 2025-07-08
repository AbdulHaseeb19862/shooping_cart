import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <AllRoutes />
    </>
  );
}

export default App;
