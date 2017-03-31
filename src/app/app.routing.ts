import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent }  from './todo/todo-list.component';
import { PageNotFoundComponent }  from './notfound/pageNotFound.component';
import { AboutComponent }  from './about/about.component';

const appRoutes: Routes = [
	{
		path: '',
		component: TodoListComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
