import 'rxjs/add/operator/switchMap';
import { Component } from '@angular/core';
import { Todo, TodoService } from './todo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'todoDetail',
  templateUrl: './todo-detail.component.html',
  providers: [TodoService]
})
export class TodoDetailComponent  {
	todo: any;
	constructor (
		private route: ActivatedRoute,
	    private router: Router,
	    private service: TodoService
	) {
		this.route.params.switchMap((params: Params) =>
			this.service.getTodoDetail(+params['id']))
	      		.subscribe(todo => {
					this.todo = todo;
				});
	}

	gotoTodolist () {
		this.router.navigate(['/todo', {}]);
	}
}
