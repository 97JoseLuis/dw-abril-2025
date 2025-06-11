import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
      <p style={{ marginTop: '0.5rem', color: 'black' }}>
        Ruta actual: <strong>{currentPath}</strong>
      </p>
    </header>
  );
}
