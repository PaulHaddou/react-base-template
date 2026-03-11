import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
