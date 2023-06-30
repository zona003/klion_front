import { Invoice } from "./tasks/invoice";
import { Task } from "./tasks/task";
import { Vacation } from "./tasks/vacation";

enum CardType{
    task = "task"
    , vacation = "vacation"
    , invoice = "invoice"
}


export class CardTask{
    constructor(
        public Uid: string
        , public expDate:Date
        , public title:string
        , public counteragent:string
        , public comment: string
        , public createDate: Date
        , public author: string
        , public sum: string
        , public type: CardType
    ){}


    public static FromTask(task: Task){
        return new CardTask(
            task.Uid, 
            new Date(task.DeadlineDate),
            task.TaskName,
            task.EndUserId,
            task.Comment,
            new Date(task.Date),
            task.AuthorId,
            "",
            CardType.task
            );
    }

    public static FromVacation(vac: Vacation){
        return new CardTask(
            vac.Uid,
            new Date(vac.DeadlineDate),
            vac.TaskName,
            vac.AuthorId,
            vac.Comment,
            new Date(vac.Date),
            vac.Author,
            "",
            CardType.vacation
        )
    }

    public static FromInvoice(inv: Invoice){
        return new CardTask(
            inv.Uid,
            new Date(inv.DeadlineDate),
            inv.TaskName,
            inv.Author,
            inv.Comment,
            new Date(inv.Date),
            inv.Author,
            inv.Sum,
            CardType.invoice
        );
    }
}