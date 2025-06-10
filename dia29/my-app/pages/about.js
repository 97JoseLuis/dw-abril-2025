// pages/about.js
import Header from '../components/header';
import articles from '../data';

export default function About() {
  return (
    <div>
      <Header />
      <h1>Esta es la página sobre mí</h1>
      <br />
      <h2>Artículos</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
