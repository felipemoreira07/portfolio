import "./portfolioList.scss";

export default function PortfolioList({ id, title, active}) {
  return (
    <div
      className={active ? "portfolioList active" : "portfolioList"}
      id={id}
    >
      {title}
    </div>
  );
}