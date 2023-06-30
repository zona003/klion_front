import { Injectable, OnInit } from "@angular/core";
import { Task } from "../_model/tasks/task";
import { Invoice } from "../_model/tasks/invoice";
import { Vacation } from "../_model/tasks/vacation";
import tasksSample from "D:/Go/task_list_Задача.json";
import vacSample from "D:/Go//task_list_отпуск.json";
import invSample from "D:/Go/task_list_Счет.json";

@Injectable({
    providedIn: 'root'
})
export class DetailService implements OnInit{

    public tasks: Task[]=[];
    public invoices : Invoice[]=[];
    public vacations: Vacation[]=[];

    constructor(){}

    ngOnInit(): void {
        this.tasks = tasksSample;
        this.invoices = invSample;
        this.vacations = vacSample;
    }


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