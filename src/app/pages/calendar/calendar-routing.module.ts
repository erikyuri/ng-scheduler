import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar.component';

const CalendarRoutes: Routes = [{ path: '', component: CalendarComponent }];

@NgModule({
  imports: [RouterModule.forChild(CalendarRoutes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
