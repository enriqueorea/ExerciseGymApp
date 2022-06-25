import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

import "./App.css";

function App() {
  return (
    <Box width="420px" sx={{ width: { xl: "1488" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
