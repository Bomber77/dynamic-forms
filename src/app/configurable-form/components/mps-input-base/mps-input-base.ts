export interface MpsInputConfig<T> {
  value?: T;
  key?: string;
  label?: string;
  required?: boolean;
  order?: number;
  controlType?: string;
}

export class MpsInputBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;

  constructor(options: MpsInputConfig<T> = {}) {
    this.key = options.key || "";
    this.label = options.label || "";
    this.required = options.required || false;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || "";
    this.value = options.value;
  }
}
