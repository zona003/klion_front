export class Invoice{
    constructor(
        public ОbjectName:string
        , public TaskName:string
        , public Uid:string
        , public Date: Date
        , public Author: string
        , public AuthorId: string
        , public EndUser:string
        , public EndUserId:string
        , public DeadlineDate: Date
        , public TaskInfo:string
        , public AgreeStatys:boolean
        , public LinkedTaskId:string
        , public ApprovalList:string|null
        , public Comment:string
        , public EnableDeadDateShift:boolean
        , public LayoutType:number
        , public Kontragent:string
        , public Organization:string
        , public Sum:string
        , public PaymentDate:Date
        , public PaymentPurpose:string
    )
    {}
}