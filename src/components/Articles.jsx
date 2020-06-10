import React from "react";
import articles from "../data";

function Articles() {
  return (
    <section className="padding">
      <article className="container">
        <h1 className="article-head">Articles</h1>
        <div className="grids">
            {articles.map((article) => {
              return (
                  <>
                    <div className="class-js">
                        <img src={article.urlToImage} className="img" />
                        <h1>{article.author}</h1>
                        <h2>{article.title}</h2>
                        <h2 className="grid-header">{article.description}</h2>
                        <a href="#">{article.url}</a>
                    </div>
                </>
              );
            })}
        </div>
      </article>
    </section>
  );
}
export default Articles;
