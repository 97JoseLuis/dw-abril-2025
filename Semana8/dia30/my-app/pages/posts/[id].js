import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Post dinámico</h1>
      <p>ID del post: {id}</p>
    </div>
  );
}
