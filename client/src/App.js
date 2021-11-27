import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Operations from "./components/Operations";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/operations" element={<Operations />} />
            <Route path="/" element="Home" />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
