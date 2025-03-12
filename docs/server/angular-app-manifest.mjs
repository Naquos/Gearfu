
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/wakfu-builder/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/wakfu-builder"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23580, hash: '5354fdf3ad6c25d36b470120d4c561570c592e2b41e87a3830dd806654279b34', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17154, hash: 'd96b436ca4ce5ede8d2ecd0ddbf38c13f1cd2b8833a97c7ec355f27b8ea2bff6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 110470, hash: 'eb564d12f970e74a627c497003936dfa5d52639ee86251b3f6351e1006034911', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
