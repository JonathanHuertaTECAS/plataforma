import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ruteNav = this.activatedRoute.snapshot['_urlSegment'].segments[0].path

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
