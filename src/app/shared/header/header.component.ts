import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logoImage = '../../../assets/images/kayak_current_logo.svg';

  constructor() {}
  ngOnInit() {}
}
