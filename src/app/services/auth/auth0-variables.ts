interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
    audience: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
        clientID: '1HzwrsBfc540vPQRlvkjeSzxtCg5Gb6Q',
        domain: 'zoomerians.eu.auth0.com',
        callbackURL: 'http://localhost:4200/callback',
        audience: 'http://localhost:3001/api'

  };