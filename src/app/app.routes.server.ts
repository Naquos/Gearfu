import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: ':id',
    renderMode: RenderMode.Server
  },
  {
    path: ':id/aptitudes',
    renderMode: RenderMode.Server
  },
  {
    path: ':id/sorts',
    renderMode: RenderMode.Server
  },
  {
    path: ':id/enchantements',
    renderMode: RenderMode.Server
  },
  {
    path: ':id/search',
    renderMode: RenderMode.Server
  },
  {
    path: ':id/build',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
