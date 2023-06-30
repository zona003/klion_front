export class Task{
    constructor(
        public ОbjectName:string
        , public TaskName:string
        , public Uid:string
        , public Date: string
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
    ){}
}