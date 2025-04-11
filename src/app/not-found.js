import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = '/404.html';
  }, []);

  return null;
}
