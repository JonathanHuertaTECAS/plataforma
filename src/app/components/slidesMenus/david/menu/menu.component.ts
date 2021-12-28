import {Component} from '@angular/core';

@Component({
	selector: 'menuinfo',
	templateUrl: './menu.html'

})

export class MenuComponent{
	public titulo: string;

	constructor(){
		this.titulo = 'Menu';
	}

	ngOnInit(){
		console.log('Se a cargado el componente menu.componente.ts');
	}

}