import Link from 'next/link';
import style from './navBar.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export default function NavBar() {
  const router = useRouter();
  const path = router.pathname;
  const links = useRef();

  useEffect(() => {
    const arrayLinks = Object.values(links.current.children);
    arrayLinks.forEach(link => {
      const linkPath = link.pathname;
      if (linkPath === path) {
        link.style.background = 'linear-gradient(to left, #434343, #000000)';
        link.style.color = '#ffffff';
      } else {
        link.style.background = 'transparent';
        link.style.color = '#000000';
      }
    });
  }, [path]);
  return (
    <>
      <nav ref={links} className={style.navbar}>
        <Link href='/'>
          <a className={style.navbar_item}>Inicio</a>
        </Link>
        <Link href='/blog'>
          <a className={style.navbar_item}>Blog</a>
        </Link>
        <Link href='/contacto'>
          <a className={style.navbar_item}>Contacto</a>
        </Link>
      </nav>
    </>
  );
}
