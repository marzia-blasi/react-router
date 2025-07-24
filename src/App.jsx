import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/Products" Component={Products} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
