import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout.routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [CommonModule, LayoutRoutingModule],
  providers: []
})
export class LayoutModule {}
