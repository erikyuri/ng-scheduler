import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {
  
  title: string = 'Calendário';

  events: CalendarEvent | any;

  constructor() { }

  ngOnInit(): void {
    
  }



}
