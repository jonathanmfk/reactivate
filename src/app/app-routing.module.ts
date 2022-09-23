import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { TherapyComponent } from './therapy/therapy.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'therapy', component: TherapyComponent },
	/* { path: 'inicio', component: HomeComponent },
	{ path: 'inicio', component: HomeComponent },
	{ path: 'inicio', component: HomeComponent }, */
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
