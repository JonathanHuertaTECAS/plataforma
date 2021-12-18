import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NativeSlideComponent } from '../native-slide/native-slide.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})

export class MainPage implements OnInit {
  public main: string;
  mobile: boolean;
  icon: boolean;
  slider: boolean;
  product: string;
  year: string;
  day: string;
  weekday: string;
  month: string;
  name: string;
  capitalNames: string;
  constructor(private activatedRoute: ActivatedRoute, private slideMenu: NativeSlideComponent) {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const query = window.matchMedia('(max-width: 767px)');
    if (query.matches) {
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }
  ngOnInit() {
    const query = window.matchMedia('(max-width: 767px)');
    if (query.matches) {
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
    this.name = 'Jonathan Huerta';
    const arrayNames = this.name.split(' ');
    this.capitalNames = arrayNames[0].slice(0,arrayNames.length-1)+arrayNames[1].slice(0,arrayNames.length-1);
    this.icon = true;
    this.product = 'Pal’ Negocio';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.weekday = new Date().toLocaleDateString(undefined,{weekday:'long'});
    this.day = ' ' + new Date().getDate();
    this.month =  new Date().toLocaleDateString(undefined,{month:'long'});
    this.year = ' ' + new Date().getFullYear();
    this.main = this.activatedRoute.snapshot.paramMap.get('id');
  }
  slide() {
    this.slideMenu.closeSlide();
  }
}
