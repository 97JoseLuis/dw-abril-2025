import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a mi sitio web</h1>
      <p>Esta es la página de inicio.</p>
      <Link href="/about">Ir a Acerca de</Link>
    </div>
  );
}