import Image from 'next/image';
import NavBar from '../components/NavBar';
import { useRef } from 'react';

export default function Layout({ children }) {
  const themeRef = useRef();

  const handleTheme = () => {
    const themes = Object.values(themeRef.current.children);
    themes.forEach(theme => theme.classList.toggle('active-theme'));
  };

  return (
    <>
      <header id='header'>
        <div className='header-item logo-container'>
          <Image
            src='/images/logo-250x123.png'
            alt='nelson gamero'
            objectFit='cover'
            layout='fill'
            className='logo'
            priority
          />
        </div>
        <NavBar />

        <div className='header-item utilities-container'>
          <span className='search'>
            <Image
              src='/images/search-solid.svg'
              alt='buscar'
              width={30}
              height={30}
            />
            Buscar
          </span>
          <div className='theme' ref={themeRef}>
            <div className='theme-item active-theme'>
              <Image
                src='/images/moon-solid.svg'
                alt='dark'
                width={25}
                height={25}
                onClick={handleTheme}
              />
            </div>

            <div className='theme-item'>
              <Image
                src='/images/sun-solid.svg'
                alt='light'
                width={25}
                height={25}
                onClick={handleTheme}
              />
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer></footer>
    </>
  );
}
