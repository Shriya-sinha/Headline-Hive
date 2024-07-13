// import React from "react";
import PropTypes from "prop-types";

const NewsArticle = ({ article }) => {
  return (
    <div className="card flex flex-col items-start p-4 text-left rounded-md shadow-lg max-w-md mb-4 font-monst bg-neutral-50">
      <div className="bg-blue-400 h-1 w-10 mt-5"></div>
      <h2 className="text-lg font-bold my-2">{article.title}</h2>
      <p className="text-gray-600 tracking-tight my-2">{article.description}</p>
      <img src={article.image} alt={article.title} />
      <a
        href={article.url}
        className="text-sm text-white rounded-full border border-blue-200 bg-blue-500 hover:bg-blue-700 hover:text-white px-3 py-1 my-2"
      >
        Read
      </a>
    </div>
  );
};
NewsArticle.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
export default NewsArticle;
