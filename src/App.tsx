import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hello world!</h1>} />
          <Route path="/new" element={<h1>New page</h1>} />
          <Route path="/:id">
            <Route index element={<h1>Show page</h1>} />
            <Route path="edit" element={<h1>Edit page</h1>} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
