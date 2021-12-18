import {Component} from '@angular/core';

@Component({
	selector: 'lateral',
	templateUrl: './lateral.html'

})

export class LateralComponent{
	public titulo: string;

	constructor(){
		this.titulo = 'Menulateral';
	}

	ngOnInit(){
		console.log('Se a cargado el componente lateral.componente.ts');
	}
}