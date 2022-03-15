import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailviewComponent } from '../detailview/detailview.component';
import { DetailviewRoutingModule } from './detailview.routing.module';

@NgModule({
  declarations: [
    DetailviewComponent,
  ],
  imports: [
    CommonModule,
    DetailviewRoutingModule,

  ],
  providers: [],
})
export class DetailviewModule { }

