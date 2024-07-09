// import React from "eact";
import PropTypes from "prop-types";

const ArticleDetails = ({ article }) => {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <p className="text-gray-600">{article.description}</p>
      <img src={article.image} alt={article.title} />
      <a href={article.url} className="text-blue-600 hover:text-blue-900">
        Source
      </a>
    </div>
  );
};

ArticleDetails.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
export default ArticleDetails;
