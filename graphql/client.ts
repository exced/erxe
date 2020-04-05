import { graphql } from '@octokit/graphql';

function client(token: string) {
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${token}`,
    },
  });

  return graphqlWithAuth;
}

export default client;
