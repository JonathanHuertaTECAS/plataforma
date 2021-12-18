import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/main/home', icon: 'home' },
    { title: 'Productos', url: '/main/productos', icon: 'cart' },
    { title: 'Mi crédito', url: '/main/credito', icon: 'card' },
    { title: 'Sucursal cercana', url: '/main/sucursales', icon: 'map' },
    { title: 'Perfil', url: '/main/perfil', icon: 'person-circle' },
    { title: 'Cerrar sesión', url: '/main/logout', icon: 'power' },
  ];
  public labels = ['Family'];
  constructor() {}
}
