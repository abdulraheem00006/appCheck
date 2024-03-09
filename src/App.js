import "./App.css";
import ShowItems from "./components/ShowItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetails from "./components/ItemsDetail";

function App() {
  const items = [
    { label: "hey", content: "hello hi there" },
    { label: "what", content: "what are you doing" },
    { label: "where", content: "where have you been" },
  ];

  return (
    <BrowserRouter>
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<ShowItems items={items} />} />

          <Route
            path="/showitems/:label"
            element={<ItemDetails items={items} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
