import React from "react";
import "./article.css";
const Article = ({ imgUrl, date, Text }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <p>{date}</p>
        <h3>{Text}</h3>
      </div>
      <p className="gpt3-p">Read Full Article</p>
    </div>
  );
};

export default Article;
