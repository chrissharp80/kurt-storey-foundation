import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = '/404.html';
  }, []);

  return null;
}
