import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { SharedCalendarService } from './shared-calendar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleForm } from './schedule-form.model';

@Component({
  selector: 'app-shared-calendar',
  templateUrl: './shared-calendar.component.html',
  styleUrls: ['./shared-calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SharedCalendarService]
})
export class SharedCalendarComponent {
  form: FormGroup | any;
  schedule: ScheduleForm | any;
  view: CalendarView = CalendarView.Month;
  viewDate = this.calendarService.viewDate;
  activeDayIsOpen = this.calendarService.activeDayIsOpen;
  events = this.calendarService.events;
  refresh = this.calendarService.refresh;
  @ViewChild("userDialogTemplate") userDialogTemplate: TemplateRef<any> | any;


  constructor(
    private calendarService: SharedCalendarService,
    protected formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      start: [, [Validators.required]],
      title: [, [Validators.required]],
      end: [],
      primary: [, [Validators.required]],
      secondary: []
    })
  }

  closeDialog() {
    this.calendarService.closeDialog();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.calendarService.dayClicked({ date, events });
    this.viewDate = this.calendarService.viewDate;
    this.activeDayIsOpen = this.calendarService.activeDayIsOpen;
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.calendarService.eventTimesChanged({ event, newStart, newEnd } as CalendarEventTimesChangedEvent);
    this.events = this.calendarService.events;
  }

  handleEvent(action: string, event: CalendarEvent, userDialogTemplate: TemplateRef<any> | null): void {
    
    this.calendarService.handleEvent(action, event, userDialogTemplate);
  }

  addEvent(): void {
    this.calendarService.addEvent();
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.calendarService.deleteEvent(eventToDelete);
  }

  closeOpenMonthViewDay() {
    this.calendarService.closeOpenMonthViewDay();
  }
}