import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('home/Module').then((m) => m.RemoteEntryModule),
  }
];
