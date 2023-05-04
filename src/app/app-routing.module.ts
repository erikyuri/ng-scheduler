import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
      },
      {
        path: 'calendario', loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule)
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
