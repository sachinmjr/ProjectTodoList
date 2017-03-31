import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<div class="container-fluid">
	  	<nav class="navbar navbar-default topMargin">
		<div class="container-fluid">
			<ul class="nav navbar-nav">
				<li><a href="">Home</a></li>
				<li> <a href="about">About project</a></li>
			</ul>
		</div>
		</nav>
		<router-outlet></router-outlet>
	</div>
	`,
})
export class AppComponent  {}
