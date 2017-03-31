import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

export class Todo {
  constructor(public id: number, public projectName: string) { }
}

@Injectable()

export class TodoService {
	todo: Todo;
	constructor (private http: Http) {
		console.log('TodoService initiated...');
	}

	getTodoList(): Observable<Todo[]> {
		return this.http.get('../app/data/todo.json')
			.map(res => res.json());
	}

	getTodoDetail(id: number | string): Observable<Todo> {
		return this.getTodoList()
            .map(todolist => todolist.find((todo: any) => todo.serial == id));
	}
}
