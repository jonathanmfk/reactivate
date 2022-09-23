import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Section {
	name: string;
	updated: Date;
  icon: string;
  rute: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  activeLinkIndex = -1;
  navLinks: any[] = new Array<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
			this.activeLinkIndex = this.navLinks.indexOf(
				this.navLinks.find((tab) => tab.link === '.' + this.router.url)
			);
		});
  }
  title = 'reactivate';
	showFiller = false;
	therapies: Section[] = [
		{
			name: 'Terapía 1',
			updated: new Date('1/1/22'),
      icon: 'personal_injury',
      rute: 'therapy1'
		},
		{
			name: 'Terapía 2',
			updated: new Date('1/17/22'),
      icon: 'sports_handball',
      rute: ''
		},
		{
			name: 'Terapía 3',
			updated: new Date('1/28/22'),
      icon: 'elderly',
      rute: ''
		}
	];
	experience: Section[] = [
		{
			name: 'Portafolio',
			updated: new Date('2/20/22'),
      icon: 'portrait',
      rute: ''
		}
	];
  contact: Section[] = [
		{
			name: 'Redes Sociales',
			updated: new Date('2/20/22'),
      icon: 'contact_page',
      rute: ''
		}
	];

  _goToTherapy(therapyRute: any) {
		this.router.navigate(['/', therapyRute]);
  }

  hola2(x: any) {
    console.log(x);
  }

}
