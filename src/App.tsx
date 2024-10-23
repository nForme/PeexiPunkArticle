import "./App.scss";
import ArticleContent from "./components/tsx/ArticleContent";
import SeeMoreSection from "./components/tsx/SeeMoreSection";
import TopImage from "./components/tsx/TopImage";

function App() {
  return (
    <div className="container">
      <TopImage />
      <ArticleContent />
      <SeeMoreSection />
    </div>
  );
}

export default App;
