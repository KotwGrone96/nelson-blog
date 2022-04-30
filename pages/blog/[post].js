import Layout from '../../layout/Layout';
// import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function Post({ post }) {
  // const router = useRouter();
  // const { post } = router.query;
  const { data } = useContext(ThemeContext);
  const { theme } = data;
  return (
    <>
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
            <h1>{post.title}</h1>
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:5000/blog-de-nelson');
  const posts = await res.json();
  const paths = posts.map(path => {
    return {
      params: { post: path.name },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch('http://localhost:5000/blog-de-nelson');
  const posts = await res.json();
  const post = posts.find(e => e.name === params.post);
  return {
    props: {
      post,
    },
  };
};
