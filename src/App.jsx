import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import MovieEmbed from "./components/MovieEmbed";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Fuckyou from "./pages/Fuckyou";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/movie-site/movie/:id" element={<MovieDetails />} />
        <Route path="/movie-site/watch/:id" element={<MovieEmbed />} />
        <Route path="/movie-site/fuckyou" element={<Fuckyou />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;