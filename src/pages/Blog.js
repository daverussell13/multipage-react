import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArticle = async () => {
    const request = await fetch(
      "https://api.spaceflightnewsapi.net/v3/articles"
    );
    const response = await request.json();
    setArticles(response);
    setLoading(false);
  };

  useEffect(() => {
    document.title = "Blog";
    getArticle();
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Blog</h1>
      <p className="section-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
        nam! :
      </p>
      {loading ? (
        <i>Loading articles...</i>
      ) : (
        <div className="articles">
          {articles.map((article) => (
            <article key={article.id} className="article">
              <h2 className="article-title">
                <Link to={`/blog/${article.id}`}>{article.title}</Link>
              </h2>
              <time className="article-time">
                {new Date(article.publishedAt).toLocaleDateString()}
              </time>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
