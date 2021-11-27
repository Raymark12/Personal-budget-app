import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Layout from "./components/Layout";
import OperationEdit from "./components/OperationEdit";
import Operations from "./components/Operations";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/operations" element={<Operations />} />
            <Route path="/operation/edit/:id" element={<OperationEdit />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
