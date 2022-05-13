import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { webSite, reactApp, golangApp, workWith, mediaApp } from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "media",
      title: "Media App",
    },
    {
      id: "react",
      title: "React Disigns",
    },
    {
      id: "backend",
      title: "Golang-React App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(workWith);
        break;
      case "web":
        setData(webSite);
        break;
      case "media":
        setData(mediaApp);
        break;
      case "react":
        setData(reactApp);
        break;
      case "backend":
        setData(golangApp);
        break;
      default:
        setData(workWith);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            item={item}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div className="item">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
