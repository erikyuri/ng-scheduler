import { Injectable } from "@angular/core"
import { MatDialog, MatDialogConfig } from "@angular/material/dialog"
import { ModalOptions } from "./model/shared-model-options.model"
import { ModalData } from "./model/shared-modal.model"
import { ModalService } from "./shared-modal.service"
import { SharedModalComponent } from "./shared-modal.component"
import { first } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class ModalFactoryService<T = undefined> {
    constructor(private dialog: MatDialog) { }

    open(
        dialogData: ModalData<T>,
        options: ModalOptions = { width: 500, disableClose: false }
    ): ModalService<T> {
        const dialogRef = this.dialog.open<SharedModalComponent<T>, ModalData<T>>(
            SharedModalComponent,
            {
                ...this.fetchOptions(options),
                data: dialogData
            }
        )

        dialogRef.afterClosed().pipe(first())
        return new ModalService(dialogRef)
    }

    private fetchOptions({
        width,
        disableClose
    }: ModalOptions): Pick<
        MatDialogConfig<ModalData<T>>,
        'width' | 'disableClose'
    > {
        return {
            width: `${width}px`,
            disableClose
        }
    }
}