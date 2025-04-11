import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/404.html';
    }
  }, []);

  return (
    <>
      <Head>
        <title>Page Not Found - Kurt Storey Foundation</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Head>
      <div style={{ textAlign: 'center', padding: '50px 20px' }}>
        <h1>404 - Page Not Found</h1>
        <p>Redirecting to error page...</p>
      </div>
    </>
  );
}
