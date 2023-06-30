import { Injectable, OnInit } from "@angular/core";
import { Task } from "../_model/tasks/task";
import { Invoice } from "../_model/tasks/invoice";
import { Vacation } from "../_model/tasks/vacation";

@Injectable({
    providedIn: 'root'
})
export class DetailService{

    public tasks: Task[]=[];
    public invoices : Invoice[]=[];
    public vacations: Vacation[]=[];

    constructor(){}


    public set Tasks(task:Task[]){
        this.tasks = task;
    }

    public set Vac(vac:Vacation[]){
        this.vacations = vac;
    }

    public set Inv(inv:Invoice[]){
        this.invoices = inv;
    }
}