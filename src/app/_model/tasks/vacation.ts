export class Vacation{
    constructor(
        public ObjectName:string
        , public TaskName:string
        , public Uid:string
        , public Date: string
        , public Author: string
        , public AuthorId: string
        , public EndUser:string|null
        , public EndUserId:string
        , public DeadlineDate: string
        , public TaskInfo:string
        , public AgreeStatys:boolean|null
        , public LinkedTaskId:string
        , public ApprovalList:string[]|null
        , public Comment:string
        , public EnableDeadDateShift:boolean
        , public LayoutType:number
        , public PeriodStart:string
        , public PeriodEnd:string
        , public HolidayMayker:string
        , public Substitutional:string
    )
    {}
}