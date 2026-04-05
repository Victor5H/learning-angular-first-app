import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo.type';
@Injectable({
  providedIn: 'root',// injected in root, if removed will have to import this service in component individually
})
export class TodosService {
  todosArray :Array<TodoItem> = [
    {
      title:"Gym",
      id:0,
      userId:1,
      completed:false
    },
    {
      title:"Car Wash",
      id:1,
      userId:1,
      completed:false
    },
    {
      title:"Buy Groceries",
      id:2,
      userId:1,
      completed:false
    },
    {
      title:"Complete Assignment",
      id:3,
      userId:1,
      completed:false
    }
  ]
}
