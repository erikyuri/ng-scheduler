import { TemplateRef } from '@angular/core';

export interface ModalData<T = undefined> {
    headerText: string;
    template: TemplateRef<any> | null;
    context?: T;
}