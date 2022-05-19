import Layout from '../../layout/Layout';
import Head from 'next/head';
import { useContext, useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Image from 'next/image';
import sendForm from './sendForm';

export default function Contact() {
  const { data } = useContext(ThemeContext);
  const { theme } = data;
  const $name = useRef(null);
  const $email = useRef(null);
  const $subject = useRef(null);
  const $content = useRef(null);

  const nameRegex = /^([a-zñáéíóúA-ZÁÉÍÓÚÑ]+[\s]?)+[A-Za-zñÑáéíóúÁÉÍÓÚ]+$/;
  const subjectRagex =
    /^([a-zñáéíóúA-ZÁÉÍÓÚÑ0-9-_]+[\s]?)+[A-Za-zñÑáéíóúÁÉÍÓÚ0-9]+$/;
  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const contentRagex = /^.{4,256}$/;

  const initialForm = {
    name: '',
    email: '',
    subject: '',
    content: '',
  };
  const validationForm = {
    name: true,
    email: true,
    subject: true,
    content: true,
  };
  const [formData, setFormData] = useState(initialForm);
  const [validation, setValidation] = useState(validationForm);

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
    if (e.target.name === 'name') {
      nameRegex.test($name.current.value)
        ? setValidation({ ...validation, name: true })
        : setValidation({ ...validation, name: false });
      return;
    }
    if (e.target.name === 'email') {
      emailRegex.test($email.current.value)
        ? setValidation({ ...validation, email: true })
        : setValidation({ ...validation, email: false });
      return;
    }
    if (e.target.name === 'subject') {
      subjectRagex.test($subject.current.value)
        ? setValidation({ ...validation, subject: true })
        : setValidation({ ...validation, subject: false });
      return;
    }
    if (e.target.name === 'content') {
      contentRagex.test($content.current.value)
        ? setValidation({ ...validation, content: true })
        : setValidation({ ...validation, content: false });
      return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, content, subject, email } = validationForm;
    if (name && content && subject && email) {
      sendForm(e.target, formData);
      setFormData(initialForm);
      return;
    }
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
                <a
                  href='https://wa.me/51969792533'
                  rel='noreferrer'
                  target='_blank'
                >
                  <Image
                    src='/images/whatsapp.svg'
                    alt='whats app'
                    width={30}
                    height={30}
                    className='img'
                  />
                </a>
                <a
                  href='https://t.me/Nelson_Grone'
                  rel='noreferrer'
                  target='_blank'
                >
                  <Image
                    src='/images/telegram.svg'
                    alt='telegram'
                    width={30}
                    height={30}
                    className='img'
                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/nelson-gamero-hidrugo-944b39232/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <Image
                    src='/images/linkedin.svg'
                    alt='linkedin'
                    width={30}
                    height={30}
                    className='img'
                  />
                </a>
                <a
                  href='mailto:gamero.nelson96@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image
                    src='/images/email.svg'
                    alt='email'
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
                  required
                  maxLength='30'
                  id='name'
                  ref={$name}
                />
                {!validation.name ? (
                  <label htmlFor='name' style={{ color: '#f00' }}>
                    Solo mayúsculas, minúsculas y un espacio entre palabras
                  </label>
                ) : (
                  <></>
                )}
                <input
                  className='form-input'
                  type='email'
                  name='email'
                  placeholder='E-mail'
                  onChange={handleChange}
                  required
                  maxLength='30'
                  id='email'
                  ref={$email}
                />
                {!validation.email ? (
                  <label htmlFor='name' style={{ color: '#f00' }}>
                    Por favor ingresar un E-mail válido
                  </label>
                ) : (
                  <></>
                )}
                <input
                  className='form-input'
                  type='text'
                  name='subject'
                  placeholder='Asunto'
                  onChange={handleChange}
                  required
                  maxLength='30'
                  id='subject'
                  ref={$subject}
                />
                {!validation.subject ? (
                  <label htmlFor='subject' style={{ color: '#f00' }}>
                    Solo mayúsculas, minúsculas, números y un espacio entre
                    palabras
                  </label>
                ) : (
                  <></>
                )}
                <textarea
                  className='form-input'
                  name='content'
                  placeholder='Escriba aquí'
                  onChange={handleChange}
                  maxLength='256'
                  required
                  id='content'
                  ref={$content}
                ></textarea>
                {!validation.content ? (
                  <label htmlFor='content' style={{ color: '#f00' }}>
                    Mín. 4 caracteres, máx. 256 caracteres
                  </label>
                ) : (
                  <></>
                )}
                <input className='submit' type='submit' value='Enviar' />
              </form>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}
