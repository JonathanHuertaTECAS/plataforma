import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-native-slide',
  templateUrl: './native-slide.component.html',
  styleUrls: ['./native-slide.component.scss'],
})
export class NativeSlideComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/main/home', icon: 'home' },
   // { title: 'Productos', url: '/main/productos', icon: 'cart' },
    { title: 'Sucursal cercana', url: '/main/sucursales', icon: 'map' },
  ];
  public labels = ['Family'];
  img: string;
  public menuSlide: boolean;
  constructor() { }

  ngOnInit() {
    this.menuSlide = true;
    this.img = '../../../assets/libs/inher/images/logo-pal-negocio-lateral.png';
  }
  closeSlide() {
    if (this.menuSlide) {
      this.menuSlide = false;
    }
    else {
      this.menuSlide = true;
    }
  }
}
