export class Task{
    constructor(
        public ОbjectName:string
        , public TaskName:string
        , public Uid:string
        , public Date: Date
        , public AuthorId: string
        , public CreatorId: string
        , public EndUserId:string
        , public DeadlineDate: Date
        , public TaskInfo:string
        , public AgreeStatys:boolean
        , public LinkedTaskId:string
        , public ApprovalList:string|null
        , public Comment:string
        , public EnableDeadDateShift:boolean
        , public LayoutType:number
    ){}
}