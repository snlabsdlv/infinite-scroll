import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logoImage = '../../../assets/images/kayak_current_logo.svg';

  constructor( public router: Router) { }

  ngOnInit() { }

}
