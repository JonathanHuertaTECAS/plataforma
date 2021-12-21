import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss'],
})
export class ContractComponent implements OnInit {
  contract: boolean;
  frontPage: boolean;
  payment: boolean;
  payRef: boolean;
  constructor() { }

  ngOnInit() {
    this.contract = true;
  }
  changeTab(tab: string){
    if(tab === 'contrato'){
      this.contract = true;
      this.frontPage = false;
      this.payment = false;
      this.payRef = false;
    }
    else if(tab === 'caratula'){
      this.frontPage = true;
      this.contract = false;
      this.payment = false;
      this.payRef = false;
    }
    else if(tab === 'pagare'){
      this.payment = true;
      this.frontPage = false;
      this.contract = false;
      this.payRef = false;
    }
    else{
      this.payRef = true;
      this.frontPage = false;
      this.payment = false;
      this.contract = false;
    }

  }
}
