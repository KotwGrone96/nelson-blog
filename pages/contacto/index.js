import Layout from '../../layout/Layout';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Image from 'next/image';
import sendForm from './sendForm';

export default function Contact() {
  const { data } = useContext(ThemeContext);
  const { theme } = data;

  const initialForm = {
    name: '',
    email: '',
    subject: '',
    content: '',
  };
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    const $formInputs = Object.values(document.querySelectorAll('.form-input'));
    if (theme === 'light') {
      $formInputs.forEach(input => {
        input.style.backgroundColor = '#1f1f1f';
      });
    } else {
      $formInputs.forEach(input => {
        input.style.backgroundColor = '#000000';
      });
    }
  }, [theme]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    sendForm(e.target, formData);
    setFormData(initialForm);
  };

  return (
    <>
      <Head>
        <title>Blog de Nelson | Contacto</title>
        <meta
          name='description'
          content='En caso que tengas dudas de algo o simplemente quieras aportar
              contenido al blog te estaré dejando varias maneras de ponernos en
              contacto. Sentite libre de escribirme cuando gustes 🙂'
        />
      </Head>
      <Layout>
        <main
          id='contact-page'
          style={
            theme === 'light'
              ? {}
              : { backgroundColor: '#1f1f1f', color: '#ffffff' }
          }
        >
          <div id='main-content'>
            <div className='contact-text'>
              <h1>Contacto</h1>
              <p>
                En caso que tengas dudas de algo o simplemente quieras aportar
                contenido al blog te estaré dejando varias maneras de ponernos
                en contacto. Sentite libre de escribirme cuando gustes 🙂
              </p>
            </div>
            <section className='social-links'>
              <h2>Redes Sociales</h2>
              <div className='links'>
                <a href='#' target='_blank'>
                  <Image
                    src='/images/whatsapp.svg'
                    alt='whats app'
                    width={30}
                    height={30}
                    className='img'
                  />
                </a>
                <a href='#' target='_blank'>
                  <Image
                    src='/images/telegram.svg'
                    alt='telegram'
                    width={30}
                    height={30}
                    className='img'
                  />
                </a>
                <a href='#' target='_blank'>
                  <Image
                    src='/images/linkedin.svg'
                    alt='whats app'
                    width={30}
                    height={30}
                    className='img'
                  />
                </a>
                <a href='#' target='_blank'>
                  <Image
                    src='/images/email.svg'
                    alt='whats app'
                    width={30}
                    height={30}
                    className='img'
                  />
                </a>
              </div>
            </section>
            <section className='form-container'>
              <h2>Mensaje</h2>
              <form
                id='form'
                action='https://formspree.io/f/mayvavaw'
                method='POST'
                onSubmit={handleSubmit}
              >
                <input
                  className='form-input'
                  type='text'
                  placeholder='Nombre'
                  name='name'
                  onChange={handleChange}
                />
                <input
                  className='form-input'
                  type='email'
                  name='email'
                  placeholder='E-mail'
                  onChange={handleChange}
                />
                <input
                  className='form-input'
                  type='text'
                  name='subject'
                  placeholder='Asunto'
                  onChange={handleChange}
                />
                <textarea
                  className='form-input'
                  name='content'
                  placeholder='Escriba aquí'
                  onChange={handleChange}
                ></textarea>
                <input className='submit' type='submit' value='Enviar' />
              </form>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}
