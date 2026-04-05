import { Component, inject, OnInit,signal } from '@angular/core';
import { TodosService } from '../services/todosService'
import { TodoItem } from '../models/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit{
  todoService = inject(TodosService)
  todoArray= signal<Array<TodoItem>>([]);
  ngOnInit(): void {
    // console.log(this.todoService.todosArray)
    this.todoArray.set(this.todoService.todosArray)
    console.log(this.todoArray);
    
  }
}
