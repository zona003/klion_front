export class Task{
    constructor(
        public expDate : Date
        , public title: string
        , public counteragent : string
        , public comment : string
        , public sum: number
        , public author: string
        , public createDate : Date
        )
        { }
}