import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import SpecificVenue from "./pages/SpecificVenue";
import ContactPage from "./pages/Contact/ContactPage";
import Terms from "./pages/Terms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SpecificVenue />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
