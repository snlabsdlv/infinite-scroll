import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListviewRoutingModule } from './listview.routing.module';
import { ListviewRowComponent } from './listview-row/listview-row.component';
import { ListviewComponent } from './listview.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ShareDataService } from 'src/app/services/share.service';

@NgModule({
  declarations: [ListviewComponent, ListviewRowComponent],
  imports: [CommonModule, ListviewRoutingModule, NgxSkeletonLoaderModule],
  providers: []
})
export class ListviewModule {}
