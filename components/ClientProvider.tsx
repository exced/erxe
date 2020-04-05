import { useEffect, useState } from 'react';
import { request } from '@octokit/request';

import UserMe from '../components/UserMe';

const ClientProvider: React.FC<any> = ({ code, ...children }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    async function init() {
      // Exchange code for token
      const response = await request(
        `POST ${location.origin}/api/github/oauth/token`,
        {
          code,
        }
      );

      setToken(response.data.token);
    }

    init();
  }, []);

  if (!token) {
    return <h3>Loading...</h3>;
  }

  return <UserMe token={token} />;
};

export default ClientProvider;
