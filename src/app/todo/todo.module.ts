import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { TodoListComponent }    from './todo-list.component';
import { TodoDetailComponent }  from './todo-detail.component';
import { FilterPipe } from './filter.pipe';
import { TodoService } from './todo.service';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  imports: [
    CommonModule,
	FormsModule,
	ReactiveFormsModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoListComponent,
    TodoDetailComponent,
	FilterPipe
  ],
  providers: [ TodoService ]
})
export class TodoModule {}
