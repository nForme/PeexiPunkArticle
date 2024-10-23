import "../scss/ArticleContent.scss";
import RightBracket from "../../ui-kit/RightBracket";
import LeftBracket from "../../ui-kit/LeftBracket";
import SocialIcons from "../../ui-kit/SocialIcons";

const articleData = [
  {
    id: 1,
    category: "News",
    mainTitle:
      "A Month of Magic: Unlocking Exclusive Perks with Magic Eden Wallet",
    mainDescription:
      "Embark on a new adventure with the global launch of Magic Eden Wallet. Discover the key features that make this wallet a game-changer, explore exclusive perks including free Open Editions, boosted odds for hot mint allowlists, and more. Join us as we celebrate a month of magic, making it one step easier for everyone to collect.",
    introductionTitle: "Wallet’s Origin Story & Offerings",
    introductionDescription:
      "While we’ve been overwhelmed by the positive response from testers about our wallet, this launch isn't just about slick UIs or innovative features – it's about giving back to our community of collector enthusiasts. This Month of Perks is our way of expressing gratitude to the early adopters and welcoming new users into a realm where their wallet isn't just a tool, but an experience. Let's dive back into the exclusive perks awaiting Magic Eden Wallet users during the month of February:",

    paragraphTitle1: "1. Open Editions Extravaganza:",
    paragraphTitle2: "2. The Preferred Wallet for @InkonBTC:",
    closingTitle1: "Get Started & Join the Celebration",
    closingTitle2: "Get Ready for a Magical Experience",
    paragraphDescription1:
      "Throughout February, Magic Eden will release free Open Editions in-wallet from acclaimed NFT projects such as Claynosaurz, Degenerate Ape Academy, and MonkeDAO. These limited-time mints are ours and our partners’ gifts to Magic Eden Wallet users, providing a unique opportunity to expand your NFT collection.",
    paragraphDescription2:
      "We're excited to be partnering with INK to offer ME Wallet Users a boost in odds to access the allow list for their upcoming collection launch. Be among the first to explore and collect the latest from INK.",
    paragraphDescription3:
      "The Magic Eden Wallet is available via chrome extension globally, and we’ve launched a whole website to help you get started at",
    paragraphDescription4:
      "Whether you're an early adopter or a newcomer, the Magic Eden Wallet promises an extraordinary journey filled with exclusive benefits. The month of perks is just the beginning of what Magic Eden Wallet has in store for our users. Let's make this month a celebration of NFTs, community, and the boundless possibilities that Magic Eden Wallet brings to your collecting adventure - we’re so happy to be embarking on this journey of building with you.",

    date: "14 April 2024",
  },
];

const ArticleContent: React.FC = () => {
  const article = articleData[0];

  return (
    <main className="article-content-container">
      <article className="article-content">
        <header className="article-header">
          <div className="article-category-container">
            <LeftBracket />
            <span className="article-category">{article.category}</span>
            <RightBracket />
          </div>
          <h1 className="article-main-title">{article.introductionTitle}</h1>
          <p className="article-main-description">
            {article.introductionDescription}
          </p>
        </header>
        <section className="article-introduction-content">
          <h2 className="introduction-title">{article.mainTitle}</h2>
          <p className="introduction-description">{article.mainDescription}</p>
        </section>

        <section className="article-slider">
          <p>slider</p>
        </section>

        <section className="article-paragraph-content">
          <h3 className="paragraph-title">{article.paragraphTitle1}</h3>
          <p className="paragraph-description">
            {article.paragraphDescription1}
          </p>

          <h3 className="paragraph-title">{article.paragraphTitle2}</h3>
          <p className="paragraph-description">
            {article.paragraphDescription2}
          </p>

          <h2 className="closing-title">{article.closingTitle1}</h2>
          <p className="paragraph-description">
            {article.paragraphDescription3}
          </p>

          <h2 className="closing-title">{article.closingTitle2}</h2>
          <p className="paragraph-description">
            {article.paragraphDescription4}
          </p>
        </section>
      </article>
      <SocialIcons />
    </main>
  );
};

export default ArticleContent;
