import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const useRedirectIfAuthenticated = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('/api/verify-token', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.status === 200) {
            router.push('/feed/logged'); 
          }
        } catch (error) {
          console.error('Token verification failed:', error);
          localStorage.removeItem('token');
        }
      }
    };

    checkAuth();
  }, [router]);
};

export default useRedirectIfAuthenticated;