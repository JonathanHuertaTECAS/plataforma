import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycredit',
  templateUrl: './mycredit.component.html',
  styleUrls: ['./mycredit.component.scss'],
})
export class MycreditComponent implements OnInit {
  sucursal: boolean;
  transfer: boolean;
  odp: boolean;
  constructor() { }

  ngOnInit() {
    this.sucursal = false;
    this.transfer = false;
    this.odp = true;
  }

  tabpane(medio: string) {
    if (medio === 'sucursal') {
      this.sucursal = true;
      this.transfer = false;
      this.odp = false;
    }
    else if (medio === 'transfer') {
      this.transfer = true;
      this.sucursal = false;
      this.odp = false;
    }
    else {
      this.odp = true;
      this.sucursal = false;
      this.transfer = false;
    }
  }

}
