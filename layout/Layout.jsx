import Image from 'next/image';
import NavBar from '../components/NavBar';
import { useRef, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Layout({ children }) {
  const themeRef = useRef();
  const { data } = useContext(ThemeContext);
  const { handleTheme, theme } = data;

  return (
    <>
      <>
        <header
          id='header'
          style={
            theme === 'light'
              ? { boxShadow: '0px 2px 10px #0f0f0f' }
              : { background: '#1f1f1f', boxShadow: '0px 2px 10px #0f0f0f' }
          }
        >
          <div className='header-item logo-container'>
            <Image
              src='/images/logo-250x123.png'
              alt='nelson gamero'
              objectFit='cover'
              layout='fill'
              className={`logo ${theme === 'light' ? '' : 'theme-dark-logo'}`}
              priority
            />
          </div>
          <NavBar />

          <div className='header-item utilities-container'>
            <span
              className='search'
              style={theme === 'light' ? {} : { color: '#ffffff' }}
            >
              <Image
                src='/images/search-solid.svg'
                alt='buscar'
                width={30}
                height={30}
                className={`logo ${
                  theme === 'light' ? '' : 'theme-dark-search'
                }`}
              />
              Buscar
            </span>
            <div className='theme' ref={themeRef}>
              <div
                className={`theme-item ${
                  theme === 'light' ? 'active-theme' : ''
                }`}
              >
                <Image
                  src='/images/moon-solid.svg'
                  alt='dark'
                  width={25}
                  height={25}
                  onClick={handleTheme}
                  className={`logo ${
                    theme === 'light' ? '' : 'theme-dark-icon'
                  }`}
                />
              </div>

              <div
                className={`theme-item ${
                  theme === 'dark' ? 'active-theme' : ''
                }`}
              >
                <Image
                  src='/images/sun-solid.svg'
                  alt='light'
                  width={25}
                  height={25}
                  onClick={handleTheme}
                  className={`logo ${
                    theme === 'light' ? '' : 'theme-dark-icon'
                  }`}
                />
              </div>
            </div>
          </div>
        </header>
        {children}
        <footer
          id='footer'
          style={
            theme === 'light'
              ? {}
              : { background: 'linear-gradient(to left, #434343, #000000)' }
          }
        ></footer>
      </>
    </>
  );
}
