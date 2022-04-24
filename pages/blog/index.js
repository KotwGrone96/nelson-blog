import Layout from '../../layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
export default function Blog() {
  const { data } = useContext(ThemeContext);
  const { theme } = data;

  const handleMouseEnter = e => {
    const link = e.target;
    if (theme === 'light') {
      link.style.backgroundColor = '#dfdfdf';
      return;
    }
    link.style.backgroundColor = '#686868';
  };

  const handleMouseLeave = e => {
    const link = e.target;
    link.style.backgroundColor = 'transparent';
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Blog de Nelson | Blog</title>
        </Head>
        <main
          id='blog-page'
          style={
            theme === 'light'
              ? {}
              : { backgroundColor: '#1f1f1f', color: '#ffffff' }
          }
        >
          <div id='main-content'>
            <div className='blog-presentation'>
              <h1>Blog</h1>
              <p>
                Espero que alguno de los siguientes artículos sea de ayuda para
                tu aprendizaje o proyecto. Sentite libre de tomar todo lo que
                necesités.
              </p>
            </div>
            <div className='articles-links'>
              <Link href='/blog/articulo1'>
                <a
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className='link'
                  style={
                    theme === 'light'
                      ? {}
                      : { color: '#f1f1f1', borderBottom: '1px solid #686868' }
                  }
                >
                  Artículo 1
                </a>
              </Link>
              <Link href='/blog/articulo2'>
                <a
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className='link'
                  style={
                    theme === 'light'
                      ? {}
                      : { color: '#f1f1f1', borderBottom: '1px solid #686868' }
                  }
                >
                  Artículo 2
                </a>
              </Link>
              <Link href='/blog/articulo3'>
                <a
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className='link'
                  style={
                    theme === 'light'
                      ? {}
                      : { color: '#f1f1f1', borderBottom: '1px solid #686868' }
                  }
                >
                  Artículo 3
                </a>
              </Link>
              <Link href='/blog/articulo4'>
                <a
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className='link'
                  style={
                    theme === 'light'
                      ? {}
                      : { color: '#f1f1f1', borderBottom: '1px solid #686868' }
                  }
                >
                  Artículo 4
                </a>
              </Link>
              <Link href='/blog/articulo5'>
                <a
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className='link'
                  style={
                    theme === 'light'
                      ? {}
                      : { color: '#f1f1f1', borderBottom: '1px solid #686868' }
                  }
                >
                  Artículo 5
                </a>
              </Link>
              <Link href='/blog/articulo6'>
                <a
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className='link'
                  style={
                    theme === 'light'
                      ? {}
                      : { color: '#f1f1f1', borderBottom: '1px solid #686868' }
                  }
                >
                  Artículo 6
                </a>
              </Link>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
