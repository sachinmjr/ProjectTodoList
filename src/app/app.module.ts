import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }  from '@angular/http';

import { AppComponent }  from './app.component';
import { TodoModule } from './todo/todo.module';
import { PageNotFoundComponent }  from './notfound/pageNotFound.component';
import { AboutComponent }  from './about/about.component';

import { routing }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, TodoModule, routing ],
  declarations: [ AppComponent, PageNotFoundComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
