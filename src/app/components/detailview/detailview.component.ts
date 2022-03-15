import { Component, OnInit } from '@angular/core';

import { ShareDataService } from 'src/app/services/share.service';
import { Airline } from 'src/app/interfaces/airline.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss'],
})
export class DetailviewComponent implements OnInit {
  cdnUrlPath = environment.CDN_IMG_URL;

  airlineDetails!: Airline;
  constructor(private shareService: ShareDataService) {}

  ngOnInit(): void {
    this.shareService.rowDetails$.subscribe((item: Airline) => {
      console.log('DetailviewComponent item ', item);
      this.airlineDetails = { ...item };
    });
  }

  removeUrlPrefix(url: string) {
    console.log('url url ', url);
    const hostname = new URL(url).hostname;
    console.log('hostname ', hostname);
    return hostname;
  }
}
