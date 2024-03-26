const defaultAuthConfig = {
  cacheLocation: 'localstorage',
  authorizationParams: {
    scope: 'openid profile email',
  },
};

const config = {
  auth: {
    ...defaultAuthConfig,
    domain: 'nmls-statemortgageregistry.cic-demo-platform.auth0app.com',
    clientId: 'YJFQc1399AjHiNZxi4HhuzZ5WJxklJih',
    // UNCOMMENT the following line to test the private API
    audience: ['api://authrocks/'],
    useRefreshTokens: true,
  },
  app: {
    enableSilentAuth: true,
    port: 3000,
  },
  server: {
    permissions: ['authRocks'],
  },
};

export default config;
