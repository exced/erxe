import { useEffect, useState } from 'react';
import { graphql } from '@octokit/graphql';

import client from '../graphql/client';

type UserMeProps = { token: any };

const UserMe: React.FC<UserMeProps> = ({ token }) => {
  const [res, setRes] = useState('');

  useEffect(() => {
    async function init() {
      const response = await graphql(
        `
          {
            viewer {
              login
            }
          }
        `,
        {
          headers: {
            authorization: `token ${token}`,
          },
        }
      );

      //   const response = await client(token)(`
      //   {
      //     query {
      //       viewer {
      //         login
      //       }
      //     }
      //   }
      // `);

      console.log('RESPONSE');
      console.log(res);

      setRes(JSON.stringify(response));
    }

    init();
  }, []);

  return (
    <div>
      Res:
      <br />
      {res}
    </div>
  );
};

export default UserMe;
