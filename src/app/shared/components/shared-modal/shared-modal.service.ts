import { Optional, TemplateRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { first } from 'rxjs/operators';

// Components
import { SharedModalComponent } from './shared-modal.component';

type DialogRef<T> = MatDialogRef<SharedModalComponent<T>>;

export class ModalService<T = undefined> {
    opened$ = this.dialogRef.afterOpened().pipe(first());

    constructor(private dialogRef: DialogRef<T>) { }

    get context() {
        return this.dialogRef.componentInstance.data.context;
    }

    close() {
        this.dialogRef.close();
    }

    setHeaderText(headerText: string): void {
        this.dialogRef.componentInstance.data.headerText = headerText;
    }

    setTemplate(template: TemplateRef<any>): void {
        this.dialogRef.componentInstance.data.template = template;
    }
}