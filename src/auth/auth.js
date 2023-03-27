import { useAuth0 } from '@auth0/auth0-react';
const endpoint = process.env.REACT_APP_APIGATEWAY_ENDPOINT;


export const useAuth0Token = () => {
    const { getAccessTokenSilently } = useAuth0();
    const getAccessTokenWithAuth0 = async () => {
      const audience = endpoint;
      const scope = 'read:posts';
      return await getAccessTokenSilently({ audience, scope });
    }
    return { getAccessTokenWithAuth0 };
  }
  