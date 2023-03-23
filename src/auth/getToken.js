import { useAuth0 } from '@auth0/auth0-react';
export async function usertoken(){
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
    if (isAuthenticated) {
    const token = await getAccessTokenSilently({
    authorizationParams: {
      audience: 'https://rbm7x5e9gl.execute-api.us-east-1.amazonaws.com/dev', // Value in Identifier field for the API being called.
      scope: 'read:posts', // Scope that exists for the API being called. You can create these through the Auth0 Management API or through the Auth0 Dashboard in the Permissions view of your API.
    }})
    return token
  }
  }