// import React from "react";
import NewsArticle from "./NewsArticle";

const NewsList = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Apple announces new iPhone 13",
      description:
        "The new iPhone 13 is here! Apple's latest flagship device features a powerful A15 Bionic chip, improved cameras, and a sleek new design. With a starting price of $799, it's an attractive option for those looking to upgrade their mobile experience.",
      url: "",
      image: "",
    },
    {
      id: 2,
      title: "NASA discovers new planet",
      description:
        "A new planet has been discovered in our galaxy! The exoplanet, named Kepler-186f, is a rocky world that orbits a small, cool star about 492 light-years from Earth. This discovery has significant implications for the search for life beyond our planet.",
      url: "",
      image: "",
    },
    {
      id: 3,
      title: "New COVID-19 vaccine approved",
      description:
        "A new vaccine has been approved for emergency use! The vaccine, developed by Pfizer-BioNTech, has shown to be 95% effective in preventing severe illness from COVID-19. This is a major breakthrough in the fight against the pandemic.",
      url: "",
      image: "",
    },
    {
      id: 1,
      title: "Apple announces new iPhone 13",
      description:
        "The new iPhone 13 is here! Apple's latest flagship device features a powerful A15 Bionic chip, improved cameras, and a sleek new design. With a starting price of $799, it's an attractive option for those looking to upgrade their mobile experience.",
      url: "",
      image: "",
    },
    {
      id: 2,
      title: "NASA discovers new planet",
      description:
        "A new planet has been discovered in our galaxy! The exoplanet, named Kepler-186f, is a rocky world that orbits a small, cool star about 492 light-years from Earth. This discovery has significant implications for the search for life beyond our planet.",
      url: "",
      image: "",
    },
    {
      id: 3,
      title: "New COVID-19 vaccine approved",
      description:
        "A new vaccine has been approved for emergency use! The vaccine, developed by Pfizer-BioNTech, has shown to be 95% effective in preventing severe illness from COVID-19. This is a major breakthrough in the fight against the pandemic.",
      url: "",
      image: "",
    },
    {
      id: 1,
      title: "Apple announces new iPhone 13",
      description:
        "The new iPhone 13 is here! Apple's latest flagship device features a powerful A15 Bionic chip, improved cameras, and a sleek new design. With a starting price of $799, it's an attractive option for those looking to upgrade their mobile experience.",
      url: "",
      image: "",
    },
    {
      id: 2,
      title: "NASA discovers new planet",
      description:
        "A new planet has been discovered in our galaxy! The exoplanet, named Kepler-186f, is a rocky world that orbits a small, cool star about 492 light-years from Earth. This discovery has significant implications for the search for life beyond our planet.",
      url: "",
      image: "",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-5 mx-60 mt-10">
      {newsArticles.map((article) => (
        <NewsArticle key={article.id} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
