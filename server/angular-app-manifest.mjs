
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23565, hash: 'be457865bab1ed52df8de2f9ee9fab9d14c98aaf36cca7b3e905fd7130e00b2c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17139, hash: '5d55f1f3d43fcb542cae7a657280fd1c260f70daeb19233571c60a40559d79e4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 110452, hash: 'cb5ddf4fe83f2dc4811f60e091d807f1769c65eebf7c0705988be5573e441528', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
