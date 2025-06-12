import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { category, post } = router.query;

  return (
    <div>
      <h1>Post del Blog</h1>
      <p>
        <strong>Categoría:</strong> {category}
      </p>
      <p>
        <strong>Post:</strong> {post}
      </p>
    </div>
  );
}