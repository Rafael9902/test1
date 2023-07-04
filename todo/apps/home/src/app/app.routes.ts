import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./albums/albums.module').then((m) => m.AlbumsModule),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./gallery/gallery.module').then((m) => m.GalleryModule),
  },
];
