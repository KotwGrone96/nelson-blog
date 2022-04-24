import Layout from '../../layout/Layout';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function Post() {
  const router = useRouter();
  const { post } = router.query;
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
            <h1>{post}</h1>
          </div>
        </main>
      </Layout>
    </>
  );
}
