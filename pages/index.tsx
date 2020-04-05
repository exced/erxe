import { useRouter } from 'next/router';
import initializeClient from '../graphql/client';
import ClientProvider from '../components/ClientProvider';

function Home(props) {
  const router = useRouter();
  const code = router.query.code;

  if (!code) {
    return (
      <div>
        <a href="/api/github/oauth/login">Login with GitHub</a>
      </div>
    );
  }

  const client = initializeClient(props.token);

  return (
    <div>
      <ClientProvider code={code} />
    </div>
  );
}

export default Home;
