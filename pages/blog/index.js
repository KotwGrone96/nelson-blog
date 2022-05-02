import Layout from '../../layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export default function Blog({ posts }) {
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
              {posts.map(post => {
                return (
                  <Link href={`/blog/${post.slug}`} key={post.slug}>
                    <a
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className='link'
                      style={
                        theme === 'light'
                          ? {}
                          : {
                              color: '#f1f1f1',
                              borderBottom: '1px solid #686868',
                            }
                      }
                    >
                      {post.frontmatter.title}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map(file => {
    const slug = file.replace('.md', '');
    const markdownMeta = fs.readFileSync(path.join('posts', file), 'utf-8');
    const { data: frontmatter } = matter(markdownMeta);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
};
