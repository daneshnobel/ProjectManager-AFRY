export  class FieldBase<T> {
    value: T|undefined;
    ID: string;
    label: string;
    required: boolean;
   
    controlType: string;
    type: string;
    step:string;
    symbol:string;
  
    constructor(options: {
        value?: T;
        ID?: string;
        label?: string;
        required?: boolean;
       
        controlType?: string;
        type?: string;
        step?:string;
        symbol?:string;
       
      } = {}) {
      this.value = options.value;
      this.ID = options.ID || '';
      this.label = options.label || '';
      this.required = !!options.required;
     
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.step = options.step || '1';
      this.symbol = options.symbol || '';
     
    }
  }
