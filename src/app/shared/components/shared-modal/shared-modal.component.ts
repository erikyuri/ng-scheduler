import { ChangeDetectionStrategy, Component, Inject, Optional, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  data?: any;
}


@Component({
  selector: 'app-shared-modal',
  template: `
    <h1 mat-dialog-title>Hi {{data.headerText}}</h1>
    <div mat-dialog-content>
      <!-- <p class="dialog-paragraph">{{ data.headerText }}</p> -->
      <ng-container ng-container
        [ngTemplateOutlet]="data.template"
        [ngTemplateOutletContext]="data.context"
        >
      </ng-container>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="close()">Fechar</button>
      <button mat-button cdkFocusInitial>Ok!</button>
    </div>
  `,
  styleUrls: ['./shared-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedModalComponent<T> {


  constructor(
    public dialogRef: MatDialogRef<SharedModalComponent<T>>,
    @Optional() @Inject(MAT_DIALOG_DATA)
    public data: {
      headerText: string
      template: TemplateRef<any>
      context: any
    } | any
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}
