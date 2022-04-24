import Link from 'next/link';
import style from './navBar.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function NavBar() {
  const router = useRouter();
  const path = router.pathname;
  const links = useRef();
  const { data } = useContext(ThemeContext);
  const { theme } = data;

  useEffect(() => {
    const arrayLinks = Object.values(links.current.children);
    arrayLinks.forEach(link => {
      const linkPath = link.pathname;
      if (linkPath === path) {
        link.style.background = `${
          theme === 'light'
            ? 'linear-gradient(to left, #434343, #000000)'
            : 'linear-gradient(to right, #ff8008, #ffc837)'
        }`;
        link.style.color = `${theme === 'light' ? '#ffffff' : '#000000'}`;
      } else {
        link.style.background = 'transparent';
        link.style.color = `${theme === 'light' ? '#000000' : '#ffffff'}`;
      }
    });
    if (path === '/blog/[post]') {
      arrayLinks[1].style.background = `${
        theme === 'light'
          ? 'linear-gradient(to left, #434343, #000000)'
          : 'linear-gradient(to right, #ff8008, #ffc837)'
      }`;
      arrayLinks[1].style.color = `${
        theme === 'light' ? '#ffffff' : '#000000'
      }`;
      return;
    }
  }, [path, theme]);

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
