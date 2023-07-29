import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Category } from "./components/category/Category_page";
import { VideoPlayer } from "./pages/VideoPlayer/VideoPlayer";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:catId" element={<Category />} />
        {/* <Route path="/singlePage" element={<SingleCatPage />} /> */}
        <Route path="/video/:videoId" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}
