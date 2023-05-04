
export class ScheduleForm {

    id?: string | number;
    start?: Date;
    end?: Date;
    title?: string;
    color?: any;
    actions?: any;
    allDay?: boolean;
    cssClass?: string;
    resizable?: {
        beforeStart?: boolean;
        afterEnd?: boolean;
    };
    draggable?: boolean;
    meta?: any;


    constructor(
        start: Date,
        end: Date,
        title: string,
        color: any,
    ) {
        this.start = start,
            this.end = end,
            this.title = title,
            this.color = color
    }
}