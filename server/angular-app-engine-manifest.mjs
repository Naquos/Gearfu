
export default {
  basePath: 'https://naquos.github.io/wakfu-builder',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
