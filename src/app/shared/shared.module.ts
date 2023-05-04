import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LibModule } from '../_lib/lib.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { RouterModule } from '@angular/router';
import { SharedCalendarComponent } from './components/shared-calendar/shared-calendar.component';
import { SharedModalComponent } from './components/shared-modal/shared-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SharedCalendarComponent,
    SharedModalComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LibModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  exports: [
    LibModule,
    SharedCalendarComponent,
    SharedModalComponent,
    DynamicFormComponent,
  ],
  entryComponents: [SharedModalComponent]
})
export class SharedModule { }
