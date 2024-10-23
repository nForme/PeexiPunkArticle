import "../scss/SeeMoreSection.scss";
import LeftBracket from "../../ui-kit/LeftBracket";
import RightBracket from "../../ui-kit/RightBracket";

const newsList = [
  {
    id: 1,
    category: "News",
    title: "Immersive Experience Design: Expert Insights and Techniques",
    date: "14 April 2024",
    imageUrl: "../../../public/PhotoTop.png",
  },
  {
    id: 2,
    category: "News",
    title: "Immersive Experience Design: Expert Insights and Techniques",
    date: "15 April 2024",
    imageUrl: "../../../public/PhotoTop.png",
  },
];

const SeeMoreSection = () => {
  return (
    <section className="see-more-section">
      <span className="see-more-label">See more</span>
      <div className="see-more-news-list">
        {newsList.map((news) => (
          <article key={news.id} className="see-more-news-item">
            <img
              src={news.imageUrl}
              alt={news.title}
              className="see-more-image"
            />
            <header className="see-more-header">
              <div className="see-more-category-container">
                <LeftBracket />
                <span className="see-more-category">{news.category}</span>
                <RightBracket />
              </div>
              <h2 className="see-more-title">{news.title}</h2>
            </header>
            <time className="see-more-date">{news.date}</time>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SeeMoreSection;
