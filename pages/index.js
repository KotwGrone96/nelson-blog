import Head from 'next/head';
import Banner from '../components/Banner';
import Layout from '../layout/Layout';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

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
              <div className='acticle'>Extensiones VS Code</div>
              <div className='acticle'>Semántica HTML</div>
              <div className='acticle'>Css tips and tricks</div>
              <div className='acticle'>Entendiendo Javascript</div>
              <div className='acticle'>GIT básico</div>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}
