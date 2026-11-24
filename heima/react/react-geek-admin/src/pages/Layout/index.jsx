import { request } from '@/utils';
import { useEffect } from 'react';

const Layout = () => {
  useEffect(() => {
    request.get('/profile');
  }, []);
  return <div>this is layout</div>;
};

export default Layout;
