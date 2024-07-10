// import React from "react";
import { useEffect, useState} from "react";
import NewsArticle from "./NewsArticle";
import axios from "axios";
const NewsList = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsArticles = async () => {
      try {
        const response = await axios.get("http://localhost:4001/api/news");
        const data = response.data;
        setNewsArticles(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNewsArticles();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-5 mx-60 mt-10">
      {newsArticles ? (
        newsArticles.map((article) => (
          <NewsArticle key={article.id} article={article} />
        ))
      ) : (
        <p>No news articles available</p>
      )}
    </div>
  );
};

export default NewsList;
