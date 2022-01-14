import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
	declarations: [ NavBarComponent ],
	imports: [ CommonModule, MatIconModule, MatToolbarModule, MatButtonModule, FlexLayoutModule ],
	exports: [ NavBarComponent ]
})
export class SharedComponentModule {}
