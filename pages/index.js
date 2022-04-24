import Head from 'next/head';
import Banner from '../components/Banner';
import Layout from '../layout/Layout';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Link from 'next/link';

export default function Home() {
  const { data } = useContext(ThemeContext);
  const { theme } = data;

  return (
    <>
      <Head>
        <title>Blog de Nelson</title>
        <meta
          name='description'
          content='Blog para ayudar a web developers que recién están empezando'
        />
      </Head>
      <Layout>
        <Banner />
        <main
          id='main-home'
          style={
            theme === 'light'
              ? {}
              : { backgroundColor: '#1f1f1f', color: '#ffffff' }
          }
        >
          <div id='main-content'>
            <div className='home-presentation'>
              <p>
                <span className='presentation-slogan'>{`" Lo simple es lo importante "`}</span>{' '}
                <br />
                Muchas veces cuando empezamos algo nos sentimos derrotadxs ante
                obstáculos que no podemos resolver. Tendemos a pensar y
                complejizar de más una salida que muchas veces radica en lo
                sencillo. <br /> Es por eso que quiero aportar mi granito de
                arena para todxs aquellxs que estén empezando en el maravilloso
                mundo del desarrollo web. Acá encontrarás todo lo que me ayudó y
                me sigue ayudando día a día. De paso te comparto varias cosas
                que me hubiese gustado saber cuando empecé este camino. <br />
                Espero que pueda ser de ayuda para vos y recordá{' '}
                <span className='presentation-tip'>
                  practicar todos los días 🙂{' '}
                </span>
              </p>
            </div>
            <section id='articles-wall'>
              <Link href='/'>
                <a className='article'>
                  <h3>Extensiones para Visual Studio Code</h3>
                </a>
              </Link>
              <Link href='/'>
                <a className='article'>
                  <h3>Css tips and tricks</h3>
                </a>
              </Link>
              <Link href='/'>
                <a className='article'>
                  <h3>Entendiendo Javascript</h3>
                </a>
              </Link>
              <Link href='/'>
                <a className='article'>
                  <h3>Entendiendo Javascript</h3>
                </a>
              </Link>
              <Link href='/'>
                <a className='article'>
                  <h3>La importancia de GIT (básico)</h3>
                </a>
              </Link>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}
