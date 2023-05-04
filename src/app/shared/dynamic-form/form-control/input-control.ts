import { DynamicForm } from "./dynamic-form.model";

export class Input extends DynamicForm<string> {
    override controlType = 'textbox';
}