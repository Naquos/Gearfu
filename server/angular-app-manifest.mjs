
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://naquos.github.io/wakfu-builder/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/wakfu-builder"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23604, hash: '6bb28df1c93ade668a50b4356a5278466486e084e264d0eb1a3ad2c58bc4b8f9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17178, hash: 'ad5e0b6110cf20939e8df2a50c2ca54ff796b9ff1fc476201e9953550ef5e7c5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 110494, hash: '01ff67ba33f47049fbf5145588729e698a1f73da986f3e4649ce314fbb09ae86', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
