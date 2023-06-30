import { Type } from "@angular/core";

export class Task{

    public creteDate?: Date;
    public deadlineDate?: Date;

    constructor(
        public ОbjectName:string
        , public TaskName:string
        , public Uid:string
        , public date: string
        , public AuthorId: string
        , public CreatorId: string
        , public EndUserId:string
        , public DeadlineDate: string
        , public TaskInfo:string
        , public AgreeStatys:boolean|null
        , public LinkedTaskId:string
        , public ApprovalList:string[]|null
        , public Comment:string
        , public EnableDeadDateShift:boolean
        , public LayoutType:number
    ){
        this.creteDate = new Date(date);
        this.deadlineDate = new Date(DeadlineDate);
    }
}