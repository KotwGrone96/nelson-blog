import Layout from '../../layout/Layout';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export default function Post({ frontmatter: { title }, content }) {
  const { data } = useContext(ThemeContext);
  const { theme } = data;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='posts' />
      </Head>
      <Layout>
        <main
          id='post-page'
          style={
            theme === 'light'
              ? {}
              : {
                  backgroundColor: '#1f1f1f',
                  color: '#ffffff',
                }
          }
        >
          <div id='main-content'>
            <div
              className='post'
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            ></div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map(file => {
    const post = file.replace('.md', '');
    return {
      params: { post },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { post } }) => {
  const markdownMeta = fs.readFileSync(
    path.join('posts', post + '.md'),
    'utf-8'
  );
  const { data: frontmatter, content } = matter(markdownMeta);
  return {
    props: {
      frontmatter,
      content,
    },
  };
};
