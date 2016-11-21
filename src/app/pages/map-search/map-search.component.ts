import { Component } from '@angular/core';

declare var google: any;

@Component({
  selector:'map-page',
  templateUrl:'./map-search.component.html',
  styleUrls: ['./map-search.component.less']
})
export class MapSearchComponent{
  options: any;
  overlays: any[];

  constructor(){
  }

  ngOnInit() {
    this.options = {
      center: {lat: 48.866667, lng: 2.333333},
      zoom: 12,
      streetViewControl: false,
      mapTypeControl : false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  }
}
