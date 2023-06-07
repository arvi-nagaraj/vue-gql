// apollo.config.js
// for vscode/editor integration
// need to register in apollo studio
module.exports = {
  client: {
    service: {
      name: 'my-app',
      // URL to the GraphQL API
      url: 'http://localhost:4000/graphql',
    },
    includes: ['src/**/*.vue', 'src/**/*.query.ts'],
  },
};
