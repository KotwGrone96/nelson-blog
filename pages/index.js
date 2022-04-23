import Head from 'next/head';
import Banner from '../components/Banner';
import Layout from '../layout/Layout';

export default function Home() {
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
      </Layout>
    </>
  );
}
