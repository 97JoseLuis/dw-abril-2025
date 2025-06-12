import Header from '../components/header';
import ArticleCard from '../components/ArticleCard';

export default function Blog({ articles }) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Header />
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Blog</h1>
      {Array.isArray(articles) && articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          description={article.description}
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const articles = (await import('../data')).default;

  return {
    props: {
      articles,
    },
  };
}
