import { Component } from '@angular/core';
import { Todo, TodoService } from './todo.service';
import 'rxjs/add/operator/debounceTime';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'todoList',
  templateUrl: './todo-list.component.html',
  providers: [TodoService]
})
export class TodoListComponent  {
	todoList: any;
	search: string;
	public filterText: string;
  	public filterPlaceholder: string;
  	public filterInput = new FormControl();

	constructor (private service: TodoService,
			private route: ActivatedRoute,
			private router: Router
		)
	{
		this.filterText = "";
		this.filterPlaceholder = "Filter project by name";

		this.service.getTodoList().subscribe(todoList => {
			this.todoList = todoList;
		});

		this.filterInput.valueChanges.debounceTime(100).subscribe(term => {
	        this.filterText = term;
	      });
	}

	onSelect(todo: any) {
    	this.router.navigate(['/todo', todo.serial]);
  	}
}
