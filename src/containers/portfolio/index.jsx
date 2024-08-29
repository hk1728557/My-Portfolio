import React, { useState } from "react";
import { MdLabelImportant } from "react-icons/md";
import PageHeaderContent from "../../components/pageHeaderContent";
import GitHub from "../../images/github.jpg";
import ImageOne from "../../images/image1.jpg";
import Dropdown from "../../images/dropdown.png";
import textApp from "../../images/textApp.png";
import ImageTwo from "../../images/image2.jpg";
import MacBook from "../../images/MacBook Pro.png";
import HomeBanner from "../../images/homeBanner.png";
import Singer from "../../images/singer.png";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "GitHub Link",
    image: GitHub,
    link: "https://github.com/hk1728557",
  },
  {
    id: 2,
    name: "News App",
    image: ImageOne,
    link: "https://github.com/hk1728557/News_WebApp_React.git",
  },
  {
    id: 2,
    name: "Find DropDown",
    image: Dropdown,
    link: "https://github.com/hk1728557/FinalTaskJs",
  },
  {
    id: 2,
    name: "Card App",
    image: ImageTwo,
    link: "https://github.com/hk1728557/cssLandingPageTask",
  },
  {
    id: 2,
    name: "Text App",
    image: textApp,
    link: "https://textwordutils.netlify.app/",
  },

  {
    id: 3,
    name: "MacBook Design",
    image: MacBook,
    link: "https://www.figma.com/design/LIx3TMXjnZm8Xj5KZeJ3p8/Apple-Watch-Store-Landing-Page-Design?node-id=0-1&t=abvSCgM6CrqPDiaU-1",
  },
  {
    id: 3,
    name: "Singing Art Design",
    image: HomeBanner,
    link: "https://www.figma.com/design/QBVG4BdzNLzzXKTcKS0z3Q/Event-managent?t=abvSCgM6CrqPDiaU-1",
  },
  {
    id: 3,
    name: "Singer",
    image: Singer,
    link: "https://www.figma.com/design/rQy5xXGVHtcAZsWGA4PtSM/ArtistPortpolio?node-id=0-1&t=TWanTxVdCg07Nnq0-1",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  // state for filter dropdown  value 0 for all 1 for development 2 for design
  const [filteredValue, setFilteredValue] = useState(1);
  // state for hover card index
  const [hoveredValue, setHoveredValue] = useState(null);

  function handelFilter(currentId) {
    setFilteredValue(currentId);
  }

  // handleHover function
  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("=========================");
  console.log(hoveredValue);

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  console.log("=========================");
  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<MdLabelImportant size={40} />}
      />
      <div className="portfolio_content">
        <ul className="portfolio_content_filter">
          {/* all development design button  */}
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handelFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        {/* display card data */}
        <div className="portfolio_content_cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio_content_cards_item"
              key={`cardItem${item.name.trim()}`}
              // mouse hover
              onMouseEnter={() => handleHover(index)} // call handleHover function
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio_content_cards_item_img-wrapper">
                <a href="/#">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              {/* hover button */}
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => window.open(item.link, "_blank")}>
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
