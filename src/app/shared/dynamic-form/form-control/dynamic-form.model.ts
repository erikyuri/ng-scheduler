export class DynamicForm<T> {
    value: T | undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    class: string;
    mask: string;
    options: { label: string, value: T }[];

    constructor(
        options: {
            value?: any;
            key?: string;
            label?: string;
            required?: boolean;
            order?: number;
            controlType?: string;
            type?: string;
            class?: string;
            mask?: string;
            options?: { label: string, value: T }[];
        } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.class = options.class || '';
        this.mask = options.mask || '';
        this.options = options.options || [];
    }
}