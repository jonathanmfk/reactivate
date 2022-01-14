import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: [ './nav-bar.component.scss' ]
})
export class NavBarComponent implements OnInit {
	@Output() buttonMenu = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	openDrawer() {
		this.buttonMenu.emit();
	}
}
