import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>Sobre nosotros</h1>
      <p>Esta es la página de información acerca de este proyecto.</p>
      <Link href="/">Volver a Inicio</Link>
    </div>
  );
}