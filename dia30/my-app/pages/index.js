import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const irAPost1 = () => {
    router.push('/posts/1');
  };

  return (
    <div>
      <h1>Bienvenido a mi sitio web</h1>
      <p>Esta es la página de inicio.</p>
      <Link href="/about">Ir a Acerca de</Link>
      <ul>
        <li>
          <Link href="/posts/1">Ver Post 1</Link>
        </li>
        <li>
          <Link href="/posts/2">Ver Post 2</Link>
        </li>
        <li>
          <Link href="/posts/3">Ver Post 3</Link>
        </li>
      </ul>
      <button onClick={irAPost1}>Ir al Post 1</button>
    </div>
  );
}