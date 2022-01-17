import { Component, OnInit } from '@angular/core';

export interface DataCard {
	title: string;
	subtitle?: string;
	imgUrl: string;
	body: string;
	buttons?: Array<string>;
}
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	dataCards0: DataCard[] = [
		{
			title: 'Cuerpo Humano',
			subtitle: '',
			imgUrl:
				'https://images.unsplash.com/photo-1567607673554-2048def2c6b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			body:
				'El cuerpo humano es la estructura física y material del ser humano. Es estudiado por diferentes ramas de las ciencias biológicas, dependiendo del nivel organización de la materia que se analice.',
			buttons: [ 'Compartir', 'Ver' ]
		},
		{
			title: 'Radiografía',
			subtitle: 'Técnica diagnóstica',
			imgUrl:
				'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
			body:
				'Sus usos pueden ser tanto médicos, para detectar fisuras en huesos, como industriales en la detección de defectos en materiales y soldaduras, tales como grietas y poros.',
			buttons: [ 'Analizar', 'Ver' ]
		},
		{
			title: 'Pies',
			subtitle: '',
			imgUrl:
				'https://images.unsplash.com/photo-1508387104394-d13e1b497f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80',
			body:
				'El pie es la porción terminal de una extremidad que lleva el peso del cuerpo y esta permite la locomoción y la retromoción. Es una estructura anatómica que se encuentra en muchos vertebrados.',
			buttons: [ 'Compartir', 'Ver' ]
		}
	];

	dataCards1: DataCard[] = [
		{
			title: 'Músculos Humanos',
			subtitle: '',
			imgUrl:
				'https://images.unsplash.com/photo-1515101659865-0902ffaaa6c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
			body:
				'En biología, los músculos son estructuras o tejidos existentes en el ser humano y en la mayoría de los animales que tienen la capacidad de generar movimiento al contraerse y relajarse.',
			buttons: [ 'Compartir', 'Ver' ]
		},
		{
			title: 'Malas Posturas',
			subtitle: 'Columna vertebral',
			imgUrl:
				'https://images.unsplash.com/photo-1501869150797-9bbb64f782fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
			body:
				'Sus usos pueden ser tanto médicos, para detectar fisuras en huesos, como industriales en la detección de defectos en materiales y soldaduras, tales como grietas y poros',
			buttons: [ 'Compartir', 'Ver' ]
		}
	];
}
