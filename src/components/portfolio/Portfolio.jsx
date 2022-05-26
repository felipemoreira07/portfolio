import "./portfolio.scss";
import PortfolioList from "../portifolioList/PortfolioList";
import {
  featuredPortfolio,
} from "../../data";

export default function Portfolio() {
  const list = [
    {
      id: "typescript",
      title: "Typescript",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "native",
      title: "React Native",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
      {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            key={item.id}
            site={item.site}
          />
      ))}
      </ul>
      <div className="container">
        {featuredPortfolio.map((d) => (
          <div className="item" key={d.id}>
            <img
              src={d.img}
              alt={d.title}
            />
            <a href={d.site}>{d.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
}