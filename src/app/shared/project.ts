import { FieldBase } from "./field-base";

export class Project {
    ID : number;
    title : string;
    tasks: tasks[];

    constructor(options:any){
        this.ID = options.ID;
        this.title = options.title;
        this.tasks = options.tasks;
    }

}

export class tasks{
    public time:string;
    public fields: FieldBase<string>[]
    constructor(options:any){
        this.time = options.time;
        this.fields = options.fields ||  [];
    }
}
