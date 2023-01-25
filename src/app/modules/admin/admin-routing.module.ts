import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/routes/routes.module').then((m) => m.RoutesModule),
      },
      {
        path: 'routes',
        loadChildren: () =>
          import('./views/routes/routes.module').then((m) => m.RoutesModule),
      },
      {
        path: 'statistics',
        loadChildren: () =>
          import('./views/statistics/statistics.module').then(
            (m) => m.StatisticsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
